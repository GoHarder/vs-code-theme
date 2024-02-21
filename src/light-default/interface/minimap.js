// ---------------------------------------------------------
// Minimap
// The Minimap shows a minified version of the current file.
// ---------------------------------------------------------

import { tokens } from '../colors/interface.js';

const minimap = {
  // Highlight color for matches from search within files.
  // {default: #d18616}
  findMatchHighlight: tokens.good,

  // Highlight color for the editor selection. {default: #add6ff}
  selectionHighlight: undefined, // Done

  // {default: #1a85ff}
  infoHighlight: undefined, // Done

  // Highlight color for errors within the editor. {default: #ff1212b3}
  errorHighlight: tokens.error,

  // Highlight color for warnings within the editor. {default: #bf8803}
  warningHighlight: undefined, // TODO: minimap.warningHighlight

  // Minimap background color. {default: null}
  background: tokens.surfaceContainerLow,

  // Minimap marker color for repeating editor selections.
  // {default: #c9c9c9}
  selectionOccurrenceHighlight: tokens.onSurfaceVariant,

  // Opacity of foreground elements rendered in the minimap. For example,
  // "#000000c0" will render the elements with 75% opacity.
  // {default: #000000}
  foregroundOpacity: undefined, // Done
};

const minimapSlider = {
  // Minimap slider background color. {default: #64646433}
  background: undefined, // Done

  // Minimap slider background color when hovering. {default: #64646459}
  hoverBackground: undefined, // Done

  // Minimap slider background color when clicked on. {default: #0000004d}
  activeBackground: undefined, // Done
};

const minimapGutter = {
  // Minimap gutter color for added content. {default: #48985d}
  addedBackground: undefined, // Done

  // Minimap gutter color for modified content. {default: #2090d3}
  modifiedBackground: undefined, // Done

  // Minimap gutter color for deleted content. {default: #e51400}
  deletedBackground: undefined, // Done
};

export default {
  'minimap.findMatchHighlight': minimap.findMatchHighlight,
  'minimap.selectionHighlight': minimap.selectionHighlight,
  'minimap.errorHighlight': minimap.errorHighlight,
  'minimap.warningHighlight': minimap.warningHighlight,
  'minimap.background': minimap.background,
  'minimap.selectionOccurrenceHighlight': minimap.selectionOccurrenceHighlight,
  'minimap.foregroundOpacity': minimap.foregroundOpacity,
  'minimapSlider.background': minimapSlider.background,
  'minimapSlider.hoverBackground': minimapSlider.hoverBackground,
  'minimapSlider.activeBackground': minimapSlider.activeBackground,
  'minimapGutter.addedBackground': minimapGutter.addedBackground,
  'minimapGutter.modifiedBackground': minimapGutter.modifiedBackground,
  'minimapGutter.deletedBackground': minimapGutter.deletedBackground,
};
