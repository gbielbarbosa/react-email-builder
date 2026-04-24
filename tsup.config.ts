import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react/jsx-runtime',
    'react-dom',
    '@tiptap/core',
    '@tiptap/react',
    '@tiptap/pm',
    '@tiptap/pm/state',
    '@tiptap/pm/view',
    '@tiptap/starter-kit',
    '@tiptap/extension-placeholder',
    '@react-email/components',
    '@react-email/editor',
    '@react-email/editor/core',
    '@react-email/editor/extensions',
    '@react-email/editor/plugins',
    '@react-email/editor/ui',
    '@react-email/render',
  ],
});
