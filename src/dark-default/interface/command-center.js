import { tokens } from '../colors/interface.js';

const commandCenter = {
  // Foreground color of the Command Center. {default: #cccccc}
  foreground: tokens.onSurface,

  // Background color of the Command Center. {default: #ffffff0d}
  background: tokens.surfaceContainerHigh,

  // Border color of the Command Center. {default: #cccccc33}
  border: tokens.outlineVariant,

  // Active foreground color of the Command Center. {default: #cccccc}
  activeForeground: tokens.onSecondaryContainer,

  // Active background color of the Command Center. {default: #ffffff14}
  activeBackground: tokens.secondaryContainer,

  // Active border color of the command center. {default: #cccccc4d}
  activeBorder: tokens.secondaryContainer,

  // Foreground color of the Command Center when the window is inactive.
  // {default: #cccccc99}
  inactiveForeground: tokens.onSurfaceVariant,

  // Border color of the Command Center when the window is inactive.
  // {default: #cccccc26}
  inactiveBorder: tokens.outlineVariant,
};

export default {
  'commandCenter.foreground': commandCenter.foreground,
  'commandCenter.activeForeground': commandCenter.activeForeground,
  'commandCenter.background': commandCenter.background,
  'commandCenter.activeBackground': commandCenter.activeBackground,
  'commandCenter.border': commandCenter.border,
  'commandCenter.inactiveForeground': commandCenter.inactiveForeground,
  'commandCenter.inactiveBorder': commandCenter.inactiveBorder,
  'commandCenter.activeBorder': commandCenter.activeBorder,
};
