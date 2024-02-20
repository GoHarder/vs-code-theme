// -----------------------------------------------------------
// Input Control
// Colors for input controls such as in the Search view or the
// Find/Replace dialog.
// -----------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const input = {
  // Input box background. {default: #ffffff}
  background: '#00000000',

  // Input box border. {default: null}
  border: tokens.outline,

  // Input box foreground. {default: #616161}
  foreground: tokens.onSurface,

  // Input box foreground color for placeholder text. {default: #61616180}
  placeholderForeground: tokens.onSurfaceVariant,
};

const inputOption = {
  // Background color of activated options in input fields.
  // {default: #0090f133}
  activeBackground: tokens.secondaryContainer,

  // Border color of activated options in input fields. {default: #007acc}
  activeBorder: tokens.secondaryContainer,

  // Foreground color of activated options in input fields.
  // {default: #000000}
  activeForeground: tokens.onSecondaryContainer,

  // Background color of activated options in input fields.
  // {default: #b8b8b850}
  hoverBackground: chroma(tokens.onSurfaceVariant).alpha(0.1).hex(),
};

const inputValidation = {
  // Input validation background color for error severity.
  // {default: #f2dede}
  errorBackground: tokens.error,

  // Input validation foreground color for error severity. {default: null}
  errorForeground: tokens.onError,

  // Input validation border color for error severity. {default: #be1100}
  errorBorder: tokens.error,

  // Input validation background color for information severity.
  // {default: #d6ecf2}
  infoBackground: tokens.info,

  // Input validation foreground color for information severity.
  // {default: null}
  infoForeground: tokens.onInfo,

  // Input validation border color for information severity.
  // {default: #007acc}
  infoBorder: tokens.info,

  // Input validation background color for information warning.
  // {default: #f6f5d2}
  warningBackground: tokens.warningFixed,

  // Input validation foreground color for warning severity. {default: null}
  warningForeground: tokens.onWarning,

  // Input validation border color for warning severity.
  // {default: #b89500}
  warningBorder: tokens.warningFixed,
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
