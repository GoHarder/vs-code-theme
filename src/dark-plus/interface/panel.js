// ------------------------------------------------------------------------
// Panel Colors
// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
// ------------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const panel = {
  // Panel background color. {default: #1e1e1e}
  background: tokens.surfaceContainer,

  // Panel border color to separate the panel from the editor.
  // {default: #80808059}
  border: tokens.outlineVariant,

  // Drag and drop feedback color for the panel titles. Panels are shown
  // below the editor area and contain views like output and integrated
  // terminal.  {default: #e7e7e7}
  dropBorder: tokens.onSurfaceVariant,
};

const panelTitle = {
  // Border color for the active panel title. {default: #e7e7e7}
  activeBorder: tokens.primary,

  // Title color for the active panel. {default: #e7e7e7}
  activeForeground: tokens.onSurface,

  // Title color for the inactive panel. {default: #e7e7e799}
  inactiveForeground: tokens.onSurfaceVariant,
};

const panelInput = {
  // Input box border for inputs in the panel. {default: null}
  border: undefined,
};

const panelSection = {
  // Panel section border color used when multiple views are stacked
  // horizontally in the panel. Panels are shown below the editor area and
  // contain views like output and integrated terminal.
  // {default: #80808059}
  border: tokens.outlineVariant,

  // Drag and drop feedback color for the panel sections. The color should
  // have transparency so that the panel sections can still shine through.
  // Panels are shown below the editor area and contain views like output
  // and integrated terminal. {default: #53595d80}
  dropBackground: chroma(tokens.onSurface).alpha(0.1).hex(),
};

const panelSectionHeader = {
  // Panel section header background color. Panels are shown below the
  // editor area and contain views like output and integrated terminal.
  // {default: #80808033}
  background: tokens.surfaceContainerHigh,

  // Panel section header foreground color. Panels are shown below the
  // editor area and contain views like output and integrated terminal.
  // {default: null}
  foreground: tokens.onSurface,

  // Panel section header border color used when multiple views are stacked
  // vertically in the panel. Panels are shown below the editor area and
  // contain views like output and integrated terminal. {default: null}
  border: tokens.outlineVariant,
};

export default {
  'panel.background': panel.background,
  'panel.border': panel.border,
  'panel.dropBorder': panel.dropBorder,
  'panelTitle.activeBorder': panelTitle.activeBorder,
  'panelTitle.activeForeground': panelTitle.activeForeground,
  'panelTitle.inactiveForeground': panelTitle.inactiveForeground,
  'panelInput.border': panelInput.border,
  'panelSection.border': panelSection.border,
  'panelSection.dropBackground': panelSection.dropBackground,
  'panelSectionHeader.background': panelSectionHeader.background,
  'panelSectionHeader.foreground': panelSectionHeader.foreground,
  'panelSectionHeader.border': panelSectionHeader.border,
};
