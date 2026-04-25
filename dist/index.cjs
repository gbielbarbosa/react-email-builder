"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BodyExtras: () => BodyExtras,
  ColumnControls: () => ColumnControls,
  EditorCanvas: () => EditorCanvas,
  EmailBuilder: () => EmailBuilder,
  InspectorRow: () => InspectorRow,
  InspectorSection: () => InspectorSection,
  InspectorSelect: () => InspectorSelect,
  InspectorTextInput: () => InspectorTextInput,
  InspectorToggleGroup: () => InspectorToggleGroup,
  InspectorToggleItem: () => InspectorToggleItem,
  Sidebar: () => Sidebar
});
module.exports = __toCommonJS(index_exports);

// src/components/EmailBuilder.tsx
var import_react4 = require("react");

// src/components/Sidebar.tsx
var import_react = require("react");

// src/Icons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var IconText = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 6.1H3" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.1H3" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.1 18H3" })
] });
var IconImage = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] });
var IconButton = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "18", height: "12", x: "3", y: "6", rx: "3" }) });
var IconContainer = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 9h18" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 21V9" })
] });
var IconColumn = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v18" })
] });
var IconHeading = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12h8" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 18V6" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 18V6" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 18V6" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 12h5" })
] });
var IconLink = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] });
var IconMarkdown = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 16V8l4 4 4-4v8" })
] });
var IconDivider = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "5", x2: "19", y1: "12", y2: "12" }) });
var IconSection = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18" })
] });

// src/components/Sidebar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "reb-tool-item", draggable: true, onDragStart: handleDragStart, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: label })
  ] });
};
var Sidebar = ({ editor }) => {
  const [activeTab, setActiveTab] = (0, import_react.useState)("components");
  const [structure, setStructure] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "reb-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "reb-sidebar-tabs", children: ["components", "structure"].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: `reb-sidebar-tab${activeTab === tab ? " active" : ""}`,
        onClick: () => setActiveTab(tab),
        children: tab.charAt(0).toUpperCase() + tab.slice(1)
      },
      tab
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "reb-sidebar-content", children: activeTab === "components" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "reb-tools-grid", children: TOOLS.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToolItem, { type: tool.type, label: tool.label, icon: tool.icon }, tool.type)) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "reb-structure-list", children: structure.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "reb-structure-empty", children: "No blocks found." }) : structure.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: "reb-structure-item",
        onClick: () => selectNode(item.pos),
        style: { paddingLeft: `${(item.depth - 1) * 12 + 8}px` },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "reb-structure-item-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "reb-structure-item-icon", children: "\u2022" }),
            item.label
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_react2 = require("react");
var import_editor = require("@react-email/editor");
var import_extensions = require("@react-email/editor/extensions");
var import_plugins = require("@react-email/editor/plugins");
var import_core = require("@tiptap/core");
var import_extension_placeholder = require("@tiptap/extension-placeholder");
var import_state = require("@tiptap/pm/state");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const themeConfig = import_plugins.EDITOR_THEMES[themeName];
  if (!themeConfig) return "";
  const group = themeConfig.find((g) => g.id === nodeType);
  if (!group) return "";
  return group.inputs.filter((i) => i.value !== void 0).map((i) => {
    const prop = i.prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    const unit = i.unit || "";
    return `${prop}: ${i.value}${unit};`;
  }).join(" ");
};
var CustomParagraph = extendAsBlock(import_extensions.Paragraph, "node-paragraph");
var CustomSection = extendAsBlock(import_extensions.Section.extend({ content: "block*" }), "node-section");
var CustomColumn = extendAsBlock(import_extensions.ColumnsColumn.extend({ content: "block*" }), "node-column");
var CustomColumns = import_extensions.TwoColumns.extend({
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
var SelectionHelper = import_core.Extension.create({
  name: "selectionHelper",
  addProseMirrorPlugins() {
    return [
      new import_state.Plugin({
        key: new import_state.PluginKey("selectionHelper"),
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
                  dispatch(state.tr.setSelection(import_state.NodeSelection.create(state.doc, selectablePos)));
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
var ExternalDropHandler = import_core.Extension.create({
  name: "externalDropHandler",
  addProseMirrorPlugins() {
    const editor = this.editor;
    return [
      new import_state.Plugin({
        key: new import_state.PluginKey("externalDropHandler"),
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
var customTheme = (0, import_plugins.extendTheme)("basic", {
  body: { fontFamily: "system-ui", padding: 8 },
  container: { width: 600, padding: 8 }
});
var EditorCanvas = (0, import_react2.forwardRef)(
  ({ onReady, children }, ref) => {
    const editorRef = (0, import_react2.useRef)(null);
    (0, import_react2.useImperativeHandle)(ref, () => editorRef.current);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "reb-canvas-container tiptap-extended", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_editor.EmailEditor,
      {
        ref: editorRef,
        className: "reb-editor",
        onReady,
        onUploadImage: async (file) => ({ url: URL.createObjectURL(file) }),
        bubbleMenu: { hideWhenActiveNodes: HIDDEN_BUBBLE_MENU_NODES },
        extensions: [
          import_plugins.EmailTheming.configure({ theme: customTheme }),
          import_extensions.StarterKit.configure(STARTER_KIT_OVERRIDES),
          SelectionHelper,
          CustomParagraph,
          CustomSection,
          CustomColumn,
          CustomColumns,
          import_extensions.Container.extend({ content: "block*" }),
          import_extension_placeholder.Placeholder.configure({
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
var import_react3 = require("@tiptap/react");
var import_ui = require("@react-email/editor/ui");

// src/components/InspectorPrimitives.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var InspectorSection = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { "data-re-inspector-section": "", "data-has-title": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-re-inspector-section-header": "", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", "data-re-inspector-section-toggle": "", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "data-re-inspector-text": "", children: title }) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-re-inspector-section-body": "", children })
] });
var InspectorRow = ({ label, children }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { "data-re-inspector-label": "", children: label }),
  children
] });
var InspectorTextInput = ({ label, ...inputProps }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { "data-re-inspector-label": "", children: label }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-re-inspector-number": "", style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "input",
    {
      "data-re-inspector-input": true,
      type: "text",
      style: { width: "100%", maxWidth: "unset" },
      ...inputProps
    }
  ) })
] });
var InspectorSelect = ({ label, children, ...selectProps }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { "data-re-inspector-label": "", children: label }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-re-inspector-select": "", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "select",
    {
      "data-re-inspector-input": true,
      style: { background: "transparent", border: "none", outline: "none", fontSize: "0.75rem", color: "inherit", cursor: "pointer", maxWidth: "9rem" },
      ...selectProps,
      children
    }
  ) })
] });
var InspectorToggleGroup = ({ label, children }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { "data-re-inspector-prop-row": "", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { "data-re-inspector-label": "", children: label }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-re-inspector-toggle-group": "", children })
] });
var InspectorToggleItem = ({ isActive, children, ...rest }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var ColumnControls = () => {
  const { editor } = (0, import_react3.useCurrentEditor)();
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
    { count: 2, Icon: import_ui.Columns2Icon },
    { count: 3, Icon: import_ui.Columns3Icon },
    { count: 4, Icon: import_ui.Columns4Icon }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InspectorSection, { title: "Column Layout", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InspectorToggleGroup, { label: "Columns", children: COLUMN_OPTIONS.map(({ count, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    InspectorToggleItem,
    {
      isActive: currentCount === count,
      onClick: () => changeColumns(count),
      title: `${count} columns`,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { size: 14 })
    },
    count
  )) }) });
};

// src/components/BodyExtras.tsx
var import_ui2 = require("@react-email/editor/ui");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ALIGNMENT_ITEMS = [
  {
    value: "left",
    alternativeIcon: import_ui2.AlignLeftIcon,
    icon: import_ui2.AlignStartVerticalIcon
  },
  {
    value: "center",
    alternativeIcon: import_ui2.AlignCenterIcon,
    icon: import_ui2.AlignCenterVerticalIcon
  },
  {
    value: "right",
    alternativeIcon: import_ui2.AlignRightIcon,
    icon: import_ui2.AlignEndVerticalIcon
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(InspectorSection, { title: "Email settings", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InspectorToggleGroup, { label: "Content align", children: ALIGNMENT_ITEMS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      InspectorToggleItem,
      {
        isActive: findStyleValue("body", "align") === item.value,
        onClick: (e) => setGlobalStyle("body", "align", item.value),
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(item.icon, { size: 16 })
      },
      item.value
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      InspectorSelect,
      {
        label: "Font family",
        value: findStyleValue("body", "fontFamily"),
        onChange: (e) => setGlobalStyle("body", "fontFamily", e.target.value),
        children: FONT_FAMILIES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: f.value, children: f.label }, f.value))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      InspectorSelect,
      {
        label: "Font weight",
        value: findStyleValue("body", "fontWeight") || "400",
        onChange: (e) => setGlobalStyle("body", "fontWeight", e.target.value),
        children: FONT_WEIGHTS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: w.value, children: w.label }, w.value))
      }
    )
  ] });
}

// src/components/EmailBuilder.tsx
var import_ui3 = require("@react-email/editor/ui");
var import_jsx_runtime7 = require("react/jsx-runtime");
var EmailBuilder = () => {
  const [editorRef, setEditorRef] = (0, import_react4.useState)(null);
  const [viewMode, setViewMode] = (0, import_react4.useState)("editor");
  const [jsonContent, setJsonContent] = (0, import_react4.useState)("");
  const [htmlContent, setHtmlContent] = (0, import_react4.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "reb-builder-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Sidebar, { editor: editorRef?.editor }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("main", { className: "reb-main", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("header", { className: "reb-header", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "reb-view-tabs", children: ["editor", "json", "html"].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          id: `reb-tab-${mode}`,
          className: `reb-view-tab${viewMode === mode ? " active" : ""}`,
          onClick: () => handleTabChange(mode),
          children: mode === "editor" ? "Editor" : mode.toUpperCase()
        },
        mode
      )) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "reb-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { display: viewMode === "editor" ? "contents" : "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(EditorCanvas, { onReady: setEditorRef, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "reb-inspector-sidebar", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_ui3.Inspector.Root, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Breadcrumb, { children: (segments) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("nav", { "data-re-inspector-breadcrumb": true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ol", { "data-re-inspector-breadcrumb-list": true, children: segments.map((segment, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { "data-re-inspector-breadcrumb-item": true, children: [
            index !== 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { "data-re-inspector-breadcrumb-separator": "", children: "/" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", "data-re-inspector-breadcrumb-button": true, onClick: () => segment.focus(), children: segment.node.nodeType }, index)
          ] }, index)) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Document, { children: (context) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BodyExtras, { ...context }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Document, {})
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Node, { children: (context) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
            context.nodeType === "columns" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ColumnControls, {}),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Background, { ...context }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Typography, { ...context }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Padding, { ...context }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Border, { ...context })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_ui3.Inspector.Text, {})
        ] }) }) }) }),
        viewMode !== "editor" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "reb-code-panel", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "reb-code-panel-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "reb-code-panel-label", children: viewMode === "json" ? "JSON Structure" : "HTML Output" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("pre", { className: "reb-code-content", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("code", { children: viewMode === "json" ? jsonContent : htmlContent }) })
        ] })
      ] })
    ] })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.cjs.map