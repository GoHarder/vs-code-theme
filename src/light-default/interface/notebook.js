import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const notebook = {
  // Notebook background color. {default: #1e1e1e}
  editorBackground: undefined,

  // The border color for notebook cells. {default: #37373d}
  cellBorderColor: undefined,

  // The background color of a cell when the cell is hovered. {default: null}
  cellHoverBackground: undefined,

  // The color of the notebook cell insertion indicator. {default: #007fd4}
  cellInsertionIndicator: undefined,

  // The background color of notebook cell status bar items.
  // {default: #ffffff26}
  cellStatusBarItemHoverBackground: undefined,

  // The color of the separator in the cell bottom toolbar
  // {default: #80808059}
  cellToolbarSeparator: undefined,

  // The color of the notebook cell editor background {default: #252526}
  cellEditorBackground: undefined,

  // The background color of a cell when the cell is focused. {default: null}
  focusedCellBackground: undefined,

  // The color of the cell's focus indicator borders when the cell is
  // focused. {default: #007fd4}
  focusedCellBorder: undefined,

  // The color of the notebook cell editor border. {default: #007fd4}
  focusedEditorBorder: undefined,

  // The color of the cell's top and bottom border when a cell is focused
  // while the primary focus is outside of the editor. {default: #37373d}
  inactiveFocusedCellBorder: undefined,

  // The color of the cell's borders when multiple cells are selected.
  // {default: null}
  inactiveSelectedCellBorder: undefined,

  // The Color of the notebook output container background. {default: null}
  outputContainerBackgroundColor: undefined,

  // The border color of the notebook output container. {default: null}
  outputContainerBorderColor: undefined,

  // The background color of a cell when the cell is selected.
  // {default: #37373d}
  selectedCellBackground: undefined,

  // The color of the cell's top and bottom border when the cell is selected
  // but not focused. {default: #37373d}
  selectedCellBorder: undefined,

  // Background color of highlighted cell {default: #ffffff0b}
  symbolHighlightBackground: undefined,
};

const notebookScrollbarSlider = {
  // Notebook scrollbar slider background color when clicked on.
  // {default: #bfbfbf66}
  activeBackground: undefined,

  // Notebook scrollbar slider background color. {default: #79797966}
  background: undefined,

  // Notebook scrollbar slider background color when hovering.
  // {default: #646464b3}
  hoverBackground: undefined,
};

const notebookStatusErrorIcon = {
  // The error icon color of notebook cells in the cell status bar.
  // {default: #f48771}
  foreground: undefined,
};

const notebookStatusRunningIcon = {
  // The running icon color of notebook cells in the cell status bar.
  // {default: #cccccc}
  foreground: undefined,
};

const notebookStatusSuccessIcon = {
  // The success icon color of notebook cells in the cell status bar.
  // {default: #89d185}
  foreground: undefined,
};

const notebookEditorOverviewRuler = {
  // The color of the running cell decoration in the notebook editor
  // overview ruler. {default: #89d185}
  runningCellForeground: undefined,
};

export default {
  'notebook.editorBackground': notebook.editorBackground,
  'notebook.cellBorderColor': notebook.cellBorderColor,
  'notebook.cellHoverBackground': notebook.cellHoverBackground,
  'notebook.cellInsertionIndicator': notebook.cellInsertionIndicator,
  'notebook.cellStatusBarItemHoverBackground': notebook.cellStatusBarItemHoverBackground,
  'notebook.cellToolbarSeparator': notebook.cellToolbarSeparator,
  'notebook.cellEditorBackground': notebook.cellEditorBackground,
  'notebook.focusedCellBackground': notebook.focusedCellBackground,
  'notebook.focusedCellBorder': notebook.focusedCellBorder,
  'notebook.focusedEditorBorder': notebook.focusedEditorBorder,
  'notebook.inactiveFocusedCellBorder': notebook.inactiveFocusedCellBorder,
  'notebook.inactiveSelectedCellBorder': notebook.inactiveSelectedCellBorder,
  'notebook.outputContainerBackgroundColor': notebook.outputContainerBackgroundColor,
  'notebook.outputContainerBorderColor': notebook.outputContainerBorderColor,
  'notebook.selectedCellBackground': notebook.selectedCellBackground,
  'notebook.selectedCellBorder': notebook.selectedCellBorder,
  'notebook.symbolHighlightBackground': notebook.symbolHighlightBackground,
  'notebookScrollbarSlider.activeBackground': notebookScrollbarSlider.activeBackground,
  'notebookScrollbarSlider.background': notebookScrollbarSlider.background,
  'notebookScrollbarSlider.hoverBackground': notebookScrollbarSlider.hoverBackground,
  'notebookStatusErrorIcon.foreground': notebookStatusErrorIcon.foreground,
  'notebookStatusRunningIcon.foreground': notebookStatusRunningIcon.foreground,
  'notebookStatusSuccessIcon.foreground': notebookStatusSuccessIcon.foreground,
  'notebookEditorOverviewRuler.runningCellForeground': notebookEditorOverviewRuler.runningCellForeground,
};
