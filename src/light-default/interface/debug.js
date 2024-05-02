import chroma from 'chroma-js';
import { tokens } from '../colors.js';
import { icons } from '../syntax/index.js';

const debugToolBar = {
  // Debug toolbar background color. {default: #333333}
  background: tokens.surfaceContainer,

  // Debug toolbar border color. {default: null}
  border: tokens.outlineVariant,
};

const editor = {
  // Background color of the top stack frame highlight in the editor.
  // {default: #ffff0033}
  stackFrameHighlightBackground: chroma(tokens.warning).alpha(0.2).hex(),

  // Background color of the focused stack frame highlight in the editor.
  // {default: #7abd7a4d}
  focusedStackFrameHighlightBackground: chroma(tokens.warning).alpha(0.2).hex(),

  // Color for the debug inline value text. {default: #ffffff80}
  inlineValuesForeground: undefined, // TODO: editor.inlineValuesForeground

  // Color for the debug inline value background. {default: #ffc80033}
  inlineValuesBackground: undefined, // TODO: editor.inlineValuesBackground
};

const debugView = {
  // Foreground color for a label shown in the CALL STACK view when the
  // debugger breaks on an exception. {default: #cccccc}
  exceptionLabelForeground: tokens.onSurface,

  // Background color for a label shown in the CALL STACK view when the
  // debugger breaks on an exception. {default: #6c2022}
  exceptionLabelBackground: tokens.errorContainer,

  // Foreground color for a label in the CALL STACK view showing the current
  // session's or thread's state. {default: #cccccc}
  stateLabelForeground: tokens.onPrimaryContainer,

  // Background color for a label in the CALL STACK view showing the current
  // session's or thread's state. {default: #88888844}
  stateLabelBackground: tokens.primaryContainer,

  // Color used to highlight value changes in the debug views (such as in
  // the Variables view). {default: #569cd6}
  valueChangedHighlight: chroma(tokens.warning).alpha(0.8).hex(),
};

const debugTokenExpression = {
  // Foreground color for the token names shown in debug views (such as in
  // the Variables or Watch view). {default: #c586c0}
  name: icons.debug.name,

  // Foreground color for the token values shown in debug views.
  // {default: #cccccc99}
  value: icons.debug.value,

  // Foreground color for strings in debug views. {default: #ce9178}
  string: icons.debug.string,

  // Foreground color for booleans in debug views. {default: #4e94ce}
  boolean: icons.debug.boolean,

  // Foreground color for numbers in debug views. {default: #b5cea8}
  number: icons.debug.number,

  // Foreground color for expression errors in debug views.
  // {default: #f48771}
  error: tokens.errorFixed,
};

export default {
  'debugToolBar.background': debugToolBar.background,
  'debugToolBar.border': debugToolBar.border,
  'editor.stackFrameHighlightBackground': editor.stackFrameHighlightBackground,
  'editor.focusedStackFrameHighlightBackground': editor.focusedStackFrameHighlightBackground,
  'editor.inlineValuesForeground': editor.inlineValuesForeground,
  'editor.inlineValuesBackground': editor.inlineValuesBackground,
  'debugView.exceptionLabelForeground': debugView.exceptionLabelForeground,
  'debugView.exceptionLabelBackground': debugView.exceptionLabelBackground,
  'debugView.stateLabelForeground': debugView.stateLabelForeground,
  'debugView.stateLabelBackground': debugView.stateLabelBackground,
  'debugView.valueChangedHighlight': debugView.valueChangedHighlight,
  'debugTokenExpression.name': debugTokenExpression.name,
  'debugTokenExpression.value': debugTokenExpression.value,
  'debugTokenExpression.string': debugTokenExpression.string,
  'debugTokenExpression.boolean': debugTokenExpression.boolean,
  'debugTokenExpression.number': debugTokenExpression.number,
  'debugTokenExpression.error': debugTokenExpression['error'],
};
