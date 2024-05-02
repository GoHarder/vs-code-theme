// ----------------------------------------------------------------
// Button Control
// A set of colors for button widgets such as Open Folder button in
// the Explorer of a new window.
// ----------------------------------------------------------------

import { tokens } from '../colors.js';

const button = {
  // Button foreground color. {default: #ffffff}
  foreground: tokens.onPrimary,

  // Button background color. {default: #007acc}
  background: tokens.primary,

  // Button background color when hovering. {default: #0062a3}
  hoverBackground: tokens.primaryHover,

  // Secondary button foreground color. {default: #ffffff}
  secondaryForeground: tokens.onSecondaryContainer,

  // Secondary button background color. {default: #5f6a79}
  secondaryBackground: tokens.secondaryContainer,

  // Secondary button background color when hovering. {default: #4c5561}
  secondaryHoverBackground: tokens.secondaryContainerHover,

  // Button border color. {default: null}
  border: undefined, // Done

  // Button separator color. {default: #ffffff66}
  separator: tokens.onPrimary,
};

const checkbox = {
  // Background color of checkbox widget. {default: #ffffff}
  background: '#00000000',

  // Foreground color of checkbox widget. {default: #616161}
  foreground: tokens.good,

  // Border color of checkbox widget. {default: #cecece}
  border: tokens.onSurfaceVariant,

  // Background color of checkbox widget when the element it's in is
  // selected. {default: #f3f3f3}
  selectBackground: undefined, // TODO: checkbox.selectBackground

  // Border color of checkbox widget when the element it's in is selected.
  // {default: #424242}
  selectBorder: undefined, // TODO: checkbox.selectBorder
};

export default {
  'button.background': button.background,
  'button.foreground': button.foreground,
  'button.border': button.border,
  'button.separator': button.separator,
  'button.hoverBackground': button.hoverBackground,
  'button.secondaryForeground': button.secondaryForeground,
  'button.secondaryBackground': button.secondaryBackground,
  'button.secondaryHoverBackground': button.secondaryHoverBackground,
  'checkbox.background': checkbox.background,
  'checkbox.foreground': checkbox.foreground,
  'checkbox.border': checkbox.border,
  'checkbox.selectBackground': checkbox.selectBackground,
  'checkbox.selectBorder': checkbox.selectBorder,
};
