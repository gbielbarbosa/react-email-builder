import React from 'react';
import { EmailNode } from '@react-email/editor/core';

/**
 * Custom Tiptap node that renders a vertical spacer block.
 * Accepts a `height` attribute (CSS value, defaults to "20px").
 */
export const Spacer = EmailNode.create({
  name: 'spacer',
  group: 'block',
  selectable: true,
  draggable: true,
  atom: true,

  addAttributes() {
    return {
      height: {
        default: '20px',
        parseHTML: (element) => element.style.height,
        renderHTML: (attributes) => ({
          style: `height: ${attributes.height}`,
        }),
      },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="spacer"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { ...HTMLAttributes, 'data-type': 'spacer', class: 'node-spacer' }];
  },

  renderToReactEmail({ node }) {
    return React.createElement('div', {
      style: {
        height: node.attrs?.height || '20px',
      },
    });
  },
});
