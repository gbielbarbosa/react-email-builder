import React from 'react';
import { EmailEditorRef } from '@react-email/editor';
import { Editor } from '@tiptap/core';
import { EmailNode } from '@react-email/editor/core';

declare const EmailBuilder: React.FC;

interface EditorCanvasProps {
    onReady?: (ref: EmailEditorRef) => void;
    children?: React.ReactNode;
}
declare const EditorCanvas: React.ForwardRefExoticComponent<EditorCanvasProps & React.RefAttributes<EmailEditorRef>>;

interface SidebarProps {
    editor: Editor | null | undefined;
}
declare const Sidebar: React.FC<SidebarProps>;

/**
 * Custom Tiptap node that renders a vertical spacer block.
 * Accepts a `height` attribute (CSS value, defaults to "20px").
 */
declare const Spacer: EmailNode<Record<string, never>, Record<string, never>>;

export { EditorCanvas, EmailBuilder, Sidebar, Spacer };
