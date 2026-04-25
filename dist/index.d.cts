import React from 'react';
import { EmailEditorRef } from '@react-email/editor';
import { Editor } from '@tiptap/core';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { KnownThemeComponents } from '@react-email/editor/plugins';

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
 * Inspector panel section for document-level email settings:
 * meta title, content alignment, font family, and font weight.
 * These are stored in `globalContent.data.body`.
 */
interface InspectorDocumentContext {
    setGlobalStyle: (classReference: KnownThemeComponents, property: any, value: unknown) => void;
    findStyleValue: (classReference: KnownThemeComponents, prop: any) => any;
    [key: string]: any;
}
declare function BodyExtras({ findStyleValue, setGlobalStyle }: InspectorDocumentContext): react_jsx_runtime.JSX.Element;

/**
 * Inspector panel section that allows changing the column count
 * of the currently selected `columns` node (2, 3, or 4 columns).
 * Updates the `columnCount` attribute and rebuilds children accordingly.
 */
declare const ColumnControls: React.FC;

/**
 * InspectorPrimitives.tsx
 *
 * Thin wrapper components over the `data-re-inspector-*` attribute API used
 * by @react-email/editor's inspector CSS. The library does NOT export React
 * components for these primitives - it only applies styles via CSS attribute
 * selectors. These wrappers give us a typed, reusable API so we don't have to
 * copy raw data-attributes in every custom panel.
 */

interface InspectorSectionProps {
    title: string;
    children: React.ReactNode;
}
declare const InspectorSection: React.FC<InspectorSectionProps>;
interface InspectorRowProps {
    label: string;
    children: React.ReactNode;
}
declare const InspectorRow: React.FC<InspectorRowProps>;
interface InspectorTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare const InspectorTextInput: React.FC<InspectorTextInputProps>;
interface InspectorSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    children: React.ReactNode;
}
declare const InspectorSelect: React.FC<InspectorSelectProps>;
interface InspectorToggleGroupProps {
    label: string;
    children: React.ReactNode;
}
declare const InspectorToggleGroup: React.FC<InspectorToggleGroupProps>;
interface InspectorToggleItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
}
declare const InspectorToggleItem: React.FC<InspectorToggleItemProps>;

export { BodyExtras, ColumnControls, EditorCanvas, EmailBuilder, InspectorRow, InspectorSection, InspectorSelect, InspectorTextInput, InspectorToggleGroup, InspectorToggleItem, Sidebar };
