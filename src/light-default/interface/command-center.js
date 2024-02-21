import { tokens } from '../colors/interface.js';

const commandCenter = {
  // Foreground color of the Command Center. {default: #333333}
  foreground: tokens.onSurface,

  // Background color of the Command Center. {default: #0000000d}
  background: tokens.surfaceContainerHigh,

  // Border color of the Command Center. {default: #33333333}
  border: tokens.outlineVariant,

  // Active foreground color of the Command Center. {default: #333333}
  activeForeground: tokens.onSecondaryContainer,

  // Active background color of the Command Center. {default: #00000014}
  activeBackground: tokens.secondaryContainer,

  // Active border color of the command center. {default: #3333334d}
  activeBorder: tokens.secondaryContainer,

  // Foreground color of the Command Center when the window is inactive.
  // {default: #33333399}
  inactiveForeground: tokens.onSurfaceVariant,

  // Border color of the Command Center when the window is inactive.
  // {default: #33333326}
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
