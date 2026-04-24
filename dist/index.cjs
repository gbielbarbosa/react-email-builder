"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  EditorCanvas: () => EditorCanvas,
  EmailBuilder: () => EmailBuilder,
  Sidebar: () => Sidebar,
  Spacer: () => Spacer
});
module.exports = __toCommonJS(index_exports);

// src/components/EmailBuilder.tsx
var import_react5 = require("react");

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
var IconSpacer = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8 9 4-4 4 4" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8 15 4 4 4-4" })
] });
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
  { type: "column", label: "Column", icon: IconColumn },
  { type: "heading", label: "Heading", icon: IconHeading },
  { type: "text", label: "Text", icon: IconText },
  { type: "image", label: "Image", icon: IconImage },
  { type: "button", label: "Button", icon: IconButton },
  { type: "link", label: "Link", icon: IconLink },
  { type: "markdown", label: "Markdown", icon: IconMarkdown },
  { type: "divider", label: "Divider", icon: IconDivider },
  { type: "spacer", label: "Spacer", icon: IconSpacer }
];
var ToolItem = ({ type, label, icon: Icon }) => {
  const handleDragStart = (e) => {
    const blockType = type === "column" ? "twoColumns" : type;
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
var import_react3 = require("react");
var import_editor = require("@react-email/editor");
var import_extensions = require("@react-email/editor/extensions");
var import_plugins = require("@react-email/editor/plugins");
var import_core2 = require("@tiptap/core");
var import_extension_placeholder = require("@tiptap/extension-placeholder");
var import_state = require("@tiptap/pm/state");

// src/extensions/Spacer.ts
var import_react2 = __toESM(require("react"), 1);
var import_core = require("@react-email/editor/core");
var Spacer = import_core.EmailNode.create({
  name: "spacer",
  group: "block",
  selectable: true,
  draggable: true,
  atom: true,
  addAttributes() {
    return {
      height: {
        default: "20px",
        parseHTML: (element) => element.style.height,
        renderHTML: (attributes) => ({
          style: `height: ${attributes.height}`
        })
      }
    };
  },
  parseHTML() {
    return [{ tag: 'div[data-type="spacer"]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", { ...HTMLAttributes, "data-type": "spacer", class: "node-spacer" }];
  },
  renderToReactEmail({ node }) {
    return import_react2.default.createElement("div", {
      style: {
        height: node.attrs?.height || "20px"
      }
    });
  }
});

// src/components/EditorCanvas.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var HIDDEN_BUBBLE_MENU_NODES = [
  "spacer",
  "section",
  "container",
  "twoColumns",
  "threeColumns",
  "fourColumns",
  "columnsColumn",
  "image",
  "divider"
];
var STARTER_KIT_OVERRIDES = {
  GlobalContent: false,
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
  renderHTML({ HTMLAttributes }) {
    return this.parent?.({
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
var CustomGlobalContent = import_extensions.GlobalContent.extend({
  selectable: false,
  addAttributes() {
    return {
      ...this.parent?.(),
      data: {
        default: {},
        // Serialize the data object as a JSON string in the DOM attribute
        renderHTML: (attributes) => ({
          data: JSON.stringify(attributes.data)
        }),
        // Deserialize the JSON string back into an object when parsing HTML
        parseHTML: (element) => {
          const raw = element.getAttribute("data");
          try {
            return JSON.parse(raw || "{}");
          } catch {
            return {};
          }
        }
      }
    };
  }
});
var CustomParagraph = extendAsBlock(import_extensions.Paragraph, "node-paragraph");
var CustomSection = extendAsBlock(import_extensions.Section.extend({ content: "block*" }), "node-section");
var CustomTwoColumns = extendAsBlock(import_extensions.TwoColumns, "node-columns");
var CustomThreeColumns = extendAsBlock(import_extensions.ThreeColumns, "node-columns");
var CustomFourColumns = extendAsBlock(import_extensions.FourColumns, "node-columns");
var CustomColumn = extendAsBlock(import_extensions.ColumnsColumn.extend({ content: "block*" }), "node-column");
var SelectionHelper = import_core2.Extension.create({
  name: "selectionHelper",
  addProseMirrorPlugins() {
    return [
      new import_state.Plugin({
        key: new import_state.PluginKey("selectionHelper"),
        props: {
          handleDOMEvents: {
            mousedown(view, event) {
              const { state, dispatch } = view;
              const pos = view.posAtCoords({ left: event.clientX, top: event.clientY });
              if (!pos) return false;
              const $pos = state.doc.resolve(pos.pos);
              let selectablePos = -1;
              for (let d = $pos.depth; d >= 0; d--) {
                const node = $pos.node(d);
                if (node.type.spec.selectable) {
                  selectablePos = $pos.before(d);
                  break;
                }
              }
              if (selectablePos >= 0) {
                const target = event.target;
                if (target.hasAttribute("data-node-type")) {
                  try {
                    dispatch(state.tr.setSelection(import_state.NodeSelection.create(state.doc, selectablePos)));
                    if (target.getAttribute("data-node-type") !== "node-paragraph") {
                      event.preventDefault();
                    }
                    return true;
                  } catch {
                  }
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
var ExternalDropHandler = import_core2.Extension.create({
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
                case "twoColumns":
                case "threeColumns":
                case "fourColumns": {
                  const count = type === "twoColumns" ? 2 : type === "threeColumns" ? 3 : 4;
                  const cols = Array.from(
                    { length: count },
                    () => schema.nodes.columnsColumn.create(null, [])
                  );
                  node = schema.nodes[type].create(
                    { style: getDefaultStyleFor(editor, type) },
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
var ThemeInitializer = import_core2.Extension.create({
  name: "themeInitializer",
  onCreate() {
    const { state } = this.editor;
    const themePlugin = this.editor.extensionManager.extensions.find(
      (e) => e.name === "emailTheming"
    );
    const themeName = themePlugin?.options?.theme || "basic";
    const hasGlobal = state.doc.firstChild?.type.name === "globalContent";
    if (hasGlobal) return;
    const themeKey = themeName;
    const mergedStyles = (0, import_plugins.getMergedCssJs)(themeName, import_plugins.EDITOR_THEMES[themeKey]);
    const patchedStyles = import_plugins.EDITOR_THEMES[themeKey].map((group) => {
      const paddingInput = {
        label: "Padding",
        type: "number",
        value: 8,
        prop: "padding",
        classReference: group.classReference,
        unit: "px"
      };
      return {
        ...group,
        inputs: [
          ...group.inputs.map((input) => {
            if (input.prop.startsWith("padding") && group.id === "body") {
              return { ...input, value: 8 };
            }
            return input;
          }),
          paddingInput
        ]
      };
    });
    this.editor.commands.insertContentAt(0, {
      type: "globalContent",
      attrs: {
        data: {
          body: {
            ...import_plugins.INBOX_EMAIL_DEFAULTS.body || {},
            ...mergedStyles.body || {},
            paddingTop: 8,
            paddingRight: 8,
            paddingBottom: 8,
            paddingLeft: 8
          },
          container: {
            ...import_plugins.INBOX_EMAIL_DEFAULTS.container || {},
            ...mergedStyles.container || {},
            width: 600,
            padding: 8,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0
          },
          styles: patchedStyles
        }
      }
    });
  }
});
var EditorCanvas = (0, import_react3.forwardRef)(
  ({ onReady, children }, ref) => {
    const editorRef = (0, import_react3.useRef)(null);
    (0, import_react3.useImperativeHandle)(ref, () => editorRef.current);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "reb-canvas-container tiptap-extended", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_editor.EmailEditor,
      {
        ref: editorRef,
        className: "reb-editor",
        onReady,
        onUploadImage: async (file) => ({ url: URL.createObjectURL(file) }),
        bubbleMenu: { hideWhenActiveNodes: HIDDEN_BUBBLE_MENU_NODES },
        extensions: [
          import_plugins.EmailTheming.configure({ theme: "basic" }),
          import_extensions.StarterKit.configure(STARTER_KIT_OVERRIDES),
          SelectionHelper,
          CustomGlobalContent,
          CustomParagraph,
          CustomSection,
          CustomColumn,
          CustomTwoColumns,
          CustomThreeColumns,
          CustomFourColumns,
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
          Spacer,
          ExternalDropHandler,
          ThemeInitializer
        ],
        children
      }
    ) });
  }
);

// src/components/ColumnControls.tsx
var import_react4 = require("@tiptap/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var COLUMN_TYPE_MAP = {
  2: "twoColumns",
  3: "threeColumns",
  4: "fourColumns"
};
var ColumnControls = () => {
  const { editor } = (0, import_react4.useCurrentEditor)();
  if (!editor) return null;
  const { selection } = editor.state;
  const node = editor.state.doc.nodeAt(selection.from);
  const isColumnNode = node && Object.values(COLUMN_TYPE_MAP).includes(node.type.name);
  if (!isColumnNode) return null;
  const changeColumns = (count) => {
    const typeName = COLUMN_TYPE_MAP[count];
    if (!typeName) return;
    editor.chain().focus().command(({ tr, state, dispatch }) => {
      if (dispatch) {
        const currentPos = state.selection.from;
        const currentNode = state.doc.nodeAt(currentPos);
        if (currentNode) {
          const newNode = state.schema.nodes[typeName].create(null, currentNode.content);
          tr.replaceWith(currentPos, currentPos + currentNode.nodeSize, newNode);
        }
      }
      return true;
    }).run();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "reb-column-controls", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "reb-column-controls-label", children: "Column Layout" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "reb-column-controls-buttons", children: Object.keys(COLUMN_TYPE_MAP).map((key) => {
      const count = Number(key);
      const isActive = node.type.name === COLUMN_TYPE_MAP[count];
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "button",
        {
          onClick: () => changeColumns(count),
          className: `reb-column-btn${isActive ? " active" : ""}`,
          children: [
            count,
            " Cols"
          ]
        },
        count
      );
    }) })
  ] });
};

// src/components/EmailBuilder.tsx
var import_ui = require("@react-email/editor/ui");
var import_jsx_runtime5 = require("react/jsx-runtime");
var EmailBuilder = () => {
  const [editorRef, setEditorRef] = (0, import_react5.useState)(null);
  const handleExportJSON = () => {
    if (!editorRef) return;
    const json = editorRef.getJSON();
    console.log("JSON Export:", json);
    alert("JSON exported to console!");
  };
  const handleExportHTML = async () => {
    if (!editorRef) return;
    const html = await editorRef.getEmailHTML();
    console.log("HTML Export:", html);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email-template.html";
    a.click();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "reb-builder-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Sidebar, { editor: editorRef?.editor }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("main", { className: "reb-main", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("header", { className: "reb-header", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "reb-header-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "reb-btn reb-btn-secondary", onClick: handleExportJSON, children: "Export JSON" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "reb-btn reb-btn-primary", onClick: handleExportHTML, children: "Export HTML" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "reb-content", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(EditorCanvas, { onReady: setEditorRef, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "reb-inspector-sidebar", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_ui.Inspector.Root, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_ui.Inspector.Breadcrumb, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_ui.Inspector.Document, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_ui.Inspector.Node, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_ui.Inspector.Text, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ColumnControls, {})
      ] }) }) }) })
    ] })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EditorCanvas,
  EmailBuilder,
  Sidebar,
  Spacer
});
//# sourceMappingURL=index.cjs.map