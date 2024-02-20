import chroma from 'chroma-js';

import { readJsonFile } from '../../../lib/file-system.js';

const file = await readJsonFile('./src/colors/gogh.json');

const ansi = {
  black: file.terminal.black,
  brightBlack: file.terminal.brightBlack,
  red: file.terminal.red,
  brightRed: file.terminal.brightRed,
  green: file.terminal.green,
  brightGreen: file.terminal.brightGreen,
  yellow: file.terminal.yellow,
  brightYellow: file.terminal.brightYellow,
  blue: file.terminal.blue,
  brightBlue: file.terminal.brightBlue,
  magenta: file.terminal.magenta,
  brightMagenta: file.terminal.brightMagenta,
  cyan: file.terminal.cyan,
  brightCyan: file.terminal.brightCyan,
  white: file.terminal.white,
  brightWhite: file.terminal.brightWhite,
  orange: file.terminal.orange,
  brightOrange: file.terminal.brightOrange,
  tan: file.terminal.tan,
  teal: file.terminal.teal,
  brightTeal: file.terminal.brightTeal,
};

export const terminal = {
  // Black
  blackBase: ansi.black.base,
  black: ansi.black._80,
  onBlack: ansi.black._20,
  blackContainer: ansi.black._30,
  onBlackContainer: ansi.black._90,
  // Bright Black
  brightBlackBase: ansi.brightBlack.base,
  brightBlack: ansi.brightBlack._80,
  onBrightBlack: ansi.brightBlack._20,
  brightBlackContainer: ansi.brightBlack._30,
  onBrightBlackContainer: ansi.brightBlack._90,
  // Red
  redBase: ansi.red.base,
  red: ansi.red._80,
  onRed: ansi.red._20,
  redContainer: ansi.red._30,
  onRedContainer: ansi.red._90,
  // Bright Red
  brightRedBase: ansi.brightRed.base,
  brightRed: ansi.brightRed._80,
  onBrightRed: ansi.brightRed._20,
  brightRedContainer: ansi.brightRed._30,
  onBrightRedContainer: ansi.brightRed._90,
  // Green
  greenBase: ansi.green.base,
  green: ansi.green._80,
  onGreen: ansi.green._20,
  greenContainer: ansi.green._30,
  onGreenContainer: ansi.green._90,
  // Bright Green
  brightGreenBase: ansi.brightGreen.base,
  brightGreen: ansi.brightGreen._80,
  onBrightGreen: ansi.brightGreen._20,
  brightGreenContainer: ansi.brightGreen._30,
  onBrightGreenContainer: ansi.brightGreen._90,
  // Yellow
  yellowBase: ansi.yellow.base,
  yellow: ansi.yellow._80,
  onYellow: ansi.yellow._20,
  yellowContainer: ansi.yellow._30,
  onYellowContainer: ansi.yellow._90,
  // Bright Yellow
  brightYellowBase: ansi.brightYellow.base,
  brightYellow: ansi.brightYellow._80,
  onBrightYellow: ansi.brightYellow._20,
  brightYellowContainer: ansi.brightYellow._30,
  onBrightYellowContainer: ansi.brightYellow._90,
  // Blue
  blueBase: ansi.blue.base,
  blue: ansi.blue._80,
  onBlue: ansi.blue._20,
  blueContainer: ansi.blue._30,
  onBlueContainer: ansi.blue._90,
  // Bright Blue
  brightBlueBase: ansi.brightBlue.base,
  brightBlue: ansi.brightBlue._80,
  onBrightBlue: ansi.brightBlue._20,
  brightBlueContainer: ansi.brightBlue._30,
  onBrightBlueContainer: ansi.brightBlue._90,
  // Magenta
  magentaBase: ansi.magenta.base,
  magenta: ansi.magenta._80,
  onMagenta: ansi.magenta._20,
  magentaContainer: ansi.magenta._30,
  onMagentaContainer: ansi.magenta._90,
  // Bright Magenta
  brightMagentaBase: ansi.brightMagenta.base,
  brightMagenta: ansi.brightMagenta._80,
  onBrightMagenta: ansi.brightMagenta._20,
  brightMagentaContainer: ansi.brightMagenta._30,
  onBrightMagentaContainer: ansi.brightMagenta._90,
  // Cyan
  cyanBase: ansi.cyan.base,
  cyan: ansi.cyan._80,
  onCyan: ansi.cyan._20,
  cyanContainer: ansi.cyan._30,
  onCyanContainer: ansi.cyan._90,
  // Bright Cyan
  brightCyanBase: ansi.brightCyan.base,
  brightCyan: ansi.brightCyan._80,
  onBrightCyan: ansi.brightCyan._20,
  brightCyanContainer: ansi.brightCyan._30,
  onBrightCyanContainer: ansi.brightCyan._90,
  // White
  whiteBase: ansi.white.base,
  white: ansi.white._80,
  onWhite: ansi.white._20,
  whiteContainer: ansi.white._30,
  onWhiteContainer: ansi.white._90,
  // Bright White
  brightWhiteBase: ansi.brightWhite.base,
  brightWhite: ansi.brightWhite._80,
  onBrightWhite: ansi.brightWhite._20,
  brightWhiteContainer: ansi.brightWhite._30,
  onBrightWhiteContainer: ansi.brightWhite._90,
};

export const syntax = {
  // #808080 #8392a4
  tag: ansi.black._60,
  // #d4d4d4 #d4e4f8
  keyword_operator: ansi.black._90,
  //#c8c8c8 #c3c7c8
  label: ansi.brightWhite._80,
  // #d16969 #d0493a
  regex: ansi.red._50,
  // #ce9178 #d9c4a1
  string: ansi.tan._80,
  // #d7ba7d #f9bd1e
  css_tag: ansi.yellow._80,
  // #dcdcaa #ffdf9f
  function: ansi.yellow._90,
  // #6a9955 #8d9193
  comment: ansi.brightWhite._60,
  // #b5cea8 #c3ffcd
  constant_numeric: ansi.brightGreen._95,
  // #4ec9b0 #4dbcb2
  class: ansi.brightTeal._70,
  // #000080 #001127
  header: ansi.blue._5,
  // #569cd6 #4793eb
  constant_language: ansi.blue._60,
  // #4fc1ff #56b3f7
  variable_other: ansi.blue._70,
  // #9cdcfe
  variable: ansi.blue._80,
  // #c586c0 #d490f8
  keyword: ansi.magenta._70,
  // #b267e6 #b875db
  debug_token: ansi.magenta._60,
};

const primary = file.interface.primary;
const secondary = file.interface.secondary;
const tertiary = file.interface.tertiary;
const error = file.interface.error;
const neutral = file.interface.neutral;
const neutralVariant = file.interface.neutralVariant;

const info = ansi.blue;
const good = ansi.green;
const warning = ansi.yellow;

const calcStateLayer = (color1, color2, opacity) => {
  const scale = chroma.scale([color1, color2]);
  return scale(opacity).hex();
};

export const tokens = {
  // Primary
  primary: primary._40,
  onPrimary: primary._100,
  primaryContainer: primary._90,
  onPrimaryContainer: primary._10,
  // Custom Primary
  primaryHover: calcStateLayer(primary._40, primary._100, 0.08),
  // Secondary
  secondary: secondary._40,
  onSecondary: secondary._100,
  secondaryContainer: secondary._90,
  onSecondaryContainer: secondary._10,
  // Custom Secondary
  secondaryContainerHover: calcStateLayer(secondary._90, secondary._10, 0.08),
  // Tertiary
  tertiary: tertiary._40,
  onTertiary: tertiary._100,
  tertiaryContainer: tertiary._90,
  onTertiaryContainer: tertiary._10,
  // Error
  error: error._40,
  onError: error._100,
  errorContainer: error._90,
  onErrorContainer: error._10,
  // Surface
  surfaceDim: neutral._87,
  surface: neutral._98,
  surfaceBright: neutral._98,
  // Surface Container
  surfaceContainerLowest: neutral._100,
  surfaceContainerLow: neutral._96,
  surfaceContainer: neutral._94,
  surfaceContainerHigh: neutral._92,
  surfaceContainerHighest: neutral._90,
  // On Surface
  onSurface: neutral._10,
  onSurfaceVariant: neutralVariant._30,
  // Outline
  outline: neutralVariant._50,
  outlineVariant: neutralVariant._80,
  // Inverse
  inverseSurface: neutral._20,
  inverseOnSurface: neutral._95,
  inversePrimary: primary._80,
  // Background
  background: neutral._98,
  onBackground: neutral._10,
  // Surface Tint
  surfaceTint: primary._40,
  surfaceVariant: neutralVariant._90,
  // Fixed-Primary
  primaryFixed: primary._90,
  primaryFixedDim: primary._80,
  onPrimaryFixed: primary._10,
  onPrimaryFixedVariant: primary._30,
  // Fixed-Secondary
  secondaryFixed: secondary._90,
  secondaryFixedDim: secondary._80,
  onSecondaryFixed: secondary._10,
  onSecondaryFixedVariant: secondary._30,
  // Fixed-Tertiary
  tertiaryFixed: tertiary._90,
  tertiaryFixedDim: tertiary._80,
  onTertiaryFixed: tertiary._10,
  onTertiaryFixedVariant: tertiary._30,
  // Shadows
  scrim: neutral._0,
  shadow: neutral._0,

  // Custom
  errorFixed: error._40,
  warningFixed: warning._60,

  good: good._40,
  onGood: good._100,
  goodContainer: good._90,
  onGoodContainer: good._10,

  warning: warning._40,
  onWarning: warning._100,
  warningContainer: warning._90,
  onWarningContainer: warning._10,

  info: info._40,
  onInfo: info._100,
  infoContainer: info._90,
  onInfoContainer: info._10,
};

/** @type {Intl.DateTimeFormatOptions} */
const dateSettings = {
  timeStyle: 'medium',
};

const internal = new Intl.DateTimeFormat('en-us', dateSettings);

console.log(internal.format(Date.now()));
