// ------------------------------------------------------------------------
// Peek View Colors
// Peek views are used to show references and declarations as a view inside
// the editor.
// ------------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const peekView = {
  // Color of the peek view borders and arrow. {default: #3794ff}
  border: tokens.infoContainer, // Done
};

const peekViewEditor = {
  // Background color of the peek view editor. {default: #001f33}
  background: tokens.surfaceContainerLow,

  // Match highlight color in the peek view editor. {default: #ff8f0099}
  matchHighlightBackground: chroma(tokens.onSurface).alpha(0.15).hex(),

  // Match highlight border color in the peek view editor. {default: null}
  matchHighlightBorder: chroma(tokens.onSurface).alpha(0.6).hex(),
};

const peekViewEditorGutter = {
  // Background color of the gutter in the peek view editor.
  // {default: #001f33}
  background: undefined, // Done
};

const peekViewResult = {
  // Background color of the peek view result list. {default: #252526}
  background: tokens.surfaceContainer, // Done

  // Foreground color for file nodes in the peek view result list.
  // {default: #ffffff}
  fileForeground: undefined, // Done

  // Foreground color for line nodes in the peek view result list.
  // {default: #bbbbbb}
  lineForeground: undefined, // Done

  // Match highlight color in the peek view result list.
  // {default: #ea5c004d}
  matchHighlightBackground: tokens.goodContainer,

  // Background color of the selected entry in the peek view result list.
  // {default: #3399ff33}
  selectionBackground: tokens.secondaryContainer,

  // Foreground color of the selected entry in the peek view result list.
  // {default: #ffffff}
  selectionForeground: tokens.onSecondaryContainer,
};

const peekViewTitle = {
  // Background color of the peek view title area. {default: #252526}
  background: tokens.surfaceContainer,
};

const peekViewTitleDescription = {
  // Color of the peek view title info. {default: #ccccccb3}
  foreground: tokens.onSurfaceVariant,
};

const peekViewTitleLabel = {
  // Color of the peek view title. {default: #ffffff}
  foreground: tokens.onSurface,
};

const peekViewEditorStickyScroll = {
  // Background color of sticky scroll in the peek view editor.
  // {default: #001f33}
  background: tokens.surfaceContainer,
};

export default {
  'peekView.border': peekView.border,
  'peekViewEditor.background': peekViewEditor.background,
  'peekViewEditorGutter.background': peekViewEditorGutter.background,
  'peekViewEditor.matchHighlightBackground': peekViewEditor.matchHighlightBackground,
  'peekViewEditor.matchHighlightBorder': peekViewEditor.matchHighlightBorder,
  'peekViewResult.background': peekViewResult.background,
  'peekViewResult.fileForeground': peekViewResult.fileForeground,
  'peekViewResult.lineForeground': peekViewResult.lineForeground,
  'peekViewResult.matchHighlightBackground': peekViewResult.matchHighlightBackground,
  'peekViewResult.selectionBackground': peekViewResult.selectionBackground,
  'peekViewResult.selectionForeground': peekViewResult.selectionForeground,
  'peekViewTitle.background': peekViewTitle.background,
  'peekViewTitleDescription.foreground': peekViewTitleDescription.foreground,
  'peekViewTitleLabel.foreground': peekViewTitleLabel.foreground,
  'peekViewEditorStickyScroll.background': peekViewEditorStickyScroll.background,
};
