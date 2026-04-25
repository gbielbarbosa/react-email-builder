# react-email-builder

A React component library for building responsive email templates with a drag-and-drop editor, powered by [React Email](https://react.email) and [Tiptap](https://tiptap.dev).

## Features

- **Drag-and-drop editor** - drag blocks from the sidebar directly onto the canvas
- **Structure panel** - hierarchical document tree with click-to-select and block deletion

## Requirements

| Peer dependency | Version |
|---|---|
| `react` | >= 18.0.0 |
| `react-dom` | >= 18.0.0 |
| `@tiptap/core` | >= 3.0.0 |
| `@tiptap/react` | >= 3.0.0 |
| `@tiptap/starter-kit` | >= 3.0.0 |
| `@react-email/components` | >= 1.0.0 |
| `@react-email/editor` | >= 1.0.0 |
| `@react-email/render` | >= 2.0.0 |

## Installation

```bash
npm install react-email-builder
```

Install peer dependencies if they are not already present in your project:

```bash
npm install react react-dom \
  @tiptap/core @tiptap/react @tiptap/starter-kit \
  @react-email/components @react-email/editor @react-email/render
```

## Quick Start

Import the `<EmailBuilder />` anywhere in your app:

```tsx
import { EmailBuilder } from 'react-email-builder';

export default function App() {
  return <EmailBuilder />;
}
```

That's it. The component renders a full-featured email editor with sidebar, canvas, and inspector panel.

## API

### `<EmailBuilder />`

The top-level, batteries-included component. Renders the complete editor UI: sidebar, canvas, inspector panel, and header with preview buttons.

```tsx
import { EmailBuilder } from 'react-email-builder';

<EmailBuilder />
```

---

### `<EditorCanvas />`

The editor canvas in isolation, useful when you want to compose your own layout around the editor.

```tsx
import { EditorCanvas } from 'react-email-builder';
import { Inspector } from '@react-email/editor/ui';
import { type EmailEditorRef } from '@react-email/editor';

function MyEditor() {
  const [editorRef, setEditorRef] = useState<EmailEditorRef | null>(null);

  return (
    <EditorCanvas onReady={setEditorRef}>
      {/* Optional: render inspector, column controls, or any children */}
      <Inspector.Root>
        <Inspector.Breadcrumb />
        <Inspector.Document />
        <Inspector.Node />
        <Inspector.Text />
      </Inspector.Root>
    </EditorCanvas>
  );
}
```

#### Props

| Prop | Type | Description |
|---|---|---|
| `onReady` | `(ref: EmailEditorRef) => void` | Called when the editor is mounted. Provides the `EmailEditorRef` for programmatic control (e.g. `getJSON()`, `getEmailHTML()`). |
| `children` | `React.ReactNode` | Optional content rendered inside the editor wrapper (e.g. inspector panels). |
| `ref` | `React.Ref<EmailEditorRef>` | Forward ref support - exposes the same `EmailEditorRef`. |

---

### `<Sidebar />`

The block palette and structure panel. Can be used independently if you want to build a custom layout.

```tsx
import { Sidebar } from 'react-email-builder';
import { type EmailEditorRef } from '@react-email/editor';

<Sidebar editor={editorRef?.editor} />
```

---

The stylesheet uses the `reb-` prefix for all class names to avoid conflicts with your application's styles.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
