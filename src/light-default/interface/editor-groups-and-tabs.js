// ------------------------------------------------------------------------
// Editor Groups & Tabs
// Editor Groups are the containers of editors. There can be many editor
// groups. A Tab is the container of an editor. Multiple Tabs can be opened
// in one editor group.
// ------------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const editorGroup = {
  // Color to separate multiple editor groups from each other.
  // {default: #e7e7e7}
  border: tokens.outlineVariant,

  // Background color when dragging editors around. {default: #2677cb2e}
  dropBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Background color of an empty editor group. {default: null}
  emptyBackground: tokens.surfaceContainerLow,

  // Border color of an empty editor group that is focused. {default: null}
  focusedEmptyBorder: undefined, // Done

  // Foreground color of text shown over editors when dragging files. This
  // text informs the user that they can hold shift to drop into the editor.
  // {default: #616161}
  dropIntoPromptForeground: undefined, // Done

  // Background color of text shown over editors when dragging files. This
  // text informs the user that they can hold shift to drop into the editor.
  // {default: #f3f3f3}
  dropIntoPromptBackground: tokens.surface,

  // Border color of text shown over editors when dragging files. This text
  // informs the user that they can hold shift to drop into the editor.
  // {default: null}
  dropIntoPromptBorder: tokens.surface,
};

const editorGroupHeader = {
  // Background color of the editor group title header when Tabs are
  // disabled {default: #ffffff}
  // NOTE: set "workbench.editor.showTabs": false.
  noTabsBackground: tokens.surface,

  // Background color of the Tabs container. {default: #f3f3f3}
  tabsBackground: tokens.surfaceContainerLow,

  // Border color below the editor tabs control when tabs are enabled.
  // {default: null}
  tabsBorder: tokens.surfaceVariant,

  // Border color between editor group header and editor (below breadcrumbs
  // if enabled). {default: null}
  border: tokens.surfaceVariant,
};

const tab = {
  // Active Tab background color in an active group. {default: #ffffff}
  activeBackground: undefined, // Done

  // Active Tab foreground color in an active group. {default: #333333}
  activeForeground: tokens.onSurface,

  // Bottom border for the active tab. {default: null}
  activeBorder: tokens.surface,

  // Top border for the active tab. {default: null}
  activeBorderTop: tokens.primary,

  // Border on the top of modified (dirty) active tabs in an active group.
  // {default: #33aaee}
  activeModifiedBorder: tokens.secondary,

  // Inactive Tab background color. {default: #ececec}
  inactiveBackground: tokens.surfaceContainerLow,

  // Inactive Tab foreground color in an active group. {default: #333333b3}
  inactiveForeground: chroma(tokens.onSurface).alpha(0.7).hex(),

  // Border on the top of modified (dirty) inactive tabs in an active
  // group. {default: #33aaee80}
  inactiveModifiedBorder: undefined, // Done

  // Active Tab background color in an inactive editor group.
  // {default: #ffffff}
  unfocusedActiveBackground: undefined, // Done

  // Active tab foreground color in an inactive editor group.
  // {default: #333333b3}
  unfocusedActiveForeground: tokens.onSurfaceVariant,

  // Bottom border for the active tab in an inactive editor group.
  // {default: null}
  unfocusedActiveBorder: tokens.surface,

  // Bottom border for the active tab in an inactive editor group.
  // {default: null}
  unfocusedActiveBorderTop: undefined, // Done

  // Border on the top of modified (dirty) active tabs in an unfocused
  // group. {default: #33aaeeb3}
  unfocusedActiveModifiedBorder: undefined, // Done

  // Inactive Tab background color in an unfocused group.
  // {default: #ececec}
  unfocusedInactiveBackground: undefined, // Done

  // Inactive tab foreground color in an inactive editor group.
  // {default: #33333359}
  unfocusedInactiveForeground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),

  // Border on the top of modified (dirty) inactive tabs in an unfocused
  // group. {default: #33aaee40}
  unfocusedInactiveModifiedBorder: undefined,

  // Border to separate Tabs from each other. {default: #f3f3f3}
  border: tokens.surfaceVariant,

  // Border on the right of the last pinned editor to separate from unpinned
  // editors. {default: #a9a9a9}
  lastPinnedBorder: tokens.outline,

  // Border to highlight tabs when hovering. {default: null}
  hoverBorder: undefined, // Done

  // Border to highlight tabs when hovering. {default: null}
  hoverBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Tab foreground color when hovering. {default: null}
  hoverForeground: undefined, // Done

  // Border to highlight tabs in an unfocused group when hovering.
  // {default: null}
  unfocusedHoverBorder: undefined, // Done

  // Tab background color in an unfocused group when hovering.
  // {default: null}
  unfocusedHoverBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Tab foreground color in an unfocused group when hovering.
  // {default: null}
  unfocusedHoverForeground: undefined, // Done
};

const editorPane = {
  // Background color of the editor pane visible on the left and right side
  // of the centered editor layout. {default: #ffffff}
  background: tokens.surfaceContainerLow,
};

const sideBySideEditor = {
  // Color to separate two editors from each other when shown side by
  // side in an editor group from top to bottom. {default: #e7e7e7}
  horizontalBorder: tokens.outlineVariant,

  // Color to separate two editors from each other when shown side by
  // side in an editor group from left to right. {default: #e7e7e7}
  verticalBorder: tokens.outlineVariant,
};

export default {
  'editorGroup.border': editorGroup.border,
  'editorGroup.dropBackground': editorGroup.dropBackground,
  'editorGroupHeader.noTabsBackground': editorGroupHeader.noTabsBackground,
  'editorGroupHeader.tabsBackground': editorGroupHeader.tabsBackground,
  'editorGroupHeader.tabsBorder': editorGroupHeader.tabsBorder,
  'editorGroupHeader.border': editorGroupHeader.border,
  'editorGroup.emptyBackground': editorGroup.emptyBackground,
  'editorGroup.focusedEmptyBorder': editorGroup.focusedEmptyBorder,
  'editorGroup.dropIntoPromptForeground': editorGroup.dropIntoPromptForeground,
  'editorGroup.dropIntoPromptBackground': editorGroup.dropIntoPromptBackground,
  'editorGroup.dropIntoPromptBorder': editorGroup.dropIntoPromptBorder,
  'tab.activeBackground': tab.activeBackground,
  'tab.unfocusedActiveBackground': tab.unfocusedActiveBackground,
  'tab.activeForeground': tab.activeForeground,
  'tab.border': tab.border,
  'tab.activeBorder': tab.activeBorder,
  'tab.unfocusedActiveBorder': tab.unfocusedActiveBorder,
  'tab.activeBorderTop': tab.activeBorderTop,
  'tab.unfocusedActiveBorderTop': tab.unfocusedActiveBorderTop,
  'tab.lastPinnedBorder': tab.lastPinnedBorder,
  'tab.inactiveBackground': tab.inactiveBackground,
  'tab.unfocusedInactiveBackground': tab.unfocusedInactiveBackground,
  'tab.inactiveForeground': tab.inactiveForeground,
  'tab.unfocusedActiveForeground': tab.unfocusedActiveForeground,
  'tab.unfocusedInactiveForeground': tab.unfocusedInactiveForeground,
  'tab.hoverBackground': tab.hoverBackground,
  'tab.unfocusedHoverBackground': tab.unfocusedHoverBackground,
  'tab.hoverForeground': tab.hoverForeground,
  'tab.unfocusedHoverForeground': tab.unfocusedHoverForeground,
  'tab.hoverBorder': tab.hoverBorder,
  'tab.unfocusedHoverBorder': tab.unfocusedHoverBorder,
  'tab.activeModifiedBorder': tab.activeModifiedBorder,
  'tab.inactiveModifiedBorder': tab.inactiveModifiedBorder,
  'tab.unfocusedActiveModifiedBorder': tab.unfocusedActiveModifiedBorder,
  'tab.unfocusedInactiveModifiedBorder': tab.unfocusedInactiveModifiedBorder,
  'editorPane.background': editorPane.background,
  'sideBySideEditor.horizontalBorder': sideBySideEditor.horizontalBorder,
  'sideBySideEditor.verticalBorder': sideBySideEditor.verticalBorder,
};
