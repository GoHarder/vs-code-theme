// -------------------------------------------
// Window Border
// The theme colors for VS Code window border.
// -------------------------------------------

import { tokens } from '../colors/interface.js';

const window = {
  // Border color for the active (focused) window. {default: null}
  activeBorder: undefined, // Done

  // Border color for the inactive (unfocused) windows. {default: null}
  inactiveBorder: undefined, // Done
};

export default {
  'window.activeBorder': window.activeBorder,
  'window.inactiveBorder': window.inactiveBorder,
};
