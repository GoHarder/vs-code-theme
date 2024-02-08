// --------------------------------------------------------------------
// Diff Editor Colors
// For coloring inserted and removed text, use either a background or a
// border color but not both.
// --------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const diffEditor = {
  // Border color between the two text editors. {default: null}
  border: tokens.outlineVariant,

  // Color of the diff editor's diagonal fill. The diagonal fill is used in
  // side-by-side diff views. {default: #cccccc33}
  diagonalFill: tokens.surfaceContainerHigh,

  // The border color for text that got moved in the diff editor.
  // {default: #8b8b8b9c}
  move: { border: tokens.outline },

  // Background color for text that got inserted. The color must not be
  // opaque so as not to hide underlying decorations. {default: #9ccc2c33}
  insertedTextBackground: chroma(tokens.goodContainer).alpha(0.2).hex(),
  // insertedTextBackground: tokens.goodContainer + opacity._20_0,

  // Background color for lines that got inserted. The color must not be
  // opaque so as not to hide underlying decorations. {default: #9bb95533}
  insertedLineBackground: chroma(tokens.goodContainer).alpha(0.2).hex(),
  // insertedLineBackground: tokens.goodContainer + opacity._20_0,

  // Outline color for the text that got inserted. {default: null}
  insertedTextBorder: undefined, // Done

  // Background color for text that got removed. The color must not be
  // opaque so as not to hide underlying decorations. {default: #ff000033}
  removedTextBackground: chroma(tokens.errorContainer).alpha(0.2).hex(),

  // Background color for lines that got removed. The color must not be
  // opaque so as not to hide underlying decorations. {default: #ff000033}
  // removedLineBackground: undefined,
  removedLineBackground: chroma(tokens.errorContainer).alpha(0.2).hex(),

  // Outline color for text that got removed. {default: null}
  removedTextBorder: undefined, // Done

  // The color of unchanged blocks in diff editor. {default: #252526}
  unchangedRegionBackground: tokens.surfaceContainerLow,

  // The foreground color of unchanged blocks in the diff editor.
  // {default: #cccccc}
  unchangedRegionForeground: tokens.onSurfaceVariant,

  // The background color of unchanged code in the diff editor.
  // {default: #74747429}
  unchangedCodeBackground: tokens.surfaceContainerLow,

  // {default: #ffa500}
  moveActive: { border: undefined }, // TODO: diffEditor.moveActive.border

  // {default: #000000}
  unchangedRegionShadow: undefined, // TODO: diffEditor.unchangedRegionShadow
};

const diffEditorGutter = {
  // Background color for the margin where lines got inserted.
  // {default: null}
  insertedLineBackground: chroma(tokens.goodContainer).alpha(0.2).hex(),

  // Background color for the margin where lines got removed.
  // {default: null}
  removedLineBackground: chroma(tokens.errorContainer).alpha(0.2).hex(),
};

const diffEditorOverview = {
  // Diff overview ruler foreground for inserted content. {default: null}
  insertedForeground: undefined, // Done

  // Diff overview ruler foreground for removed content. {default: null}
  removedForeground: undefined, // Done
};

export default {
  'diffEditor.insertedTextBackground': diffEditor.insertedTextBackground,
  'diffEditor.insertedTextBorder': diffEditor.insertedTextBorder,
  'diffEditor.removedTextBackground': diffEditor.removedTextBackground,
  'diffEditor.removedTextBorder': diffEditor.removedTextBorder,
  'diffEditor.border': diffEditor.border,
  'diffEditor.diagonalFill': diffEditor.diagonalFill,
  'diffEditor.insertedLineBackground': diffEditor.insertedLineBackground,
  'diffEditor.removedLineBackground': diffEditor.removedLineBackground,
  'diffEditorGutter.insertedLineBackground': diffEditorGutter.insertedLineBackground,
  'diffEditorGutter.removedLineBackground': diffEditorGutter.removedLineBackground,
  'diffEditorOverview.insertedForeground': diffEditorOverview.insertedForeground,
  'diffEditorOverview.removedForeground': diffEditorOverview.removedForeground,
  'diffEditor.unchangedRegionBackground': diffEditor.unchangedRegionBackground,
  'diffEditor.unchangedRegionForeground': diffEditor.unchangedRegionForeground,
  'diffEditor.unchangedCodeBackground': diffEditor.unchangedCodeBackground,
  'diffEditor.move.border': diffEditor.move.border,
};
