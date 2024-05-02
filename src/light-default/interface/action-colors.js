// ---------------------------------------------------------------
// Action Colors
// A set of colors to control the interactions with actions across
// the workbench.
// ---------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors.js';

const toolbar = {
  // Toolbar background when hovering over actions using the mouse.
  // {default: #b8b8b850}
  hoverBackground: chroma(tokens.onSurfaceVariant).alpha(0.1).hex(),

  // Toolbar outline when hovering over actions using the mouse.
  // {default: null}
  hoverOutline: undefined, // Done

  // Toolbar background when holding the mouse over actions.
  // {default: #a6a6a650}
  activeBackground: tokens.secondaryContainer,
};

export default {
  'toolbar.hoverBackground': toolbar.hoverBackground,
  'toolbar.hoverOutline': toolbar.hoverOutline,
  'toolbar.activeBackground': toolbar.activeBackground,
};
