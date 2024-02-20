// -----------------------------------------------------------------
// Activity Bar
// The Activity Bar is displayed either on the far left or right of
// the workbench and allows fast switching between views of the Side
// Bar.
// -----------------------------------------------------------------

import { tokens } from '../colors/interface.js';

const activityBar = {
  // Activity Bar background color. {default: #2c2c2c}
  background: tokens.surfaceContainerHigh,

  // Drag and drop feedback color for the activity bar items. The activity
  // bar is showing on the far left or right and allows to switch between
  // views of the side bar. {default: #ffffff}
  dropBorder: undefined, // Done

  // Activity Bar foreground color (for example used for the icons).
  // {default: #ffffff}
  foreground: tokens.onSecondaryContainer,

  // Activity Bar item foreground color when it is inactive.
  // {default: #ffffff66}
  inactiveForeground: tokens.onSurfaceVariant,

  // Activity Bar border color with the Side Bar. {default: null}
  border: undefined, // Done

  // Activity Bar active indicator border color. {default: #ffffff}
  activeBorder: tokens.secondaryContainer,

  // Activity Bar optional background color for the active element.
  // {default: null}
  activeBackground: tokens.secondaryContainer,

  // Activity bar focus border color for the active item. {default: null}
  activeFocusBorder: tokens.secondaryContainer,
};

const activityBarTop = {
  // {default: #424242}
  activeBorder: tokens.primary,

  // {default: #424242}
  dropBorder: tokens.onSurfaceVariant,

  // {default: #424242}
  foreground: tokens.primary,

  // {default: #424242bf}
  inactiveForeground: tokens.onSurfaceVariant,
};

const activityBarBadge = {
  // Activity notification badge background color. {default: #007acc}
  background: tokens.tertiaryContainer,

  // Activity notification badge foreground color. {default: #ffffff}
  foreground: tokens.onTertiaryContainer,
};

export default {
  'activityBar.background': activityBar.background,
  'activityBar.dropBorder': activityBar.dropBorder,
  'activityBar.foreground': activityBar.foreground,
  'activityBar.inactiveForeground': activityBar.inactiveForeground,
  'activityBar.border': activityBar.border,
  'activityBarBadge.background': activityBarBadge.background,
  'activityBarBadge.foreground': activityBarBadge.foreground,
  'activityBar.activeBorder': activityBar.activeBorder,
  'activityBar.activeBackground': activityBar.activeBackground,
  'activityBar.activeFocusBorder': activityBar.activeFocusBorder,
  'activityBarTop.activeBorder': activityBarTop.activeBorder,
  'activityBarTop.dropBorder': activityBarTop.dropBorder,
  'activityBarTop.foreground': activityBarTop.foreground,
  'activityBarTop.inactiveForeground': activityBarTop.inactiveForeground,
};
