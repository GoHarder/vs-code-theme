// -------------------------------------------------------------------------
// Settings Editor Colors
// These colors are for the GUI settings editor which can be opened with the
// Preferences: Open Settings (UI) command.
// -------------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const settings = {
  // The line that indicates a modified setting. {default: #0c7d9d}
  modifiedItemIndicator: tokens.primary,

  // The color of the Settings editor split view sash border.
  // {default: #80808059}
  sashBorder: tokens.outlineVariant,

  // The color of the header container border. {default: #80808059}
  headerBorder: tokens.outlineVariant,

  // The foreground color for a section header or hovered title.
  // {default: #e7e7e7b3}
  settingsHeaderHoverForeground: tokens.primaryHover,

  // The foreground color for a section header or active title.
  // {default: #e7e7e7}
  headerForeground: tokens.primary,

  // The background color of a settings row when hovered.
  // {default: #2a2d2e4d}
  rowHoverBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Background color of a focused setting row. {default: #2a2d2e99}
  focusedRowBackground: tokens.surfaceContainer,

  // The color of the row's top and bottom border when the row is focused.
  // {default: #007fd4}
  focusedRowBorder: undefined, // Done

  // Dropdown background. {default: #3c3c3c}
  dropdownBackground: undefined, // Done

  // Dropdown foreground. {default: #f0f0f0}
  dropdownForeground: undefined, // Done

  // Dropdown border. {default: #3c3c3c}
  dropdownBorder: undefined, // Done

  // Dropdown list border. {default: #454545}
  dropdownListBorder: undefined, // Done

  // Checkbox background.
  checkboxBackground: undefined, // Done

  // Checkbox foreground. {default: #f0f0f0}
  checkboxForeground: undefined, // Done

  // Checkbox border. {default: #3c3c3c}
  checkboxBorder: undefined, // Done

  // Text input box background. {default: #3c3c3c}
  textInputBackground: undefined, // Done

  // Text input box foreground. {default: #cccccc}
  textInputForeground: undefined, // Done

  // Text input box border. {default: nul}
  textInputBorder: undefined, // Done

  // Number input box background. {default: #3c3c3c}
  numberInputBackground: undefined, // Done

  // Number input box foreground. {default: #cccccc}
  numberInputForeground: undefined, // Done

  // Number input box border. {default: nul}
  numberInputBorder: undefined, // Done
};

export default {
  'settings.headerForeground': settings.headerForeground,
  'settings.modifiedItemIndicator': settings.modifiedItemIndicator,
  'settings.dropdownBackground': settings.dropdownBackground,
  'settings.dropdownForeground': settings.dropdownForeground,
  'settings.dropdownBorder': settings.dropdownBorder,
  'settings.dropdownListBorder': settings.dropdownListBorder,
  'settings.checkboxBackground': settings.checkboxBackground,
  'settings.checkboxForeground': settings.checkboxForeground,
  'settings.checkboxBorder': settings.checkboxBorder,
  'settings.rowHoverBackground': settings.rowHoverBackground,
  'settings.textInputBackground': settings.textInputBackground,
  'settings.textInputForeground': settings.textInputForeground,
  'settings.textInputBorder': settings.textInputBorder,
  'settings.numberInputBackground': settings.numberInputBackground,
  'settings.numberInputForeground': settings.numberInputForeground,
  'settings.numberInputBorder': settings.numberInputBorder,
  'settings.focusedRowBackground': settings.focusedRowBackground,
  'settings.focusedRowBorder': settings.focusedRowBorder,
  'settings.headerBorder': settings.headerBorder,
  'settings.sashBorder': settings.sashBorder,
  'settings.settingsHeaderHoverForeground': settings.settingsHeaderHoverForeground,
};
