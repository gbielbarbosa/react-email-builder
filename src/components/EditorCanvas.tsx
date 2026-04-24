import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { EmailEditor, type EmailEditorRef } from '@react-email/editor';
import {
  ColumnsColumn,
  GlobalContent,
  StarterKit,
  Paragraph,
  Section,
  Container,
  TwoColumns,
  ThreeColumns,
  FourColumns,
} from '@react-email/editor/extensions';
import { EDITOR_THEMES, EmailTheming, getMergedCssJs, INBOX_EMAIL_DEFAULTS } from '@react-email/editor/plugins';
import { Extension } from '@tiptap/core';
import { Placeholder } from '@tiptap/extension-placeholder';
import { NodeSelection, Plugin, PluginKey } from '@tiptap/pm/state';
import { Spacer } from '../extensions/Spacer';

// --------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------

/**
 * Node types that should not trigger the bubble menu when selected.
 * Structural and atomic nodes are excluded since they use the inspector panel instead.
 */
const HIDDEN_BUBBLE_MENU_NODES = [
  'spacer', 'section', 'container',
  'twoColumns', 'threeColumns', 'fourColumns', 'columnsColumn',
  'image', 'divider',
];

/** StarterKit extensions overridden by custom implementations below. */
const STARTER_KIT_OVERRIDES = {
  GlobalContent: false,
  TrailingNode:  false,
  Paragraph:     false,
  Section:       false,
  TwoColumns:    false,
  ThreeColumns:  false,
  FourColumns:   false,
  ColumnsColumn: false,
  Container:     false,
} as const;

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

/**
 * Extends a node extension with draggable/selectable behavior and
 * attaches a stable CSS class for styling via `builder.css`.
 */
const extendAsBlock = (ext: any, className: string) =>
  ext.extend({
    selectable: true,
    draggable: true,
    isolated: true,
    name: ext.name,

    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: className,
          renderHTML: (attributes: any) => ({
            class: `${attributes.class || ''} ${className}`.trim(),
          }),
        },
      };
    },

    renderHTML({ HTMLAttributes }: any) {
      return this.parent?.({
        HTMLAttributes: { ...HTMLAttributes, 'data-node-type': className },
      });
    },
  });

/**
 * Resolves the default CSS style string for a given node type
 * from the active theme configuration.
 */
const getDefaultStyleFor = (editor: any, nodeType: string): string => {
  const themePlugin = editor.extensionManager.extensions.find(
    (e: any) => e.name === 'emailTheming'
  );
  const themeName = themePlugin?.options?.theme || 'basic';
  const themeConfig = EDITOR_THEMES[themeName as keyof typeof EDITOR_THEMES];
  if (!themeConfig) return '';

  const group = themeConfig.find((g: any) => g.id === nodeType);
  if (!group) return '';

  return group.inputs
    .filter((i: any) => i.value !== undefined)
    .map((i: any) => {
      // Convert camelCase property names to kebab-case CSS properties
      const prop = i.prop.replace(/([A-Z])/g, '-$1').toLowerCase();
      const unit = i.unit || '';
      return `${prop}: ${i.value}${unit};`;
    })
    .join(' ');
};

// --------------------------------------------------------------------------
// Custom extensions
// --------------------------------------------------------------------------

const CustomGlobalContent = GlobalContent.extend({
  selectable: false,
  addAttributes() {
    return {
      ...this.parent?.(),
      data: {
        default: {},
        // Serialize the data object as a JSON string in the DOM attribute
        renderHTML: (attributes: any) => ({
          data: JSON.stringify(attributes.data),
        }),
        // Deserialize the JSON string back into an object when parsing HTML
        parseHTML: (element: HTMLElement) => {
          const raw = element.getAttribute('data');
          try {
            return JSON.parse(raw || '{}');
          } catch {
            return {};
          }
        },
      },
    };
  },
});

const CustomParagraph    = extendAsBlock(Paragraph, 'node-paragraph');
const CustomSection      = extendAsBlock(Section.extend({ content: 'block*' }), 'node-section');
const CustomTwoColumns   = extendAsBlock(TwoColumns,   'node-columns');
const CustomThreeColumns = extendAsBlock(ThreeColumns, 'node-columns');
const CustomFourColumns  = extendAsBlock(FourColumns,  'node-columns');
const CustomColumn       = extendAsBlock(ColumnsColumn.extend({ content: 'block*' }), 'node-column');

/**
 * ProseMirror plugin that intercepts mousedown events on nodes marked with
 * `data-node-type` and converts them into proper NodeSelections.
 * This ensures structural blocks (sections, columns, etc.) are selectable
 * by clicking their padding/border area.
 */
const SelectionHelper = Extension.create({
  name: 'selectionHelper',
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('selectionHelper'),
        props: {
          handleDOMEvents: {
            mousedown(view, event) {
              const { state, dispatch } = view;
              const pos = view.posAtCoords({ left: event.clientX, top: event.clientY });
              if (!pos) return false;

              const $pos = state.doc.resolve(pos.pos);

              // Walk up the tree to find the nearest selectable ancestor
              let selectablePos = -1;
              for (let d = $pos.depth; d >= 0; d--) {
                const node = $pos.node(d);
                if (node.type.spec.selectable) {
                  selectablePos = $pos.before(d);
                  break;
                }
              }

              if (selectablePos >= 0) {
                const target = event.target as HTMLElement;

                // Only intercept clicks on the node container itself (e.g. its padding/border)
                if (target.hasAttribute('data-node-type')) {
                  try {
                    dispatch(state.tr.setSelection(NodeSelection.create(state.doc, selectablePos)));
                    if (target.getAttribute('data-node-type') !== 'node-paragraph') {
                      event.preventDefault();
                    }
                    return true;
                  } catch {
                    // Fail silently — position may be invalid
                  }
                }
              }
              return false;
            },
          },
        },
      }),
    ];
  },
});

/**
 * ProseMirror plugin that handles blocks dragged from the sidebar
 * and dropped onto the editor canvas.
 */
const ExternalDropHandler = Extension.create({
  name: 'externalDropHandler',
  addProseMirrorPlugins() {
    const editor = this.editor;
    return [
      new Plugin({
        key: new PluginKey('externalDropHandler'),
        props: {
          handleDrop(view, event) {
            const rawData = event.dataTransfer?.getData('application/react-email-block');
            if (!rawData) return false;

            try {
              const { type } = JSON.parse(rawData);
              const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
              if (!coordinates) return false;

              const $pos = view.state.doc.resolve(coordinates.pos);
              const parent = $pos.parent;

              // If dropping inside an inline context, insert after the current block
              let insertPos = coordinates.pos;
              if (parent.type.spec.content?.includes('inline')) {
                insertPos = $pos.after();
              }

              const schema = view.state.schema;
              let node;

              switch (type) {
                case 'heading':
                  node = schema.nodes.heading.create(
                    { level: 1, style: getDefaultStyleFor(editor, 'heading') },
                    schema.text('Heading')
                  );
                  break;

                case 'text':
                  node = schema.nodes.paragraph.create({
                    style: getDefaultStyleFor(editor, 'paragraph'),
                  });
                  break;

                case 'button':
                  node = schema.nodes.button.create(
                    { style: getDefaultStyleFor(editor, 'button') },
                    schema.text('Click Me')
                  );
                  break;

                case 'twoColumns':
                case 'threeColumns':
                case 'fourColumns': {
                  const count = type === 'twoColumns' ? 2 : type === 'threeColumns' ? 3 : 4;
                  const cols = Array.from({ length: count }, () =>
                    schema.nodes.columnsColumn.create(null, [])
                  );
                  node = schema.nodes[type].create(
                    { style: getDefaultStyleFor(editor, type) },
                    cols
                  );
                  break;
                }

                case 'divider':
                  node = schema.nodes.divider
                    ? schema.nodes.divider.create()
                    : schema.nodes.horizontalRule.create();
                  break;

                case 'image':
                  if (schema.nodes.image) {
                    node = schema.nodes.image.create({
                      src: 'https://placehold.co/600x400?text=Select+Image',
                      alt: 'No image selected',
                      style: getDefaultStyleFor(editor, 'image'),
                    });
                  }
                  break;

                case 'link':
                  if (schema.nodes.link) {
                    node = schema.nodes.paragraph.create(
                      { style: getDefaultStyleFor(editor, 'link') },
                      [
                        schema.text('Link: '),
                        schema.text('example.com', [schema.marks.link.create({ href: '#' })]),
                      ]
                    );
                  }
                  break;

                default:
                  if (schema.nodes[type]) {
                    node = schema.nodes[type].create({ style: getDefaultStyleFor(editor, type) });
                  }
              }

              if (node) {
                const tr = view.state.tr.insert(insertPos, node);
                if (tr.docChanged) {
                  view.dispatch(tr);
                  return true;
                }
              }
            } catch (e) {
              console.error('Error handling drop:', e);
            }
            return false;
          },
        },
      }),
    ];
  },
});

/**
 * Extension that runs once on editor creation to inject the `globalContent`
 * node with the active theme's merged default styles.
 * Only runs if no `globalContent` node is already present in the document.
 */
const ThemeInitializer = Extension.create({
  name: 'themeInitializer',
  onCreate() {
    const { state } = this.editor;
    const themePlugin = this.editor.extensionManager.extensions.find(
      (e: any) => e.name === 'emailTheming'
    );
    const themeName = (themePlugin?.options?.theme || 'basic') as any;
    const hasGlobal = state.doc.firstChild?.type.name === 'globalContent';

    if (hasGlobal) return;

    const themeKey = themeName as keyof typeof EDITOR_THEMES;
    const mergedStyles = getMergedCssJs(themeName, EDITOR_THEMES[themeKey]);

    // Patch each theme group to include a top-level "Padding" input
    const patchedStyles = EDITOR_THEMES[themeKey].map((group: any) => {
      const paddingInput = {
        label: 'Padding',
        type: 'number',
        value: 8,
        prop: 'padding',
        classReference: group.classReference,
        unit: 'px',
      };

      return {
        ...group,
        inputs: [
          ...group.inputs.map((input: any) => {
            // Normalize individual padding values for the body group
            if (input.prop.startsWith('padding') && group.id === 'body') {
              return { ...input, value: 8 };
            }
            return input;
          }),
          paddingInput,
        ],
      };
    });

    this.editor.commands.insertContentAt(0, {
      type: 'globalContent',
      attrs: {
        data: {
          body: {
            ...(INBOX_EMAIL_DEFAULTS.body || {}),
            ...(mergedStyles.body || {}),
            paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8,
          },
          container: {
            ...(INBOX_EMAIL_DEFAULTS.container || {}),
            ...(mergedStyles.container || {}),
            width: 600,
            padding: 8, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0,
          },
          styles: patchedStyles,
        },
      },
    });
  },
});

// --------------------------------------------------------------------------
// Component
// --------------------------------------------------------------------------

interface EditorCanvasProps {
  onReady?: (ref: EmailEditorRef) => void;
  children?: React.ReactNode;
}

export const EditorCanvas = forwardRef<EmailEditorRef, EditorCanvasProps>(
  ({ onReady, children }, ref) => {
    const editorRef = useRef<EmailEditorRef>(null);
    useImperativeHandle(ref, () => editorRef.current!);

    return (
      <div className="reb-canvas-container tiptap-extended">
        <EmailEditor
          ref={editorRef}
          className="reb-editor"
          onReady={onReady}
          onUploadImage={async (file) => ({ url: URL.createObjectURL(file) })}
          bubbleMenu={{ hideWhenActiveNodes: HIDDEN_BUBBLE_MENU_NODES }}
          extensions={[
            EmailTheming.configure({ theme: 'basic' }),
            StarterKit.configure(STARTER_KIT_OVERRIDES),
            SelectionHelper,
            CustomGlobalContent,
            CustomParagraph,
            CustomSection,
            CustomColumn,
            CustomTwoColumns,
            CustomThreeColumns,
            CustomFourColumns,
            Container.extend({ content: 'block*' }),
            Placeholder.configure({
              placeholder: ({ node }) => {
                if (node.type.name === 'heading')   return 'Heading';
                if (node.type.name === 'paragraph') return 'Add your text here...';
                return 'Drag components here...';
              },
              includeChildren: true,
              showOnlyCurrent: false,
            }),
            Spacer,
            ExternalDropHandler,
            ThemeInitializer,
          ]}
        >
          {children}
        </EmailEditor>
      </div>
    );
  }
);
