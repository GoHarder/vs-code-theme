import chroma from 'chroma-js';
import { ansi, tokens } from '../colors.js';

const terminal = {
  // The background of the Integrated Terminal's viewport. {default: null}
  background: tokens.surface,

  // The color of the border that separates split panes within the
  // terminal. This defaults to panel.border. {default: #80808059}
  border: tokens.outlineVariant,

  // The default foreground color of the Integrated Terminal.
  // {default: #cccccc}
  foreground: tokens.onSurfaceVariant,

  // 'Black' ANSI color in the terminal. {default: #000000}
  ansiBlack: tokens.surface,

  // 'BrightBlack' ANSI color in the terminal. {default: #666666}
  // ansiBrightBlack: pallet.ansiBrightBlack,
  ansiBrightBlack: ansi.brightBlack.base,

  // 'Blue' ANSI color in the terminal. {default: #2472c8}
  // ansiBlue: pallet.ansiBlue,
  ansiBlue: ansi.blue.base,

  // 'BrightBlue' ANSI color in the terminal. {default: #3b8eea}
  // ansiBrightBlue: pallet.ansiBrightBlue,
  ansiBrightBlue: ansi.brightBlue.base,

  // 'Cyan' ANSI color in the terminal. {default: #11a8cd}
  // ansiCyan: pallet.ansiCyan,
  ansiCyan: ansi.cyan.base,

  // 'BrightCyan' ANSI color in the terminal. {default: #29b8db}
  // ansiBrightCyan: pallet.ansiBrightCyan,
  ansiBrightCyan: ansi.brightCyan.base,

  // 'Green' ANSI color in the terminal. {default: #0dbc79}
  // ansiGreen: pallet.ansiGreen,
  ansiGreen: ansi.green.base,

  // 'BrightGreen' ANSI color in the terminal. {default: #23d18b}
  // ansiBrightGreen: pallet.ansiBrightGreen,
  ansiBrightGreen: ansi.brightGreen.base,

  // 'Magenta' ANSI color in the terminal. {default: #bc3fbc}
  // ansiMagenta: pallet.ansiMagenta,
  ansiMagenta: ansi.magenta.base,

  // 'BrightMagenta' ANSI color in the terminal. {default: #d670d6}
  // ansiBrightMagenta: pallet.ansiBrightMagenta,
  ansiBrightMagenta: ansi.brightMagenta.base,

  // 'Red' ANSI color in the terminal. {default: #cd3131}
  // ansiRed: pallet.ansiRed,
  ansiRed: ansi.red.base,

  // 'BrightRed' ANSI color in the terminal. {default: #f14c4c}
  // ansiBrightRed: pallet.ansiBrightRed,
  ansiBrightRed: ansi.brightRed.base,

  // 'Yellow' ANSI color in the terminal. {default: #e5e510}
  // ansiYellow: pallet.ansiYellow,
  ansiYellow: ansi.yellow.base,

  // 'BrightYellow' ANSI color in the terminal. {default: #f5f543}
  // ansiBrightYellow: pallet.ansiBrightYellow,
  ansiBrightYellow: ansi.brightYellow.base,

  // 'White' ANSI color in the terminal. {default: #e5e5e5}
  // ansiWhite: pallet.ansiWhite,
  ansiWhite: ansi.white.base,

  // 'BrightWhite' ANSI color in the terminal. {default: #e5e5e5}
  // ansiBrightWhite: pallet.ansiBrightWhite,
  ansiBrightWhite: ansi.brightWhite.base,

  // The selection background color of the terminal. {default: #264f78}
  selectionBackground: tokens.infoContainer,

  // The selection foreground color of the terminal. When this is null the
  // selection foreground will be retained and have the minimum contrast
  // ratio feature applied. {default: null}
  selectionForeground: tokens.onInfoContainer,

  // The selection background color of the terminal when it does not have
  // focus. {default: #264f7880}
  inactiveSelectionBackground: undefined, // Done

  // Color of the current search match in the terminal. The color must not
  // be opaque so as not to hide underlying terminal content.
  // {default: #515c6a}
  findMatchBackground: '#00000000',

  // Border color of the current search match in the terminal.
  // {default: null}
  findMatchBorder: chroma(tokens.onSurface).alpha(0.6).hex(),

  // Color of the other search matches in the terminal. The color must not
  // be opaque so as not to hide underlying terminal content.
  // {default: #ea5c0055
  findMatchHighlightBackground: chroma(tokens.good).alpha(0.15).hex(),

  // Border color of the other search matches in the terminal.
  // default: null}
  findMatchHighlightBorder: chroma(tokens.good).alpha(0.6).hex(),

  // Color of the highlight when hovering a link in the terminal.
  // {default: #264f7820}
  hoverHighlightBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // The background color when dragging on top of terminals. The color
  // should have transparency so that the terminal contents can still shine
  // through. {default: #53595d80}
  dropBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // Border on the side of the terminal tab in the panel. This defaults to
  // tab.activeBorder. {default: null}
  tab: { activeBorder: tokens.primary },
};

const terminalCursor = {
  // The background color of the terminal cursor. Allows customizing the
  // color of a character overlapped by a block cursor. {default: null}
  background: undefined, // Done

  // The foreground color of the terminal cursor. {default: null}
  foreground: tokens.tertiary, // Done
};

const terminalCommandDecoration = {
  // The default terminal command decoration background color.
  // {default: #ffffff40}
  defaultBackground: chroma(tokens.onSurface).alpha(0.2).hex(),

  // The terminal command decoration background color for successful
  // commands. {default: #1b81a8}
  successBackground: tokens.good,

  // The terminal command decoration background color for error commands.
  // {default: #f14c4c}
  errorBackground: undefined,
};

const terminalOverviewRuler = {
  // The overview ruler cursor color. {default: #a0a0a0cc}
  cursorForeground: undefined, // Done

  // Overview ruler marker color for find matches in the terminal.
  // {default: #d186167e}
  findMatchForeground: tokens.goodContainer,
};

export default {
  'terminal.background': terminal.background,
  'terminal.border': terminal.border,
  'terminal.foreground': terminal.foreground,
  'terminal.ansiBlack': terminal.ansiBlack,
  'terminal.ansiBlue': terminal.ansiBlue,
  'terminal.ansiBrightBlack': terminal.ansiBrightBlack,
  'terminal.ansiBrightBlue': terminal.ansiBrightBlue,
  'terminal.ansiBrightCyan': terminal.ansiBrightCyan,
  'terminal.ansiBrightGreen': terminal.ansiBrightGreen,
  'terminal.ansiBrightMagenta': terminal.ansiBrightMagenta,
  'terminal.ansiBrightRed': terminal.ansiBrightRed,
  'terminal.ansiBrightWhite': terminal.ansiBrightWhite,
  'terminal.ansiBrightYellow': terminal.ansiBrightYellow,
  'terminal.ansiCyan': terminal.ansiCyan,
  'terminal.ansiGreen': terminal.ansiGreen,
  'terminal.ansiMagenta': terminal.ansiMagenta,
  'terminal.ansiRed': terminal.ansiRed,
  'terminal.ansiWhite': terminal.ansiWhite,
  'terminal.ansiYellow': terminal.ansiYellow,
  'terminal.selectionBackground': terminal.selectionBackground,
  'terminal.selectionForeground': terminal.selectionForeground,
  'terminal.inactiveSelectionBackground': terminal.inactiveSelectionBackground,
  'terminal.findMatchBackground': terminal.findMatchBackground,
  'terminal.findMatchBorder': terminal.findMatchBorder,
  'terminal.findMatchHighlightBackground': terminal.findMatchHighlightBackground,
  'terminal.findMatchHighlightBorder': terminal.findMatchHighlightBorder,
  'terminal.hoverHighlightBackground': terminal.hoverHighlightBackground,
  'terminalCursor.background': terminalCursor.background,
  'terminalCursor.foreground': terminalCursor.foreground,
  'terminal.dropBackground': terminal.dropBackground,
  'terminal.tab.activeBorder': terminal.tab.activeBorder,
  'terminalCommandDecoration.defaultBackground': terminalCommandDecoration.defaultBackground,
  'terminalCommandDecoration.successBackground': terminalCommandDecoration.successBackground,
  'terminalCommandDecoration.errorBackground': terminalCommandDecoration.errorBackground,
  'terminalOverviewRuler.cursorForeground': terminalOverviewRuler.cursorForeground,
  'terminalOverviewRuler.findMatchForeground': terminalOverviewRuler.findMatchForeground,
};
