// ---------------------------------------------------------------------
// Merge Conflicts Colors
// Merge conflict decorations are shown when the editor contains special
// diff ranges.
// ---------------------------------------------------------------------

import { tokens } from '../colors/interface.js';

const merge = {
  // Current header background in inline merge conflicts. The color must
  // not be opaque so as not to hide underlying decorations.
  // {default: #40c8ae80}
  currentHeaderBackground: undefined, // TODO: merge.currentHeaderBackground

  // Current content background in inline merge conflicts. The color must
  // not be opaque so as not to hide underlying decorations.
  // {default: #40c8ae33}
  currentContentBackground: undefined, // TODO: merge.currentContentBackground

  // Incoming header background in inline merge conflicts. The color must
  // not be opaque so as not to hide underlying decorations.
  // {default: #40a6ff80}
  incomingHeaderBackground: undefined, // TODO: merge.incomingHeaderBackground

  // Incoming content background in inline merge conflicts. The color must
  // not be opaque so as not to hide underlying decorations.
  // {default: #40a6ff33}
  incomingContentBackground: undefined, // TODO: merge.incomingContentBackground

  // Border color on headers and the splitter in inline merge conflicts.
  // {default: null}
  border: undefined, // TODO: merge.border

  // Common ancestor content background in inline merge-conflicts. The
  // color must not be opaque so as not to hide underlying decorations.
  // {default: #60606029}
  commonContentBackground: undefined, // TODO: merge.commonContentBackground

  // Common ancestor header background in inline merge-conflicts. The color
  // must not be opaque so as not to hide underlying decorations.
  // {default: #60606066}
  commonHeaderBackground: undefined, // TODO: merge.commonHeaderBackground
};

const editorOverviewRuler = {
  // Current overview ruler foreground for inline merge conflicts.
  // {default: #40c8ae80}
  currentContentForeground: undefined, // TODO: editorOverviewRuler.currentContentForeground

  // Incoming overview ruler foreground for inline merge conflicts.
  // {default: #40a6ff80}
  incomingContentForeground: undefined, // TODO: editorOverviewRuler.incomingContentForeground

  // Common ancestor overview ruler foreground for inline merge conflicts.
  // {default: #60606066}
  commonContentForeground: undefined, // TODO: editorOverviewRuler.commonContentForeground

  // Editor overview ruler decoration color for resolved comments. This
  // color should be opaque. {default: #37373d}
  commentForeground: undefined, // TODO: editorOverviewRuler.commentForeground

  // Editor overview ruler decoration color for unresolved comments. This
  // color should be opaque. {default: #37373d}
  commentUnresolvedForeground: undefined, // TODO: editorOverviewRuler.commentUnresolvedForeground
};

const mergeEditor = {
  change: {
    // The background color for changes. {default: #9bb95533}
    background: undefined, // TODO: mergeEditor.change.background

    // The background color for word changes. {default: #9ccc2c33}
    word: { background: undefined }, // TODO: mergeEditor.change.word
  },

  conflict: {
    // The border color of unhandled unfocused conflicts.
    // {default: #ffa6007a}
    unhandledUnfocused: { border: undefined },

    // The border color of unhandled focused conflicts. {default: #ffa600}
    unhandledFocused: { border: undefined },

    // The border color of handled unfocused conflicts.
    // {default: #86868649}
    handledUnfocused: { border: undefined },

    // The border color of handled focused conflicts. {default: #c1c1c1cc}
    handledFocused: { border: undefined },

    // The foreground color for changes in input 1. {default: #adaca8ee}
    handled: {
      minimapOverViewRuler: undefined,
    },

    // The foreground color for changes in input 1. {default: #fcba03}
    unhandled: { minimapOverViewRuler: undefined },

    input1: {
      // The background color of decorations in input 1.
      // {default: #40c8ae33}
      background: undefined, // TODO: mergeEditor.conflict.input1.background
    },

    input2: {
      // The background color of decorations in input 2.
      // {default: #40a6ff33}
      background: undefined, // TODO: mergeEditor.conflict.input2.background
    },
  },

  conflictingLines: {
    // The background of the "Conflicting Lines" text. {default: #ffea0047}
    background: undefined, // TODO: mergeEditor.conflictingLines.background
  },

  changeBase: {
    // The background color for changes in base. {default: #4b1818}
    background: undefined, // TODO: mergeEditor.changeBase.background

    word: {
      // The background color for word changes in base. {default: #6f1313}
      background: undefined, // TODO: mergeEditor.changeBase.word.background
    },
  },
};

export default {
  'merge.currentHeaderBackground': merge.currentHeaderBackground,
  'merge.currentContentBackground': merge.currentContentBackground,
  'merge.incomingHeaderBackground': merge.incomingHeaderBackground,
  'merge.incomingContentBackground': merge.incomingContentBackground,
  'merge.border': merge.border,
  'merge.commonContentBackground': merge.commonContentBackground,
  'merge.commonHeaderBackground': merge.commonHeaderBackground,
  'editorOverviewRuler.currentContentForeground': editorOverviewRuler.currentContentForeground,
  'editorOverviewRuler.incomingContentForeground': editorOverviewRuler.incomingContentForeground,
  'editorOverviewRuler.commonContentForeground': editorOverviewRuler.commonContentForeground,
  'editorOverviewRuler.commentForeground': editorOverviewRuler.commentForeground,
  'editorOverviewRuler.commentUnresolvedForeground': editorOverviewRuler.commentUnresolvedForeground,
  'mergeEditor.change.background': mergeEditor.change.background,
  'mergeEditor.change.word.background': mergeEditor.change.word.background,
  'mergeEditor.conflict.unhandledUnfocused.border': mergeEditor.conflict.unhandledUnfocused.border,
  'mergeEditor.conflict.unhandledFocused.border': mergeEditor.conflict.unhandledFocused.border,
  'mergeEditor.conflict.handledUnfocused.border': mergeEditor.conflict.handledUnfocused.border,
  'mergeEditor.conflict.handledFocused.border': mergeEditor.conflict.handledFocused.border,
  'mergeEditor.conflict.handled.minimapOverViewRuler': mergeEditor.conflict.handled.minimapOverViewRuler,
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': mergeEditor.conflict.unhandled.minimapOverViewRuler,
  'mergeEditor.conflictingLines.background': mergeEditor.conflictingLines.background,
  'mergeEditor.changeBase.background': mergeEditor.changeBase.background,
  'mergeEditor.changeBase.word.background': mergeEditor.changeBase.word.background,
  'mergeEditor.conflict.input1.background': mergeEditor.conflict.input1.background,
  'mergeEditor.conflict.input2.background': mergeEditor.conflict.input2.background,
};
