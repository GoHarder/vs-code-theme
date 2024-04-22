import { tokens } from '../colors.js';

const keybindingTable = {
  // Background color for the keyboard shortcuts table header.
  // {default: #cccccc0a}
  headerBackground: tokens.surfaceContainerHigh,

  // Background color for the keyboard shortcuts table alternating rows.
  // {default: #cccccc0a}
  rowsBackground: undefined, // Done
};

export default {
  'keybindingTable.headerBackground': keybindingTable.headerBackground,
  'keybindingTable.rowsBackground': keybindingTable.rowsBackground,
};
