// ------------------------------------------------------------------------
// Banner Colors
// The banner appears below the title bar and spans the entire width of the
// workbench when visible.
// ------------------------------------------------------------------------

import { tokens } from '../colors.js';

const banner = {
  // Banner background color. {default: #04395e}
  background: tokens.inverseSurface,

  // Banner foreground color. {default: #ffffff}
  foreground: tokens.inverseOnSurface,

  // Color for the icon in front of the banner text. {default: #3794ff}
  iconForeground: tokens.inversePrimary,
};

export default {
  'banner.background': banner.background,
  'banner.foreground': banner.foreground,
  'banner.iconForeground': banner.iconForeground,
};
