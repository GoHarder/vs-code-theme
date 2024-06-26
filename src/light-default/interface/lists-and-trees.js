// -----------------------------------------------------------
// Lists and Trees
// Colors for list and trees like the File Explorer. An active
// list/tree has keyboard focus, an inactive does not.
// -----------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors.js';

const list = {
  // List/Tree background color for the selected item when the list/tree is
  // active. {default: #04395e}
  activeSelectionBackground: tokens.secondaryContainer,

  // List/Tree foreground color for the selected item when the list/tree is
  // active. {default: #ffffff}
  activeSelectionForeground: tokens.onSecondaryContainer,

  // List/Tree icon foreground color for the selected item when the
  // list/tree is active. An active list/tree has keyboard focus, an
  // inactive does not. {default: null}
  activeSelectionIconForeground: undefined, // Done

  // List/Tree drag and drop background when moving items around using the
  // mouse. {default: #062f4a}
  dropBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // List/Tree background color for the focused item when the list/tree is
  // active. {default: null}
  focusBackground: undefined, // Done

  // List/Tree foreground color for the focused item when the list/tree is
  // active. An active list/tree has keyboard focus, an inactive does not.
  // {default: null}
  focusForeground: undefined, // Done

  // List/Tree outline color for the focused item when the list/tree is
  // active. An active list/tree has keyboard focus, an inactive does not.
  // {default: #007fd4}
  focusOutline: undefined, // Done

  // List/Tree outline color for the focused item when the list/tree is
  // active and selected. An active list/tree has keyboard focus, an
  // inactive does not. {default: null}
  focusAndSelectionOutline: undefined, // Done

  // List/Tree foreground color of the match highlights on actively focused
  // items when searching inside the list/tree. {default: #2aaaff}
  focusHighlightForeground: tokens.onSurface,

  // List/Tree foreground color of the match highlights when searching
  // inside the list/tree. {default: #2aaaff}
  highlightForeground: tokens.primary,

  // List/Tree background when hovering over items using the mouse.
  // {default: #2a2d2e}
  hoverBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // List/Tree foreground when hovering over items using the mouse.
  // {default: null}
  hoverForeground: undefined, // Done

  // List/Tree background color for the selected item when the
  // list/tree is inactive. {default: #37373d}
  inactiveSelectionBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // List/Tree foreground color for the selected item when the
  // list/tree is inactive. An active list/tree has keyboard focus,
  // an inactive does not. {default: null}
  inactiveSelectionForeground: undefined, // Done

  // List/Tree icon foreground color for the selected item when the
  // list/tree is inactive. An active list/tree has keyboard focus,
  // an inactive does not. {default: null}
  inactiveSelectionIconForeground: undefined, // Done

  // List background color for the focused item when the list is
  // inactive. An active list has keyboard focus, an inactive does
  // not. Currently only supported in lists. {default: null}
  inactiveFocusBackground: undefined, // Done

  // List/Tree outline color for the focused item when the list/tree
  // is inactive. An active list/tree has keyboard focus, an inactive
  // does not. {default: null}
  inactiveFocusOutline: undefined, // Done

  // List/Tree foreground color for invalid items, for example an
  // unresolved root in explorer. {default: #b89500}
  invalidItemForeground: tokens.warningFixed,

  // Foreground color of list items containing errors. {default: #f88070}
  errorForeground: tokens.errorFixed,

  // Foreground color of list items containing warnings. {default: #cca700}
  warningForeground: tokens.warningFixed,

  // Background color of the filtered matches in lists and trees.
  // {default: #ea5c0055}
  filterMatchBackground: tokens.goodContainer,

  // Border color of the filtered matches in lists and trees.
  // {default: null}
  filterMatchBorder: '#00000000', // Done

  // List/Tree foreground color for items that are deemphasized.
  // {default: #8c8c8c}
  deemphasizedForeground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),
};

const listFilterWidget = {
  // List/Tree Filter background color of typed text when searching inside
  // the list/tree.
  background: tokens.surfaceContainerHighest,

  // List/Tree Filter Widget's outline color of typed text when searching
  // inside the list/tree.
  outline: undefined, // TODO: listFilterWidget.outline

  // List/Tree Filter Widget's outline color when no match is found of typed
  // text when searching inside the list/tree.
  noMatchesOutline: undefined, // TODO: listFilterWidget.noMatchesOutline

  // Shadow color of the type filter widget in lists and tree.
  shadow: undefined, // Done
};

const tree = {
  // Tree Widget's stroke color for indent guides. {default: #585858}
  indentGuidesStroke: tokens.outlineVariant,

  // Tree stroke color for the indentation guides that are not active.
  // {default: #58585866}
  inactiveIndentGuidesStroke: chroma(tokens.outlineVariant).alpha(0.5).hex(),

  // Tree stroke color for the indentation guides. {default: #cccccc20}
  tableColumnsBorder: tokens.outlineVariant,

  // Background color for odd table rows. {default: #cccccc0a}
  tableOddRowsBackground: chroma(tokens.onSurfaceVariant).alpha(0.05).hex(),
};

export default {
  'list.activeSelectionBackground': list.activeSelectionBackground,
  'list.activeSelectionForeground': list.activeSelectionForeground,
  'list.activeSelectionIconForeground': list.activeSelectionIconForeground,
  'list.dropBackground': list.dropBackground,
  'list.focusBackground': list.focusBackground,
  'list.focusForeground': list.focusForeground,
  'list.focusHighlightForeground': list.focusHighlightForeground,
  'list.focusOutline': list.focusOutline,
  'list.focusAndSelectionOutline': list.focusAndSelectionOutline,
  'list.highlightForeground': list.highlightForeground,
  'list.hoverBackground': list.hoverBackground,
  'list.hoverForeground': list.hoverForeground,
  'list.inactiveSelectionBackground': list.inactiveSelectionBackground,
  'list.inactiveSelectionForeground': list.inactiveSelectionForeground,
  'list.inactiveSelectionIconForeground': list.inactiveSelectionIconForeground,
  'list.inactiveFocusBackground': list.inactiveFocusBackground,
  'list.inactiveFocusOutline': list.inactiveFocusOutline,
  'list.invalidItemForeground': list.invalidItemForeground,
  'list.errorForeground': list.errorForeground,
  'list.warningForeground': list.warningForeground,
  'listFilterWidget.background': listFilterWidget.background,
  'listFilterWidget.outline': listFilterWidget.outline,
  'listFilterWidget.noMatchesOutline': listFilterWidget.noMatchesOutline,
  'listFilterWidget.shadow': listFilterWidget.shadow,
  'list.filterMatchBackground': list.filterMatchBackground,
  'list.filterMatchBorder': list.filterMatchBorder,
  'list.deemphasizedForeground': list.deemphasizedForeground,
  'tree.indentGuidesStroke': tree.indentGuidesStroke,
  'tree.inactiveIndentGuidesStroke': tree.inactiveIndentGuidesStroke,
  'tree.tableColumnsBorder': tree.tableColumnsBorder,
  'tree.tableOddRowsBackground': tree.tableOddRowsBackground,
};
