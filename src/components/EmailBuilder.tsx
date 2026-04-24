import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { EditorCanvas } from './EditorCanvas';
import { ColumnControls } from './ColumnControls';
import { Inspector } from '@react-email/editor/ui';
import { type EmailEditorRef } from '@react-email/editor';

export const EmailBuilder: React.FC = () => {
  const [editorRef, setEditorRef] = useState<EmailEditorRef | null>(null);

  const handleExportJSON = () => {
    if (!editorRef) return;
    const json = editorRef.getJSON();
    console.log('JSON Export:', json);
    alert('JSON exported to console!');
  };

  const handleExportHTML = async () => {
    if (!editorRef) return;
    const html = await editorRef.getEmailHTML();
    console.log('HTML Export:', html);

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-template.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="reb-builder-container">
      <Sidebar editor={editorRef?.editor} />

      <main className="reb-main">
        <header className="reb-header">
          <div className="reb-header-actions">
            <button className="reb-btn reb-btn-secondary" onClick={handleExportJSON}>
              Export JSON
            </button>
            <button className="reb-btn reb-btn-primary" onClick={handleExportHTML}>
              Export HTML
            </button>
          </div>
        </header>

        <div className="reb-content">
          <EditorCanvas onReady={setEditorRef}>
            <div className="reb-inspector-sidebar">
              <Inspector.Root>
                <Inspector.Breadcrumb />
                <Inspector.Document />
                <Inspector.Node />
                <Inspector.Text />
                <ColumnControls />
              </Inspector.Root>
            </div>
          </EditorCanvas>
        </div>
      </main>
    </div>
  );
};
