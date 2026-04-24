import React from 'react';
import { useCurrentEditor } from '@tiptap/react';

/** Maps column count to the corresponding Tiptap node type name. */
const COLUMN_TYPE_MAP: Record<number, string> = {
  2: 'twoColumns',
  3: 'threeColumns',
  4: 'fourColumns',
};

/**
 * Inspector panel section that allows changing the column layout
 * of the currently selected columns node (2, 3, or 4 columns).
 */
export const ColumnControls: React.FC = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  const { selection } = editor.state;
  const node = editor.state.doc.nodeAt(selection.from);
  const isColumnNode = node && Object.values(COLUMN_TYPE_MAP).includes(node.type.name);

  if (!isColumnNode) return null;

  const changeColumns = (count: number) => {
    const typeName = COLUMN_TYPE_MAP[count];
    if (!typeName) return;

    editor.chain().focus().command(({ tr, state, dispatch }) => {
      if (dispatch) {
        const currentPos = state.selection.from;
        const currentNode = state.doc.nodeAt(currentPos);

        if (currentNode) {
          // Create a new column node, preserving existing column content
          const newNode = state.schema.nodes[typeName].create(null, currentNode.content);
          tr.replaceWith(currentPos, currentPos + currentNode.nodeSize, newNode);
        }
      }
      return true;
    }).run();
  };

  return (
    <div className="reb-column-controls">
      <div className="reb-column-controls-label">Column Layout</div>
      <div className="reb-column-controls-buttons">
        {Object.keys(COLUMN_TYPE_MAP).map((key) => {
          const count = Number(key);
          const isActive = node!.type.name === COLUMN_TYPE_MAP[count];
          return (
            <button
              key={count}
              onClick={() => changeColumns(count)}
              className={`reb-column-btn${isActive ? ' active' : ''}`}
            >
              {count} Cols
            </button>
          );
        })}
      </div>
    </div>
  );
};
