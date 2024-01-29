import { tokens } from '../colors/interface.js';

const titleBar = {
  // Title Bar background when the window is active. {default: #3c3c3c}
  activeBackground: tokens.surfaceContainerHigh,

  // Title Bar foreground when the window is active. {default: #cccccc}
  activeForeground: tokens.onSurface,

  // Title Bar background when the window is inactive.
  // {default: #3c3c3c99}
  inactiveBackground: tokens.surfaceContainerHigh,

  // Title Bar foreground when the window is inactive.
  // {default: #cccccc99}
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
