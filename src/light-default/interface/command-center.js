import { tokens } from '../colors/interface.js';

const commandCenter = {
  // Foreground color of the Command Center.
  foreground: tokens.onSurface,

  // Background color of the Command Center.
  background: tokens.surfaceContainerHigh,

  // Border color of the Command Center.
  border: tokens.outlineVariant,

  // Active foreground color of the Command Center.
  activeForeground: tokens.onSecondaryContainer,

  // Active background color of the Command Center.
  activeBackground: tokens.secondaryContainer,

  // Active border color of the command center.
  activeBorder: tokens.secondaryContainer,

  // Foreground color of the Command Center when the window is inactive.
  inactiveForeground: tokens.onSurfaceVariant,

  // Border color of the Command Center when the window is inactive.
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
