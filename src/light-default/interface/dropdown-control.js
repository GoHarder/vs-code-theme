// ------------------------------------------------------------------
// Dropdown Control
// A set of colors for all Dropdown widgets such as in the Integrated
// Terminal or the Output panel. Note that the Dropdown control is
// not used on macOS currently.
// ------------------------------------------------------------------

import { tokens } from '../colors/interface.js';

const dropdown = {
  // Dropdown background. {default: #ffffff}
  background: '#00000000',

  // Dropdown list background. {default: null}
  listBackground: tokens.surfaceContainer,

  // Dropdown border. {default: #cecece}
  border: tokens.outline,

  // Dropdown foreground. {default: #616161}
  foreground: tokens.onSurfaceVariant,
};

export default {
  'dropdown.background': dropdown.background,
  'dropdown.listBackground': dropdown.listBackground,
  'dropdown.border': dropdown.border,
  'dropdown.foreground': dropdown.foreground,
};
