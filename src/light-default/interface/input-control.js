// -----------------------------------------------------------
// Input Control
// Colors for input controls such as in the Search view or the
// Find/Replace dialog.
// -----------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const input = {
  // Input box background. {default: #3c3c3c}
  background: '#00000000',

  // Input box border. {default: null}
  border: tokens.outline,

  // Input box foreground. {default: #cccccc}
  foreground: tokens.onSurface,

  // Input box foreground color for placeholder text. {default: #cccccc80}
  placeholderForeground: tokens.onSurfaceVariant,
};

const inputOption = {
  // Background color of activated options in input fields.
  // {default:#007fd466}
  activeBackground: tokens.secondaryContainer,

  // Border color of activated options in input fields. {default:#007acc}
  activeBorder: tokens.secondaryContainer,

  // Foreground color of activated options in input fields.
  // {default:#ffffff}
  activeForeground: tokens.onSecondaryContainer,

  // Background color of activated options in input fields.
  // {default:#5a5d5e80}
  hoverBackground: chroma(tokens.onSurfaceVariant).alpha(0.1).hex(),
};

const inputValidation = {
  // Input validation background color for error severity.
  // {default: #5a1d1d}
  errorBackground: tokens.errorContainer,

  // Input validation foreground color for error severity. {default: null}
  errorForeground: tokens.onSurface,

  // Input validation border color for error severity. {default: #be1100}
  errorBorder: tokens.errorContainer,

  // Input validation background color for information severity.
  // {default: #063b49}
  infoBackground: tokens.infoContainer,

  // Input validation foreground color for information severity.
  // {default: null}
  infoForeground: tokens.onInfoContainer,

  // Input validation border color for information severity.
  // {default: #007acc}
  infoBorder: tokens.infoContainer,

  // Input validation background color for information warning.
  // {default: #352a05}
  warningBackground: tokens.warning,

  // Input validation foreground color for warning severity. {default: null}
  warningForeground: tokens.onWarning,

  // Input validation border color for warning severity.
  // {default: #b89500}
  warningBorder: tokens.warning,
};

export default {
  'input.background': input.background,
  'input.border': input.border,
  'input.foreground': input.foreground,
  'input.placeholderForeground': input.placeholderForeground,
  'inputOption.activeBackground': inputOption.activeBackground,
  'inputOption.activeBorder': inputOption.activeBorder,
  'inputOption.activeForeground': inputOption.activeForeground,
  'inputOption.hoverBackground': inputOption.hoverBackground,
  'inputValidation.errorBackground': inputValidation.errorBackground,
  'inputValidation.errorForeground': inputValidation.errorForeground,
  'inputValidation.errorBorder': inputValidation.errorBorder,
  'inputValidation.infoBackground': inputValidation.infoBackground,
  'inputValidation.infoForeground': inputValidation.infoForeground,
  'inputValidation.infoBorder': inputValidation.infoBorder,
  'inputValidation.warningBackground': inputValidation.warningBackground,
  'inputValidation.warningForeground': inputValidation.warningForeground,
  'inputValidation.warningBorder': inputValidation.warningBorder,
};
