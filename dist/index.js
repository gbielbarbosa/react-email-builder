// src/components/EmailBuilder.tsx
import { useState as useState2 } from "react";

// src/components/Sidebar.tsx
import { useState, useEffect } from "react";

// src/Icons.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IconText = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M17 6.1H3" }),
  /* @__PURE__ */ jsx("path", { d: "M21 12.1H3" }),
  /* @__PURE__ */ jsx("path", { d: "M15.1 18H3" })
] });
var IconImage = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
  /* @__PURE__ */ jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] });
var IconButton = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: /* @__PURE__ */ jsx("rect", { width: "18", height: "12", x: "3", y: "6", rx: "3" }) });
var IconContainer = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M3 9h18" }),
  /* @__PURE__ */ jsx("path", { d: "M9 21V9" })
] });
var IconColumn = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M12 3v18" })
] });
var IconHeading = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M4 12h8" }),
  /* @__PURE__ */ jsx("path", { d: "M4 18V6" }),
  /* @__PURE__ */ jsx("path", { d: "M12 18V6" }),
  /* @__PURE__ */ jsx("path", { d: "M21 18V6" }),
  /* @__PURE__ */ jsx("path", { d: "M16 12h5" })
] });
var IconLink = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] });
var IconMarkdown = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M7 16V8l4 4 4-4v8" })
] });
var IconDivider = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: /* @__PURE__ */ jsx("line", { x1: "5", x2: "19", y1: "12", y2: "12" }) });
var IconSection = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ jsx("path", { d: "M3 12h18" })
] });

// src/components/Sidebar.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TOOLS = [
  { type: "container", label: "Container", icon: IconContainer },
  { type: "section", label: "Section", icon: IconSection },
  { type: "columns", label: "Columns", icon: IconColumn },
  { type: "heading", label: "Heading", icon: IconHeading },
  { type: "text", label: "Text", icon: IconText },
  { type: "image", label: "Image", icon: IconImage },
  { type: "button", label: "Button", icon: IconButton },
  { type: "link", label: "Link", icon: IconLink },
  { type: "markdown", label: "Markdown", icon: IconMarkdown },
  { type: "divider", label: "Divider", icon: IconDivider }
];
var ToolItem = ({ type, label, icon: Icon }) => {
  const handleDragStart = (e) => {
    const blockType = type;
    e.dataTransfer.setData("application/react-email-block", JSON.stringify({ type: blockType }));
    e.dataTransfer.effectAllowed = "move";
  };
  return /* @__PURE__ */ jsxs2("div", { className: "reb-tool-item", draggable: true, onDragStart: handleDragStart, children: [
    /* @__PURE__ */ jsx2(Icon, {}),
    /* @__PURE__ */ jsx2("span", { children: label })
  ] });
};
var Sidebar = ({ editor }) => {
  const [activeTab, setActiveTab] = useState("components");
  const [structure, setStructure] = useState([]);
  useEffect(() => {
    if (!editor) return;
    const updateStructure = () => {
      const nodes = [];
      editor.state.doc.descendants((node, pos) => {
        const isRelevantBlock = node.isBlock || node.type.name === "button" || node.type.name === "image";
        if (isRelevantBlock && node.type.name !== "doc") {
          nodes.push({
            type: node.type.name,
            pos,
            depth: editor.state.doc.resolve(pos).depth,
            label: node.type.name.charAt(0).toUpperCase() + node.type.name.slice(1)
          });
        }
        return true;
      });
      setStructure(nodes);
    };
    updateStructure();
    editor.on("update", updateStructure);
    return () => {
      editor.off("update", updateStructure);
    };
  }, [editor, activeTab]);
  const selectNode = (pos) => {
    editor?.chain().focus().setNodeSelection(pos).run();
  };
  const deleteNode = (e, pos) => {
    e.stopPropagation();
    editor?.chain().focus().setNodeSelection(pos).deleteSelection().run();
  };
  return /* @__PURE__ */ jsxs2("div", { className: "reb-sidebar", children: [
    /* @__PURE__ */ jsx2("div", { className: "reb-sidebar-tabs", children: ["components", "structure"].map((tab) => /* @__PURE__ */ jsx2(
      "div",
      {
        className: `reb-sidebar-tab${activeTab === tab ? " active" : ""}`,
        onClick: () => setActiveTab(tab),
        children: tab.charAt(0).toUpperCase() + tab.slice(1)
      },
      tab
    )) }),
    /* @__PURE__ */ jsx2("div", { className: "reb-sidebar-content", children: activeTab === "components" ? /* @__PURE__ */ jsx2("div", { className: "reb-tools-grid", children: TOOLS.map((tool) => /* @__PURE__ */ jsx2(ToolItem, { type: tool.type, label: tool.label, icon: tool.icon }, tool.type)) }) : /* @__PURE__ */ jsx2("div", { className: "reb-structure-list", children: structure.length === 0 ? /* @__PURE__ */ jsx2("div", { className: "reb-structure-empty", children: "No blocks found." }) : structure.map((item, idx) => /* @__PURE__ */ jsxs2(
      "div",
      {
        className: "reb-structure-item",
        onClick: () => selectNode(item.pos),
        style: { paddingLeft: `${(item.depth - 1) * 12 + 8}px` },
        children: [
          /* @__PURE__ */ jsxs2("div", { className: "reb-structure-item-content", children: [
            /* @__PURE__ */ jsx2("span", { className: "reb-structure-item-icon", children: "\u2022" }),
            item.label
          ] }),
          /* @__PURE__ */ jsx2(
            "button",
            {
              className: "reb-structure-delete-btn",
              onClick: (e) => deleteNode(e, item.pos),
              title: "Remove block",
              children: "\u2715"
            }
          )
        ]
      },
      `${item.pos}-${idx}`
    )) }) })
  ] });
};

// src/components/EditorCanvas.tsx
import { useRef, useImperativeHandle, forwardRef } from "react";
import { EmailEditor } from "@react-email/editor";
import {
  ColumnsColumn,
  StarterKit,
  Paragraph,
  Section,
  Container,
  TwoColumns
} from "@react-email/editor/extensions";
import { EDITOR_THEMES, EmailTheming, extendTheme } from "@react-email/editor/plugins";
import { Extension } from "@tiptap/core";
import { Placeholder } from "@tiptap/extension-placeholder";
import { NodeSelection, Plugin, PluginKey } from "@tiptap/pm/state";
import { jsx as jsx3 } from "react/jsx-runtime";
var HIDDEN_BUBBLE_MENU_NODES = [
  "spacer",
  "section",
  "container",
  "columns",
  "columnsColumn",
  "image",
  "divider"
];
var STARTER_KIT_OVERRIDES = {
  TrailingNode: false,
  Paragraph: false,
  Section: false,
  TwoColumns: false,
  ThreeColumns: false,
  FourColumns: false,
  ColumnsColumn: false,
  Container: false
};
var extendAsBlock = (ext, className) => ext.extend({
  selectable: true,
  draggable: true,
  isolated: true,
  name: ext.name,
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: className,
        renderHTML: (attributes) => ({
          class: `${attributes.class || ""} ${className}`.trim()
        })
      }
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    return this.parent({
      node,
      HTMLAttributes: { ...HTMLAttributes, "data-node-type": className }
    });
  }
});
var getDefaultStyleFor = (editor, nodeType) => {
  const themePlugin = editor.extensionManager.extensions.find(
    (e) => e.name === "emailTheming"
  );
  const themeName = themePlugin?.options?.theme || "basic";
  const themeConfig = EDITOR_THEMES[themeName];
  if (!themeConfig) return "";
  const group = themeConfig.find((g) => g.id === nodeType);
  if (!group) return "";
  return group.inputs.filter((i) => i.value !== void 0).map((i) => {
    const prop = i.prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    const unit = i.unit || "";
    return `${prop}: ${i.value}${unit};`;
  }).join(" ");
};
var CustomParagraph = extendAsBlock(Paragraph, "node-paragraph");
var CustomSection = extendAsBlock(Section.extend({ content: "block*" }), "node-section");
var CustomColumn = extendAsBlock(ColumnsColumn.extend({ content: "block*" }), "node-column");
var CustomColumns = TwoColumns.extend({
  name: "columns",
  content: "columnsColumn+",
  selectable: true,
  draggable: true,
  isolated: true,
  addAttributes() {
    return {
      ...this.parent?.(),
      columnCount: {
        default: 2,
        renderHTML: (attributes) => ({
          "data-column-count": String(attributes.columnCount ?? 2)
        }),
        parseHTML: (element) => {
          return parseInt(element.getAttribute("data-column-count") || "2", 10);
        }
      },
      class: {
        default: "node-columns",
        renderHTML: () => ({ class: "node-columns" })
      }
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    return this.parent({
      node,
      HTMLAttributes: { ...HTMLAttributes, "data-node-type": "node-columns" }
    });
  }
});
function closestNodeTypeEl(el) {
  let cur = el;
  while (cur) {
    if (cur.hasAttribute("data-node-type")) return cur;
    cur = cur.parentElement;
  }
  return null;
}
var SelectionHelper = Extension.create({
  name: "selectionHelper",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("selectionHelper"),
        props: {
          handleDOMEvents: {
            mousedown(view, event) {
              const { state, dispatch } = view;
              const nodeEl = closestNodeTypeEl(event.target);
              if (!nodeEl) return false;
              const nodeType = nodeEl.getAttribute("data-node-type");
              const isParagraph = nodeType === "node-paragraph";
              const pos = view.posAtCoords({ left: event.clientX, top: event.clientY });
              if (!pos) return false;
              const $pos = state.doc.resolve(pos.pos);
              let selectablePos = -1;
              for (let d = $pos.depth; d >= 0; d--) {
                const node = $pos.node(d);
                if (!node.type.spec.selectable) continue;
                const pmClass = `node-${node.type.name}`.replace("columnsColumn", "node-column").replace("node-node-", "node-");
                if (node.type.name === nodeType?.replace("node-", "") || `node-${node.type.name}` === nodeType) {
                  selectablePos = $pos.before(d);
                  break;
                }
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
                }
              }
              return false;
            }
          }
        }
      })
    ];
  }
});
var ExternalDropHandler = Extension.create({
  name: "externalDropHandler",
  addProseMirrorPlugins() {
    const editor = this.editor;
    return [
      new Plugin({
        key: new PluginKey("externalDropHandler"),
        props: {
          handleDrop(view, event) {
            const rawData = event.dataTransfer?.getData("application/react-email-block");
            if (!rawData) return false;
            try {
              const { type } = JSON.parse(rawData);
              const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
              if (!coordinates) return false;
              const $pos = view.state.doc.resolve(coordinates.pos);
              const parent = $pos.parent;
              let insertPos = coordinates.pos;
              if (parent.type.spec.content?.includes("inline")) {
                insertPos = $pos.after();
              }
              const schema = view.state.schema;
              let node;
              if (type === "container") {
                const $drop = view.state.doc.resolve(coordinates.pos);
                const directParentIsBody = $drop.parent.type.name === "doc";
                const grandParentIsBody = $drop.depth >= 2 && $drop.node($drop.depth - 1).type.name === "doc";
                if (!directParentIsBody && !grandParentIsBody) return false;
              }
              switch (type) {
                case "heading":
                  node = schema.nodes.heading.create(
                    { level: 1, style: getDefaultStyleFor(editor, "heading") },
                    schema.text("Heading")
                  );
                  break;
                case "text":
                  node = schema.nodes.paragraph.create({
                    style: getDefaultStyleFor(editor, "paragraph")
                  });
                  break;
                case "button":
                  node = schema.nodes.button.create(
                    { style: getDefaultStyleFor(editor, "button") },
                    schema.text("Click Me")
                  );
                  break;
                case "columns": {
                  const cols = Array.from(
                    { length: 2 },
                    () => schema.nodes.columnsColumn.create(null, [])
                  );
                  node = schema.nodes.columns.create(
                    { columnCount: 2, style: getDefaultStyleFor(editor, "twoColumns") },
                    cols
                  );
                  break;
                }
                case "divider":
                  node = schema.nodes.divider ? schema.nodes.divider.create() : schema.nodes.horizontalRule.create();
                  break;
                case "image":
                  if (schema.nodes.image) {
                    node = schema.nodes.image.create({
                      src: "https://placehold.co/600x400?text=Select+Image",
                      alt: "No image selected",
                      style: getDefaultStyleFor(editor, "image")
                    });
                  }
                  break;
                case "link":
                  if (schema.nodes.link) {
                    node = schema.nodes.paragraph.create(
                      { style: getDefaultStyleFor(editor, "link") },
                      [
                        schema.text("Link: "),
                        schema.text("example.com", [schema.marks.link.create({ href: "#" })])
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
              console.error("Error handling drop:", e);
            }
            return false;
          }
        }
      })
    ];
  }
});
var customTheme = extendTheme("basic", {
  body: { fontFamily: "system-ui", padding: 8 },
  container: { width: 600, padding: 8 }
});
var EditorCanvas = forwardRef(
  ({ onReady, children }, ref) => {
    const editorRef = useRef(null);
    useImperativeHandle(ref, () => editorRef.current);
    return /* @__PURE__ */ jsx3("div", { className: "reb-canvas-container tiptap-extended", children: /* @__PURE__ */ jsx3(
      EmailEditor,
      {
        ref: editorRef,
        className: "reb-editor",
        onReady,
        onUploadImage: async (file) => ({ url: URL.createObjectURL(file) }),
        bubbleMenu: { hideWhenActiveNodes: HIDDEN_BUBBLE_MENU_NODES },
        extensions: [
          EmailTheming.configure({ theme: customTheme }),
          StarterKit.configure(STARTER_KIT_OVERRIDES),
          SelectionHelper,
          CustomParagraph,
          CustomSection,
          CustomColumn,
          CustomColumns,
          Container.extend({ content: "block*" }),
          Placeholder.configure({
            placeholder: ({ node }) => {
              if (node.type.name === "heading") return "Heading";
              if (node.type.name === "paragraph") return "Add your text here...";
              return "Drag components here...";
            },
            includeChildren: true,
            showOnlyCurrent: false
          }),
          ExternalDropHandler
        ],
        children
      }
    ) });
  }
);

// src/components/ColumnControls.tsx
import { useCurrentEditor } from "@tiptap/react";
import { Columns2Icon, Columns3Icon, Columns4Icon } from "@react-email/editor/ui";

// src/components/InspectorPrimitives.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var InspectorSection = ({ title, children }) => /* @__PURE__ */ jsxs3("div", { "data-re-inspector-section": "", "data-has-title": "", children: [
  /* @__PURE__ */ jsx4("div", { "data-re-inspector-section-header": "", children: /* @__PURE__ */ jsx4("button", { type: "button", "data-re-inspector-section-toggle": "", children: /* @__PURE__ */ jsx4("span", { "data-re-inspector-text": "", children: title }) }) }),
  /* @__PURE__ */ jsx4("div", { "data-re-inspector-section-body": "", children })
] });
var InspectorRow = ({ label, children }) => /* @__PURE__ */ jsxs3("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ jsx4("label", { "data-re-inspector-label": "", children: label }),
  children
] });
var InspectorTextInput = ({ label, ...inputProps }) => /* @__PURE__ */ jsxs3("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ jsx4("label", { "data-re-inspector-label": "", children: label }),
  /* @__PURE__ */ jsx4("div", { "data-re-inspector-number": "", style: { flex: 1 }, children: /* @__PURE__ */ jsx4(
    "input",
    {
      "data-re-inspector-input": true,
      type: "text",
      style: { width: "100%", maxWidth: "unset" },
      ...inputProps
    }
  ) })
] });
var InspectorSelect = ({ label, children, ...selectProps }) => /* @__PURE__ */ jsxs3("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ jsx4("label", { "data-re-inspector-label": "", children: label }),
  /* @__PURE__ */ jsx4("div", { "data-re-inspector-select": "", children: /* @__PURE__ */ jsx4(
    "select",
    {
      "data-re-inspector-input": true,
      style: { background: "transparent", border: "none", outline: "none", fontSize: "0.75rem", color: "inherit", cursor: "pointer", maxWidth: "9rem" },
      ...selectProps,
      children
    }
  ) })
] });
var InspectorToggleGroup = ({ label, children }) => /* @__PURE__ */ jsxs3("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ jsx4("label", { "data-re-inspector-label": "", children: label }),
  /* @__PURE__ */ jsx4("div", { "data-re-inspector-toggle-group": "", children })
] });
var InspectorToggleItem = ({ isActive, children, ...rest }) => /* @__PURE__ */ jsx4(
  "button",
  {
    type: "button",
    "data-re-inspector-toggle-item": "",
    ...isActive ? { "data-active": "" } : {},
    ...rest,
    children
  }
);

// src/components/ColumnControls.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var ColumnControls = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  const { selection } = editor.state;
  const node = editor.state.doc.nodeAt(selection.from);
  const isColumnsNode = node && node.type.name === "columns";
  if (!isColumnsNode) return null;
  const currentCount = node.attrs.columnCount || 2;
  const changeColumns = (count) => {
    editor.chain().focus().command(({ tr, state, dispatch }) => {
      if (dispatch) {
        const currentPos = state.selection.from;
        const currentNode = state.doc.nodeAt(currentPos);
        if (currentNode) {
          const existingCols = [];
          currentNode.content.forEach((col) => existingCols.push(col));
          const newCols = Array.from({ length: count }, (_, i) => {
            if (i < existingCols.length) return existingCols[i];
            return state.schema.nodes.columnsColumn.create(null, []);
          });
          const newNode = state.schema.nodes.columns.create(
            { ...currentNode.attrs, columnCount: count },
            newCols
          );
          tr.replaceWith(currentPos, currentPos + currentNode.nodeSize, newNode);
        }
      }
      return true;
    }).run();
  };
  const COLUMN_OPTIONS = [
    { count: 2, Icon: Columns2Icon },
    { count: 3, Icon: Columns3Icon },
    { count: 4, Icon: Columns4Icon }
  ];
  return /* @__PURE__ */ jsx5(InspectorSection, { title: "Column Layout", children: /* @__PURE__ */ jsx5(InspectorToggleGroup, { label: "Columns", children: COLUMN_OPTIONS.map(({ count, Icon }) => /* @__PURE__ */ jsx5(
    InspectorToggleItem,
    {
      isActive: currentCount === count,
      onClick: () => changeColumns(count),
      title: `${count} columns`,
      children: /* @__PURE__ */ jsx5(Icon, { size: 14 })
    },
    count
  )) }) });
};

// src/components/BodyExtras.tsx
import { AlignCenterIcon, AlignCenterVerticalIcon, AlignEndVerticalIcon, AlignLeftIcon, AlignRightIcon, AlignStartVerticalIcon } from "@react-email/editor/ui";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var ALIGNMENT_ITEMS = [
  {
    value: "left",
    alternativeIcon: AlignLeftIcon,
    icon: AlignStartVerticalIcon
  },
  {
    value: "center",
    alternativeIcon: AlignCenterIcon,
    icon: AlignCenterVerticalIcon
  },
  {
    value: "right",
    alternativeIcon: AlignRightIcon,
    icon: AlignEndVerticalIcon
  }
];
var FONT_FAMILIES = [
  { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', label: "System UI" },
  { value: "Arial, Helvetica, sans-serif", label: "Arial" },
  { value: '"Helvetica Neue", Helvetica, sans-serif', label: "Helvetica Neue" },
  { value: 'Georgia, "Times New Roman", serif', label: "Georgia" },
  { value: "Verdana, Geneva, sans-serif", label: "Verdana" },
  { value: "Tahoma, Geneva, sans-serif", label: "Tahoma" },
  { value: '"Trebuchet MS", Helvetica, sans-serif', label: "Trebuchet MS" },
  { value: '"Times New Roman", Times, serif', label: "Times New Roman" },
  { value: '"Courier New", Courier, monospace', label: "Courier New" }
];
var FONT_WEIGHTS = [
  { value: "300", label: "Light (300)" },
  { value: "400", label: "Regular (400)" },
  { value: "500", label: "Medium (500)" },
  { value: "600", label: "Semi Bold (600)" },
  { value: "700", label: "Bold (700)" },
  { value: "800", label: "Extra Bold (800)" }
];
function BodyExtras({ findStyleValue, setGlobalStyle }) {
  return /* @__PURE__ */ jsxs4(InspectorSection, { title: "Email settings", children: [
    /* @__PURE__ */ jsx6(InspectorToggleGroup, { label: "Content align", children: ALIGNMENT_ITEMS.map((item, index) => /* @__PURE__ */ jsx6(
      InspectorToggleItem,
      {
        isActive: findStyleValue("body", "align") === item.value,
        onClick: (e) => setGlobalStyle("body", "align", item.value),
        children: /* @__PURE__ */ jsx6(item.icon, { size: 16 })
      },
      item.value
    )) }),
    /* @__PURE__ */ jsx6(
      InspectorSelect,
      {
        label: "Font family",
        value: findStyleValue("body", "fontFamily"),
        onChange: (e) => setGlobalStyle("body", "fontFamily", e.target.value),
        children: FONT_FAMILIES.map((f) => /* @__PURE__ */ jsx6("option", { value: f.value, children: f.label }, f.value))
      }
    ),
    /* @__PURE__ */ jsx6(
      InspectorSelect,
      {
        label: "Font weight",
        value: findStyleValue("body", "fontWeight") || "400",
        onChange: (e) => setGlobalStyle("body", "fontWeight", e.target.value),
        children: FONT_WEIGHTS.map((w) => /* @__PURE__ */ jsx6("option", { value: w.value, children: w.label }, w.value))
      }
    )
  ] });
}

// src/components/EmailBuilder.tsx
import { Inspector } from "@react-email/editor/ui";
import { Fragment, jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var EmailBuilder = () => {
  const [editorRef, setEditorRef] = useState2(null);
  const [viewMode, setViewMode] = useState2("editor");
  const [jsonContent, setJsonContent] = useState2("");
  const [htmlContent, setHtmlContent] = useState2("");
  const handleTabChange = async (mode) => {
    setViewMode(mode);
    if (mode === "json" && editorRef) {
      const json = editorRef.getJSON();
      setJsonContent(JSON.stringify(json, null, 2));
    }
    if (mode === "html" && editorRef) {
      const html = await editorRef.getEmailHTML();
      setHtmlContent(html);
    }
  };
  return /* @__PURE__ */ jsxs5("div", { className: "reb-builder-container", children: [
    /* @__PURE__ */ jsx7(Sidebar, { editor: editorRef?.editor }),
    /* @__PURE__ */ jsxs5("main", { className: "reb-main", children: [
      /* @__PURE__ */ jsx7("header", { className: "reb-header", children: /* @__PURE__ */ jsx7("div", { className: "reb-view-tabs", children: ["editor", "json", "html"].map((mode) => /* @__PURE__ */ jsx7(
        "button",
        {
          id: `reb-tab-${mode}`,
          className: `reb-view-tab${viewMode === mode ? " active" : ""}`,
          onClick: () => handleTabChange(mode),
          children: mode === "editor" ? "Editor" : mode.toUpperCase()
        },
        mode
      )) }) }),
      /* @__PURE__ */ jsxs5("div", { className: "reb-content", children: [
        /* @__PURE__ */ jsx7("div", { style: { display: viewMode === "editor" ? "contents" : "none" }, children: /* @__PURE__ */ jsx7(EditorCanvas, { onReady: setEditorRef, children: /* @__PURE__ */ jsx7("div", { className: "reb-inspector-sidebar", children: /* @__PURE__ */ jsxs5(Inspector.Root, { children: [
          /* @__PURE__ */ jsx7(Inspector.Breadcrumb, { children: (segments) => /* @__PURE__ */ jsx7("nav", { "data-re-inspector-breadcrumb": true, children: /* @__PURE__ */ jsx7("ol", { "data-re-inspector-breadcrumb-list": true, children: segments.map((segment, index) => /* @__PURE__ */ jsxs5("li", { "data-re-inspector-breadcrumb-item": true, children: [
            index !== 0 && /* @__PURE__ */ jsx7("span", { "data-re-inspector-breadcrumb-separator": "", children: "/" }),
            /* @__PURE__ */ jsx7("button", { type: "button", "data-re-inspector-breadcrumb-button": true, onClick: () => segment.focus(), children: segment.node.nodeType }, index)
          ] }, index)) }) }) }),
          /* @__PURE__ */ jsx7(Inspector.Document, { children: (context) => /* @__PURE__ */ jsxs5(Fragment, { children: [
            /* @__PURE__ */ jsx7(BodyExtras, { ...context }),
            /* @__PURE__ */ jsx7(Inspector.Document, {})
          ] }) }),
          /* @__PURE__ */ jsx7(Inspector.Node, { children: (context) => /* @__PURE__ */ jsxs5(Fragment, { children: [
            context.nodeType === "columns" && /* @__PURE__ */ jsx7(ColumnControls, {}),
            /* @__PURE__ */ jsx7(Inspector.Background, { ...context }),
            /* @__PURE__ */ jsx7(Inspector.Typography, { ...context }),
            /* @__PURE__ */ jsx7(Inspector.Padding, { ...context }),
            /* @__PURE__ */ jsx7(Inspector.Border, { ...context })
          ] }) }),
          /* @__PURE__ */ jsx7(Inspector.Text, {})
        ] }) }) }) }),
        viewMode !== "editor" && /* @__PURE__ */ jsxs5("div", { className: "reb-code-panel", children: [
          /* @__PURE__ */ jsxs5("div", { className: "reb-code-panel-header", children: [
            /* @__PURE__ */ jsx7("span", { className: "reb-code-panel-label", children: viewMode === "json" ? "JSON Structure" : "HTML Output" }),
            /* @__PURE__ */ jsx7(
              "button",
              {
                className: "reb-code-copy-btn",
                onClick: () => {
                  navigator.clipboard.writeText(viewMode === "json" ? jsonContent : htmlContent);
                },
                children: "Copy"
              }
            )
          ] }),
          /* @__PURE__ */ jsx7("pre", { className: "reb-code-content", children: /* @__PURE__ */ jsx7("code", { children: viewMode === "json" ? jsonContent : htmlContent }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  BodyExtras,
  ColumnControls,
  EditorCanvas,
  EmailBuilder,
  InspectorRow,
  InspectorSection,
  InspectorSelect,
  InspectorTextInput,
  InspectorToggleGroup,
  InspectorToggleItem,
  Sidebar
};
//# sourceMappingURL=index.js.map