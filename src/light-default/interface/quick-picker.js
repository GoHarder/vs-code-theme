import { tokens } from '../colors.js';

const pickerGroup = {
  // Quick picker (Quick Open) color for grouping borders.
  // {default: #3f3f46}
  border: tokens.outline,

  // Quick picker (Quick Open) color for grouping labels.
  // {default: #3794ff}
  foreground: tokens.onSurfaceVariant,
};

const quickInput = {
  // Quick input background color. The quick input widget is the container
  // for views like the color theme picker. {default: #252526}
  background: tokens.surfaceContainerHigh,

  // Quick input foreground color. The quick input widget is the container
  // for views like the color theme picker. {default: #cccccc}
  foreground: tokens.onSurface,

  // {default: null}
  list: { focusBackground: undefined }, // TODO: quickInput.list.focusBackground
};

const quickInputList = {
  // Quick picker background color for the focused item. {default: #04395e}
  focusBackground: undefined, // Done

  // Quick picker foreground color for the focused item. {default: #ffffff}
  focusForeground: undefined, // Done

  // Quick picker icon foreground color for the focused item. {default: null}
  focusIconForeground: undefined, // Done
};

const quickInputTitle = {
  // Quick picker title background color. The quick picker widget is the
  // container for pickers like the Command Palette. {default: #ffffff1b}
  background: tokens.surfaceContainerHighest,
};

export default {
  'pickerGroup.border': pickerGroup.border,
  'pickerGroup.foreground': pickerGroup.foreground,
  'quickInput.background': quickInput.background,
  'quickInput.foreground': quickInput.foreground,
  'quickInputList.focusBackground': quickInputList.focusBackground,
  'quickInputList.focusForeground': quickInputList.focusForeground,
  'quickInputList.focusIconForeground': quickInputList.focusIconForeground,
  'quickInputTitle.background': quickInputTitle.background,
  'quickInput.list.focusBackground': quickInput.list.focusBackground,
};
