// ---------------------------------------------------------------
// Action Colors
// A set of colors to control the interactions with actions across
// the workbench.
// ---------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const toolbar = {
  // Toolbar background when hovering over actions using the mouse.
  // {default: #5a5d5e50}
  hoverBackground: chroma(tokens.onSurfaceVariant).alpha(0.1).hex(),

  // Toolbar outline when hovering over actions using the mouse.
  // {default: null}
  hoverOutline: undefined, // Done

  // Toolbar background when holding the mouse over actions.
  // {default: #5a5d5e50}
  activeBackground: tokens.secondaryContainer,
};

export default {
  'toolbar.hoverBackground': toolbar.hoverBackground,
  'toolbar.hoverOutline': toolbar.hoverOutline,
  'toolbar.activeBackground': toolbar.activeBackground,
};
