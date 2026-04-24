import React, { useState, useEffect } from 'react';
import { Editor } from '@tiptap/core';
import { type ElementType } from '../core/types';
import {
  IconText, IconImage, IconButton, IconSpacer,
  IconContainer, IconColumn, IconHeading, IconLink,
  IconMarkdown, IconDivider, IconSection,
} from '../Icons';

// --------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------

/** Sidebar tool definitions. Each entry maps a block type to its UI label and icon. */
const TOOLS: { type: ElementType; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  { type: 'container', label: 'Container', icon: IconContainer },
  { type: 'section',   label: 'Section',   icon: IconSection   },
  { type: 'column',    label: 'Column',    icon: IconColumn    },
  { type: 'heading',   label: 'Heading',   icon: IconHeading   },
  { type: 'text',      label: 'Text',      icon: IconText      },
  { type: 'image',     label: 'Image',     icon: IconImage     },
  { type: 'button',    label: 'Button',    icon: IconButton    },
  { type: 'link',      label: 'Link',      icon: IconLink      },
  { type: 'markdown',  label: 'Markdown',  icon: IconMarkdown  },
  { type: 'divider',   label: 'Divider',   icon: IconDivider   },
  { type: 'spacer',    label: 'Spacer',    icon: IconSpacer    },
];

// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------

interface SidebarProps {
  editor: Editor | null | undefined;
}

interface NodeInfo {
  type: string;
  pos: number;
  depth: number;
  label: string;
}

type SidebarTab = 'components' | 'structure';

// --------------------------------------------------------------------------
// Sub-components
// --------------------------------------------------------------------------

interface ToolItemProps {
  type: ElementType;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const ToolItem: React.FC<ToolItemProps> = ({ type, label, icon: Icon }) => {
  const handleDragStart = (e: React.DragEvent) => {
    // Map 'column' to the internal Tiptap node name 'twoColumns'
    const blockType = type === 'column' ? 'twoColumns' : (type as string);
    e.dataTransfer.setData('application/react-email-block', JSON.stringify({ type: blockType }));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="reb-tool-item" draggable onDragStart={handleDragStart}>
      <Icon />
      <span>{label}</span>
    </div>
  );
};

// --------------------------------------------------------------------------
// Main component
// --------------------------------------------------------------------------

export const Sidebar: React.FC<SidebarProps> = ({ editor }) => {
  const [activeTab, setActiveTab] = useState<SidebarTab>('components');
  const [structure, setStructure] = useState<NodeInfo[]>([]);

  useEffect(() => {
    if (!editor) return;

    const updateStructure = () => {
      const nodes: NodeInfo[] = [];
      editor.state.doc.descendants((node, pos) => {
        const isRelevantBlock =
          node.isBlock ||
          node.type.name === 'button' ||
          node.type.name === 'image';

        if (isRelevantBlock && node.type.name !== 'doc') {
          nodes.push({
            type: node.type.name,
            pos,
            depth: editor.state.doc.resolve(pos).depth,
            label: node.type.name.charAt(0).toUpperCase() + node.type.name.slice(1),
          });
        }
        return true;
      });
      setStructure(nodes);
    };

    updateStructure();
    editor.on('update', updateStructure);
    return () => { editor.off('update', updateStructure); };
  }, [editor, activeTab]);

  const selectNode = (pos: number) => {
    editor?.chain().focus().setNodeSelection(pos).run();
  };

  const deleteNode = (e: React.MouseEvent, pos: number) => {
    e.stopPropagation();
    editor?.chain().focus().setNodeSelection(pos).deleteSelection().run();
  };

  return (
    <div className="reb-sidebar">
      <div className="reb-sidebar-tabs">
        {(['components', 'structure'] as SidebarTab[]).map((tab) => (
          <div
            key={tab}
            className={`reb-sidebar-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      <div className="reb-sidebar-content">
        {activeTab === 'components' ? (
          <div className="reb-tools-grid">
            {TOOLS.map((tool) => (
              <ToolItem key={tool.type} type={tool.type} label={tool.label} icon={tool.icon} />
            ))}
          </div>
        ) : (
          <div className="reb-structure-list">
            {structure.length === 0 ? (
              <div className="reb-structure-empty">No blocks found.</div>
            ) : (
              structure.map((item, idx) => (
                <div
                  key={`${item.pos}-${idx}`}
                  className="reb-structure-item"
                  onClick={() => selectNode(item.pos)}
                  style={{ paddingLeft: `${(item.depth - 1) * 12 + 8}px` }}
                >
                  <div className="reb-structure-item-content">
                    <span className="reb-structure-item-icon">•</span>
                    {item.label}
                  </div>
                  <button
                    className="reb-structure-delete-btn"
                    onClick={(e) => deleteNode(e, item.pos)}
                    title="Remove block"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
