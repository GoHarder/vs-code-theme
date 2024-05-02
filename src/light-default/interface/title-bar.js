import { tokens } from '../colors.js';

const titleBar = {
  // Title Bar background when the window is active. {default: #dddddd}
  activeBackground: tokens.surfaceContainerHigh,

  // Title Bar foreground when the window is active. {default: #333333}
  activeForeground: tokens.onSurface,

  // Title Bar background when the window is inactive.
  // {default: #dddddd99}
  inactiveBackground: tokens.surfaceContainerHigh,

  // Title Bar foreground when the window is inactive.
  // {default: #33333399}
  inactiveForeground: tokens.onSurfaceVariant,

  // Title bar border color. {default: null}
  border: undefined, // Done
};

export default {
  'titleBar.activeBackground': titleBar.activeBackground,
  'titleBar.activeForeground': titleBar.activeForeground,
  'titleBar.inactiveBackground': titleBar.inactiveBackground,
  'titleBar.inactiveForeground': titleBar.inactiveForeground,
  'titleBar.border': titleBar.border,
};
