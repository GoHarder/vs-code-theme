// ---------------------------------------------------------
// Side Bar
// The Side Bar contains views like the Explorer and Search.
// ---------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const sideBar = {
  // Side Bar background color. {default: #252526}
  background: tokens.surfaceContainer,

  // Side Bar foreground color. The Side Bar is the container for views
  // like Explorer and Search. {default: null}
  foreground: tokens.onSurfaceVariant, // Done

  // Side Bar border color on the side separating the editor. {default: null}
  border: tokens.outlineVariant, // Done

  // Drag and drop feedback color for the side bar sections. The color
  // should have transparency so that the side bar sections can still
  // shine through. {default: #53595d80}
  dropBackground: chroma(tokens.onSurface).alpha(0.1).hex(),
};

const sideBarTitle = {
  // Side Bar title foreground color. {default: null}
  foreground: tokens.onSurface,
};

const sideBarSectionHeader = {
  // Side Bar section header background color. {default: #80808033}
  background: tokens.surfaceContainer,

  // Side Bar section header foreground color. {default: null}
  foreground: undefined,

  // Side bar section header border color. {default: null}
  border: tokens.outlineVariant,
};

export default {
  'sideBar.background': sideBar.background,
  'sideBar.foreground': sideBar.foreground,
  'sideBar.border': sideBar.border,
  'sideBar.dropBackground': sideBar.dropBackground,
  'sideBarTitle.foreground': sideBarTitle.foreground,
  'sideBarSectionHeader.background': sideBarSectionHeader.background,
  'sideBarSectionHeader.foreground': sideBarSectionHeader.foreground,
  'sideBarSectionHeader.border': sideBarSectionHeader.border,
};
