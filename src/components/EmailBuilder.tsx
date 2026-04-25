import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { EditorCanvas } from './EditorCanvas';
import { ColumnControls } from './ColumnControls';
import { BodyExtras } from './BodyExtras';
import { Inspector } from '@react-email/editor/ui';
import { type EmailEditorRef } from '@react-email/editor';

type ViewMode = 'editor' | 'json' | 'html';

export const EmailBuilder: React.FC = () => {
  const [editorRef, setEditorRef] = useState<EmailEditorRef | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('editor');
  const [jsonContent, setJsonContent] = useState<string>('');
  const [htmlContent, setHtmlContent] = useState<string>('');

  const handleTabChange = async (mode: ViewMode) => {
    setViewMode(mode);

    if (mode === 'json' && editorRef) {
      const json = editorRef.getJSON();
      setJsonContent(JSON.stringify(json, null, 2));
    }

    if (mode === 'html' && editorRef) {
      const html = await editorRef.getEmailHTML();
      setHtmlContent(html);
    }
  };

  return (
    <div className="reb-builder-container">
      <Sidebar editor={editorRef?.editor} />

      <main className="reb-main">
        <header className="reb-header">
          <div className="reb-view-tabs">
            {(['editor', 'json', 'html'] as ViewMode[]).map((mode) => (
              <button
                key={mode}
                id={`reb-tab-${mode}`}
                className={`reb-view-tab${viewMode === mode ? ' active' : ''}`}
                onClick={() => handleTabChange(mode)}
              >
                {mode === 'editor' ? 'Editor' : mode.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="reb-content">
          {/* Keep EditorCanvas mounted to preserve editor state */}
          <div style={{ display: viewMode === 'editor' ? 'contents' : 'none' }}>
            <EditorCanvas onReady={setEditorRef}>
              <div className="reb-inspector-sidebar">
                <Inspector.Root>
                  <Inspector.Breadcrumb>
                    {(segments) =>
                      <nav data-re-inspector-breadcrumb>
                        <ol data-re-inspector-breadcrumb-list>
                          {
                            segments.map((segment, index) => (
                              <li key={index} data-re-inspector-breadcrumb-item>
                                {index !== 0 && <span data-re-inspector-breadcrumb-separator="">/</span>}
                                <button key={index} type="button" data-re-inspector-breadcrumb-button onClick={() => segment.focus()}>
                                  {segment.node.nodeType}
                                </button>
                              </li>
                            ))
                          }
                        </ol>
                      </nav>
                    }
                  </Inspector.Breadcrumb>
                  <Inspector.Document>
                    {(context) => (
                      <>
                        <BodyExtras {...context} />
                        <Inspector.Document />
                      </>
                    )}
                  </Inspector.Document>
                  <Inspector.Node>
                    {(context) => (
                      <>
                        {context.nodeType === "columns" && <ColumnControls />}
                        <Inspector.Background {...context} />
                        <Inspector.Typography {...context} />
                        <Inspector.Padding {...context} />
                        <Inspector.Border {...context} />
                      </>
                    )}
                  </Inspector.Node>
                  <Inspector.Text />
                </Inspector.Root>
              </div>
            </EditorCanvas>
          </div>

          {viewMode !== 'editor' && (
            <div className="reb-code-panel">
              <div className="reb-code-panel-header">
                <span className="reb-code-panel-label">
                  {viewMode === 'json' ? 'JSON Structure' : 'HTML Output'}
                </span>
                <button
                  className="reb-code-copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(viewMode === 'json' ? jsonContent : htmlContent);
                  }}
                >
                  Copy
                </button>
              </div>
              <pre className="reb-code-content">
                <code>{viewMode === 'json' ? jsonContent : htmlContent}</code>
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
