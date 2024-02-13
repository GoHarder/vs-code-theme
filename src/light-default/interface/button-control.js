// ----------------------------------------------------------------
// Button Control
// A set of colors for button widgets such as Open Folder button in
// the Explorer of a new window.
// ----------------------------------------------------------------

import { tokens } from '../colors/interface.js';

const button = {
  // Button foreground color. {default: #ffffff}
  foreground: tokens.onPrimary,

  // Button background color. {default: #0e639c}
  background: tokens.primary,

  // Button background color when hovering. {default: #1177bb}
  hoverBackground: tokens.primaryHover,

  // Secondary button foreground color. {default: #ffffff}
  secondaryForeground: tokens.onSecondaryContainer,

  // Secondary button background color. {default: #3a3d41}
  secondaryBackground: tokens.secondaryContainer,

  // Secondary button background color when hovering. {default: #45494e}
  secondaryHoverBackground: tokens.secondaryContainerHover,

  // Button border color. {default: null}
  border: undefined, // Done

  // Button separator color. {default: #ffffff66}
  separator: tokens.onPrimary,
};

const checkbox = {
  // Background color of checkbox widget. {default: #3c3c3c}
  background: '#00000000',

  // Foreground color of checkbox widget. {default: #f0f0f0}
  foreground: tokens.primary,

  // Border color of checkbox widget. {default: #3c3c3c}
  border: tokens.onSurfaceVariant,

  // Background color of checkbox widget when the element it's in is
  // selected. {default: #252526}
  selectBackground: undefined, // TODO: checkbox.selectBackground

  // Border color of checkbox widget when the element it's in is selected.
  // {default: #c5c5c5}
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
