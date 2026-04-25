import React from 'react';
import { useCurrentEditor } from '@tiptap/react';
import { Columns2Icon, Columns3Icon, Columns4Icon } from '@react-email/editor/ui';
import {
  InspectorSection,
  InspectorToggleGroup,
  InspectorToggleItem,
} from './InspectorPrimitives';

/**
 * Inspector panel section that allows changing the column count
 * of the currently selected `columns` node (2, 3, or 4 columns).
 * Updates the `columnCount` attribute and rebuilds children accordingly.
 */
export const ColumnControls: React.FC = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  const { selection } = editor.state;
  const node = editor.state.doc.nodeAt(selection.from);
  const isColumnsNode = node && node.type.name === 'columns';

  if (!isColumnsNode) return null;

  const currentCount = (node.attrs.columnCount as number) || 2;

  const changeColumns = (count: number) => {
    editor.chain().focus().command(({ tr, state, dispatch }) => {
      if (dispatch) {
        const currentPos = state.selection.from;
        const currentNode = state.doc.nodeAt(currentPos);

        if (currentNode) {
          const existingCols: any[] = [];
          currentNode.content.forEach((col: any) => existingCols.push(col));

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
    { count: 4, Icon: Columns4Icon },
  ];

  return (
    <InspectorSection title="Column Layout">
      <InspectorToggleGroup label="Columns">
        {COLUMN_OPTIONS.map(({ count, Icon }) => (
          <InspectorToggleItem
            key={count}
            isActive={currentCount === count}
            onClick={() => changeColumns(count)}
            title={`${count} columns`}
          >
            <Icon size={14} />
          </InspectorToggleItem>
        ))}
      </InspectorToggleGroup>
    </InspectorSection>
  );
};
