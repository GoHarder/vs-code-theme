// ------------------------------------------------------------------
// Dropdown Control
// A set of colors for all Dropdown widgets such as in the Integrated
// Terminal or the Output panel. Note that the Dropdown control is
// not used on macOS currently.
// ------------------------------------------------------------------

import { tokens } from '../colors/interface.js';

const dropdown = {
  // Dropdown background. {default: #3c3c3c}
  background: '#00000000',

  // Dropdown list background. {default: null}
  listBackground: tokens.surfaceContainer,

  // Dropdown border. {default: #3c3c3c}
  border: tokens.outline,

  // Dropdown foreground. {default: #f0f0f0}
  foreground: tokens.onSurfaceVariant,
};

export default {
  'dropdown.background': dropdown.background,
  'dropdown.listBackground': dropdown.listBackground,
  'dropdown.border': dropdown.border,
  'dropdown.foreground': dropdown.foreground,
};
