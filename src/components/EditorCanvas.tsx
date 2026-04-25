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
} from '@react-email/editor/extensions';
import { EDITOR_THEMES, EmailTheming, extendTheme, getMergedCssJs, INBOX_EMAIL_DEFAULTS } from '@react-email/editor/plugins';
import { Extension } from '@tiptap/core';
import { Placeholder } from '@tiptap/extension-placeholder';
import { NodeSelection, Plugin, PluginKey } from '@tiptap/pm/state';

// --------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------

/**
 * Node types that should not trigger the bubble menu when selected.
 * Structural and atomic nodes are excluded since they use the inspector panel instead.
 */
const HIDDEN_BUBBLE_MENU_NODES = [
  'spacer', 'section', 'container',
  'columns', 'columnsColumn',
  'image', 'divider',
];

/** StarterKit extensions overridden by custom implementations below. */
const STARTER_KIT_OVERRIDES = {
  TrailingNode: false,
  Paragraph: false,
  Section: false,
  TwoColumns: false,
  ThreeColumns: false,
  FourColumns: false,
  ColumnsColumn: false,
  Container: false,
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

    renderHTML({ node, HTMLAttributes }: any) {
      return this.parent!({
        node,
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
      const prop = i.prop.replace(/([A-Z])/g, '-$1').toLowerCase();
      const unit = i.unit || '';
      return `${prop}: ${i.value}${unit};`;
    })
    .join(' ');
};

// --------------------------------------------------------------------------
// Custom extensions
// --------------------------------------------------------------------------

const CustomParagraph = extendAsBlock(Paragraph, 'node-paragraph');
const CustomSection = extendAsBlock(Section.extend({ content: 'block*' }), 'node-section');
const CustomColumn = extendAsBlock(ColumnsColumn.extend({ content: 'block*' }), 'node-column');

/**
 * Unified columns extension - replaces TwoColumns/ThreeColumns/FourColumns.
 * Uses `columnCount` attribute (2–4) to control how many columnsColumn children
 * are expected. Content is `columnsColumn+` to allow any number of children.
 */
const CustomColumns = TwoColumns.extend({
  name: 'columns',
  content: 'columnsColumn+',
  selectable: true,
  draggable: true,
  isolated: true,

  addAttributes() {
    return {
      ...this.parent?.(),
      columnCount: {
        default: 2,
        renderHTML: (attributes: any) => ({
          'data-column-count': String(attributes.columnCount ?? 2),
        }),
        parseHTML: (element: HTMLElement) => {
          return parseInt(element.getAttribute('data-column-count') || '2', 10);
        },
      },
      class: {
        default: 'node-columns',
        renderHTML: () => ({ class: 'node-columns' }),
      },
    };
  },

  renderHTML({ node, HTMLAttributes }: any) {
    return this.parent!({
      node,
      HTMLAttributes: { ...HTMLAttributes, 'data-node-type': 'node-columns' },
    });
  },
});

/**
 * Walks up the DOM from `el` and returns the closest element that has
 * a `data-node-type` attribute, or `null` if none is found.
 */
function closestNodeTypeEl(el: HTMLElement | null): HTMLElement | null {
  let cur: HTMLElement | null = el;
  while (cur) {
    if (cur.hasAttribute('data-node-type')) return cur;
    cur = cur.parentElement;
  }
  return null;
}

/**
 * ProseMirror plugin that intercepts mousedown events on nodes marked with
 * `data-node-type` and converts them into proper NodeSelections.
 *
 * Key fix: we walk up the DOM from the actual event target to find the
 * closest `data-node-type` element, then resolve its PM position so we
 * always select the innermost matching node (e.g. a paragraph inside a
 * column column) rather than an ancestor.
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

              // Find the closest DOM element that represents a PM node.
              const nodeEl = closestNodeTypeEl(event.target as HTMLElement);
              if (!nodeEl) return false;

              const nodeType = nodeEl.getAttribute('data-node-type');

              // For paragraphs we allow normal text cursor placement,
              // so we only set a NodeSelection, but don't preventDefault.
              const isParagraph = nodeType === 'node-paragraph';

              // Resolve the PM position for the clicked DOM element.
              const pos = view.posAtCoords({ left: event.clientX, top: event.clientY });
              if (!pos) return false;

              const $pos = state.doc.resolve(pos.pos);

              // Walk up the PM node tree to find the selectable node that
              // corresponds to the DOM element we identified above.
              let selectablePos = -1;
              for (let d = $pos.depth; d >= 0; d--) {
                const node = $pos.node(d);
                if (!node.type.spec.selectable) continue;

                // Match the PM node to the DOM element by node-type class.
                const pmClass = `node-${node.type.name}`
                  .replace('columnsColumn', 'node-column') // normalise alias
                  .replace('node-node-', 'node-');         // guard double prefix

                // Accept either a direct class match or exact data-node-type match.
                if (
                  node.type.name === nodeType?.replace('node-', '') ||
                  `node-${node.type.name}` === nodeType
                ) {
                  selectablePos = $pos.before(d);
                  break;
                }

                // Fallback: take the deepest selectable ancestor.
                if (selectablePos < 0) {
                  selectablePos = $pos.before(d);
                }
              }

              if (selectablePos >= 0) {
                try {
                  dispatch(state.tr.setSelection(NodeSelection.create(state.doc, selectablePos)));
                  if (!isParagraph) {
                    event.preventDefault();
                  }
                  return !isParagraph;
                } catch {
                  // Fail silently
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

              let insertPos = coordinates.pos;
              if (parent.type.spec.content?.includes('inline')) {
                insertPos = $pos.after();
              }

              const schema = view.state.schema;
              let node;

              // Containers may only be dropped directly inside doc (the body).
              if (type === 'container') {
                const $drop = view.state.doc.resolve(coordinates.pos);
                const directParentIsBody = $drop.parent.type.name === 'doc';
                const grandParentIsBody =
                  $drop.depth >= 2 &&
                  $drop.node($drop.depth - 1).type.name === 'doc';
                if (!directParentIsBody && !grandParentIsBody) return false;
              }

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

                case 'columns': {
                  const cols = Array.from({ length: 2 }, () =>
                    schema.nodes.columnsColumn.create(null, [])
                  );
                  node = schema.nodes.columns.create(
                    { columnCount: 2, style: getDefaultStyleFor(editor, 'twoColumns') },
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

// --------------------------------------------------------------------------
// Component
// --------------------------------------------------------------------------

interface EditorCanvasProps {
  onReady?: (ref: EmailEditorRef) => void;
  children?: React.ReactNode;
}

const customTheme = extendTheme("basic", {
  body: { fontFamily: "system-ui", padding: 8 },
  container: { width: 600, padding: 8 }
});

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
            EmailTheming.configure({ theme: customTheme }),
            StarterKit.configure(STARTER_KIT_OVERRIDES),
            SelectionHelper,
            CustomParagraph,
            CustomSection,
            CustomColumn,
            CustomColumns,
            Container.extend({ content: 'block*' }),
            Placeholder.configure({
              placeholder: ({ node }) => {
                if (node.type.name === 'heading') return 'Heading';
                if (node.type.name === 'paragraph') return 'Add your text here...';
                return 'Drag components here...';
              },
              includeChildren: true,
              showOnlyCurrent: false,
            }),
            ExternalDropHandler,
          ]}
        >
          {children}
        </EmailEditor>
      </div>
    );
  }
);
