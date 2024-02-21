import { tokens } from '../colors/interface.js';

const menubar = {
  // Foreground color of the selected menu item in the menubar.
  // {default: #333333}
  selectionForeground: tokens.onSecondaryContainer,

  // Background color of the selected menu item in the menubar.
  // {default: #b8b8b850}
  selectionBackground: tokens.secondaryContainer,

  // Border color of the selected menu item in the menubar. {default: null}
  selectionBorder: undefined, // Done
};

const menu = {
  // Foreground color of menu items. {default: #616161}
  foreground: tokens.onSurface,

  // Background color of menu items. {default: #ffffff}
  background: tokens.surfaceContainer,

  // Foreground color of the selected menu item in menus.
  // {default: #ffffff}
  selectionForeground: tokens.onSecondaryContainer,

  // Background color of the selected menu item in menus.
  // {default: #0060c0}
  selectionBackground: tokens.secondaryContainer,

  // Border color of the selected menu item in menus. {default: null}
  selectionBorder: undefined, // Done

  // Color of a separator menu item in menus. {default: #d4d4d4}
  separatorBackground: tokens.outlineVariant,

  // Border color of menus. {default: null}
  border: tokens.outlineVariant,
};

export default {
  'menubar.selectionForeground': menubar.selectionForeground,
  'menubar.selectionBackground': menubar.selectionBackground,
  'menubar.selectionBorder': menubar.selectionBorder,
  'menu.foreground': menu.foreground,
  'menu.background': menu.background,
  'menu.selectionForeground': menu.selectionForeground,
  'menu.selectionBackground': menu.selectionBackground,
  'menu.selectionBorder': menu.selectionBorder,
  'menu.separatorBackground': menu.separatorBackground,
  'menu.border': menu.border,
};
