// --------------------------------------------
// Breadcrumbs colors
// The theme colors for breadcrumbs navigation.
// --------------------------------------------

import { tokens } from '../colors/interface.js';

const breadcrumb = {
  // Color of breadcrumb items. {default: #cccccccc}
  foreground: undefined, // Done

  // Background color of breadcrumb items. {default: #1e1e1e}
  background: undefined, // Done

  // Color of focused breadcrumb items. {default: #e0e0e0}
  focusForeground: tokens.onSurface,

  // Color of selected breadcrumb items. {default: #e0e0e0}
  activeSelectionForeground: tokens.primary,
};

const breadcrumbPicker = {
  // Background color of breadcrumb item picker. {default: #252526}
  background: tokens.surfaceContainer,
};

export default {
  'breadcrumb.foreground': breadcrumb.foreground,
  'breadcrumb.background': breadcrumb.background,
  'breadcrumb.focusForeground': breadcrumb.focusForeground,
  'breadcrumb.activeSelectionForeground': breadcrumb.activeSelectionForeground,
  'breadcrumbPicker.background': breadcrumbPicker.background,
};
