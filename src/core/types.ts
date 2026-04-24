/** Supported block types in the email editor. */
export type ElementType =
  | 'text'
  | 'image'
  | 'button'
  | 'spacer'
  | 'container'
  | 'column'
  | 'heading'
  | 'link'
  | 'markdown'
  | 'divider'
  | 'section';

/** A single block in the email document tree. */
export interface EmailBlock {
  id: string;
  type: ElementType;
  props: Record<string, unknown>;
  children?: EmailBlock[];
}

/** The root email document structure. */
export interface EmailDesign {
  root: EmailBlock[];
}

/**
 * Path to a slot inside the document tree.
 * Example: [0, 1] means root[0].children[1].
 */
export type SlotPath = number[];

/** Global state managed by the email builder. */
export interface EmailBuilderState {
  design: EmailDesign;
  selectedBlockId: string | null;
}

/** All actions that can mutate the email builder state. */
export type EmailBuilderAction =
  | { type: 'SET_DESIGN'; payload: EmailDesign }
  | { type: 'SELECT_BLOCK'; payload: string | null }
  | { type: 'ADD_BLOCK'; payload: { block: EmailBlock; parentId: string | null; index?: number } }
  | { type: 'REMOVE_BLOCK'; payload: { id: string } }
  | { type: 'UPDATE_BLOCK_PROPS'; payload: { id: string; props: Record<string, unknown> } }
  | { type: 'MOVE_BLOCK'; payload: { id: string; targetParentId: string | null; targetIndex: number } };
