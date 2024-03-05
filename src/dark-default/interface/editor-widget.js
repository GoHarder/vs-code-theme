// -----------------------------------------------------------------------
// Editor Widget Colors
// The Editor widget is shown in front of the editor content. Examples are
// the find/replace dialog, the suggestion widget, and the editor hover.
// -----------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const editorWidget = {
  // Foreground color of editor widgets, such as find/replace.
  // {default: #cccccc}
  foreground: undefined, // Done

  // Background color of editor widgets, such as find/replace.
  // {default: #252526}
  background: tokens.surfaceContainer,

  // Border color of the editor widget unless the widget does not contain a
  // border or defines its own border color. {default: #454545}
  border: undefined, // Done

  // Border color of the resize bar of editor widgets. The color is only
  // used if the widget chooses to have a resize border and if the color is
  // not overridden by a widget. {default: null}
  resizeBorder: tokens.outlineVariant,
};

const editorSuggestWidget = {
  // Background color of the suggestion widget. {default: #252526}
  background: tokens.surfaceContainerLow,

  // Border color of the suggestion widget. {default: #454545}
  border: tokens.outlineVariant,

  // Foreground color of the suggestion widget. {default: #bbbbbb}
  foreground: undefined, // Done

  // Color of the match highlights in the suggest widget when an item is
  // focused. {default: #2aaaff}
  focusHighlightForeground: undefined, // Done

  // Color of the match highlights in the suggestion widget.
  // {default: #2aaaff}
  highlightForeground: undefined, // Done

  // Background color of the selected entry in the suggestion widget.
  // {default: #04395e}
  selectedBackground: undefined, // Done

  // Foreground color of the selected entry in the suggest widget.
  // {default: #ffffff}
  selectedForeground: undefined, // Done

  // Icon foreground color of the selected entry in the suggest widget.
  // {default: null}
  selectedIconForeground: undefined, // Done
};

const editorSuggestWidgetStatus = {
  // Foreground color of the suggest widget status. {default: #bbbbbb80}
  foreground: undefined,
};

const editorHoverWidget = {
  // Foreground color of the editor hover. {default: #cccccc}
  foreground: undefined,

  // Background color of the editor hover. {default: #252526}
  background: tokens.surfaceContainerLow,

  // Border color of the editor hover. {default: #454545}
  border: tokens.outlineVariant,

  // Foreground color of the active item in the parameter hint.
  // {default: #2aaaff}
  highlightForeground: tokens.primary,

  // Background color of the editor hover status bar. {default: #2c2c2d}
  statusBarBackground: tokens.surfaceContainerHigh,
};

const editorGhostText = {
  // Border color of the ghost text shown by inline completion providers
  // and the suggest preview. {default: null}
  border: tokens.surfaceContainerLow,

  // Background color of the ghost text in the editor. {default: null}
  background: tokens.surfaceContainerLow,

  // Foreground color of the ghost text shown by inline completion
  // providers and the suggest preview. {default: #ffffff56}
  foreground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),
};

const editorStickyScroll = {
  // Editor sticky scroll background color. {default: #1e1e1e}
  background: tokens.surfaceContainerLow,
};

const editorStickyScrollHover = {
  // Editor sticky scroll on hover background color. {default: #2a2d2e}
  background: chroma(tokens.onSurfaceVariant).alpha(0.08).hex(),
};

const debugExceptionWidget = {
  // Exception widget background color. {default: #420b0d}
  background: undefined, // TODO: debugExceptionWidget.background

  // Exception widget border color. {default: #a31515}
  border: undefined, // TODO: debugExceptionWidget.border
};

// NOTE: Opens with F8 key
const editorMarkerNavigation = {
  // Editor marker navigation widget background. {default: #1e1e1e}
  background: undefined, // Done
};

const editorMarkerNavigationError = {
  // Editor marker navigation widget error color. {default: #f14c4c}
  background: tokens.errorContainer,

  // Editor marker navigation widget error heading background.
  // {default: #f14c4c1a}
  headerBackground: tokens.surfaceContainerLow,
};

const editorMarkerNavigationWarning = {
  // Editor marker navigation widget warning color. {default: #cca700}
  background: tokens.warningContainer,

  // Editor marker navigation widget warning heading background.
  // {default: #cca7001a}
  headerBackground: tokens.surfaceContainerLow,
};

const editorMarkerNavigationInfo = {
  // Editor marker navigation widget info color. {default: #3794ff}
  background: tokens.infoContainer,

  // Editor marker navigation widget info heading background.
  // {default: #3794ff1a}
  headerBackground: tokens.surfaceContainerLow,
};

export default {
  'editorWidget.foreground': editorWidget.foreground,
  'editorWidget.background': editorWidget.background,
  'editorWidget.border': editorWidget.border,
  'editorWidget.resizeBorder': editorWidget.resizeBorder,
  'editorSuggestWidget.background': editorSuggestWidget.background,
  'editorSuggestWidget.border': editorSuggestWidget.border,
  'editorSuggestWidget.foreground': editorSuggestWidget.foreground,
  'editorSuggestWidget.focusHighlightForeground': editorSuggestWidget.focusHighlightForeground,
  'editorSuggestWidget.highlightForeground': editorSuggestWidget.highlightForeground,
  'editorSuggestWidget.selectedBackground': editorSuggestWidget.selectedBackground,
  'editorSuggestWidget.selectedForeground': editorSuggestWidget.selectedForeground,
  'editorSuggestWidget.selectedIconForeground': editorSuggestWidget.selectedIconForeground,
  'editorSuggestWidgetStatus.foreground': editorSuggestWidgetStatus.foreground,
  'editorHoverWidget.foreground': editorHoverWidget.foreground,
  'editorHoverWidget.background': editorHoverWidget.background,
  'editorHoverWidget.border': editorHoverWidget.border,
  'editorHoverWidget.highlightForeground': editorHoverWidget.highlightForeground,
  'editorHoverWidget.statusBarBackground': editorHoverWidget.statusBarBackground,
  'editorGhostText.border': editorGhostText.border,
  'editorGhostText.background': editorGhostText.background,
  'editorGhostText.foreground': editorGhostText.foreground,
  'editorStickyScroll.background': editorStickyScroll.background,
  'editorStickyScrollHover.background': editorStickyScrollHover.background,
  'debugExceptionWidget.background': debugExceptionWidget.background,
  'debugExceptionWidget.border': debugExceptionWidget.border,
  'editorMarkerNavigation.background': editorMarkerNavigation.background,
  'editorMarkerNavigationError.background': editorMarkerNavigationError.background,
  'editorMarkerNavigationWarning.background': editorMarkerNavigationWarning.background,
  'editorMarkerNavigationInfo.background': editorMarkerNavigationInfo.background,
  'editorMarkerNavigationError.headerBackground': editorMarkerNavigationError.headerBackground,
  'editorMarkerNavigationWarning.headerBackground': editorMarkerNavigationWarning.headerBackground,
  'editorMarkerNavigationInfo.headerBackground': editorMarkerNavigationInfo.headerBackground,
};
