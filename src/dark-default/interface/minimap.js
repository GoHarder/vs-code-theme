// ---------------------------------------------------------
// Minimap
// The Minimap shows a minified version of the current file.
// ---------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const minimap = {
  // Highlight color for matches from search within files.
  // {default: #d18616}
  findMatchHighlight: chroma(tokens.good).alpha(0.9).hex(),

  // Highlight color for the editor selection. {default: #264f78}
  selectionHighlight: undefined, // Done

  // {default: #3794ff}
  infoHighlight: undefined, // Done

  // Highlight color for errors within the editor. {default: #ff1212b3}
  errorHighlight: tokens.errorFixed,

  // Highlight color for warnings within the editor. {default: #cca700}
  warningHighlight: undefined, // Done

  // Minimap background color. {default: null}
  background: tokens.surfaceContainerLow,

  // Minimap marker color for repeating editor selections.
  // {default: #676767}
  selectionOccurrenceHighlight: chroma(tokens.onSurfaceVariant).alpha(0.9).hex(),

  // Opacity of foreground elements rendered in the minimap. For example,
  // "#000000c0" will render the elements with 75% opacity.
  // {default: #000000}
  foregroundOpacity: undefined, // Done
};

const minimapSlider = {
  // Minimap slider background color. {default: #79797933}
  background: undefined, // Done

  // Minimap slider background color when hovering. {default: #64646459}
  hoverBackground: undefined, // Done

  // Minimap slider background color when clicked on. {default: #bfbfbf33}
  activeBackground: undefined, // Done
};

const minimapGutter = {
  // Minimap gutter color for added content. {default: #487e02}
  addedBackground: undefined, // Done

  // Minimap gutter color for modified content. {default: #1b81a8}
  modifiedBackground: undefined, // Done

  // Minimap gutter color for deleted content. {default: #f14c4c}
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
