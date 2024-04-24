import chroma from 'chroma-js';
import { readJsonFile } from '../../lib/file-system.js';

/**
 * @typedef {import('../../schemas/color-tokens.js').ColorPalletSchema} ColorPallet
 */

const settings = await readJsonFile('./src/dark-default/settings.json');

/** @type {ColorPallet} */
const file = await readJsonFile(`./src/colors/${settings.colorFile}`);

export const ansi = {
  black: file.ansi.black,
  brightBlack: file.ansi.brightBlack,
  red: file.ansi.red,
  brightRed: file.ansi.brightRed,
  green: file.ansi.green,
  brightGreen: file.ansi.brightGreen,
  yellow: file.ansi.yellow,
  brightYellow: file.ansi.brightYellow,
  blue: file.ansi.blue,
  brightBlue: file.ansi.brightBlue,
  magenta: file.ansi.magenta,
  brightMagenta: file.ansi.brightMagenta,
  cyan: file.ansi.cyan,
  brightCyan: file.ansi.brightCyan,
  white: file.ansi.white,
  brightWhite: file.ansi.brightWhite,
  orange: file.ansi.orange,
  brightOrange: file.ansi.brightOrange,
};

export const ansiTokens = {
  // Black
  black: ansi.black._80,
  onBlack: ansi.black._20,
  blackContainer: ansi.black._30,
  onBlackContainer: ansi.black._90,
  // Red
  red: ansi.red._80,
  onRed: ansi.red._20,
  redContainer: ansi.red._30,
  onRedContainer: ansi.red._90,
  // Green
  green: ansi.green._80,
  onGreen: ansi.green._20,
  greenContainer: ansi.green._30,
  onGreenContainer: ansi.green._90,
  // Yellow
  yellow: ansi.yellow._80,
  onYellow: ansi.yellow._20,
  yellowContainer: ansi.yellow._30,
  onYellowContainer: ansi.yellow._90,
  // Blue
  blue: ansi.blue._80,
  onBlue: ansi.blue._20,
  blueContainer: ansi.blue._30,
  onBlueContainer: ansi.blue._90,
  // Magenta
  magenta: ansi.magenta._80,
  onMagenta: ansi.magenta._20,
  magentaContainer: ansi.magenta._30,
  onMagentaContainer: ansi.magenta._90,
  // Cyan
  cyan: ansi.cyan._80,
  onCyan: ansi.cyan._20,
  cyanContainer: ansi.cyan._30,
  onCyanContainer: ansi.cyan._90,
  // White
  white: ansi.white._80,
  onWhite: ansi.white._20,
  whiteContainer: ansi.white._30,
  onWhiteContainer: ansi.white._90,
  // Bright Black
  brightBlack: ansi.brightBlack._80,
  onBrightBlack: ansi.brightBlack._20,
  brightBlackContainer: ansi.brightBlack._30,
  onBrightBlackContainer: ansi.brightBlack._90,
  // Bright Red
  brightRed: ansi.brightRed._80,
  onBrightRed: ansi.brightRed._20,
  brightRedContainer: ansi.brightRed._30,
  onBrightRedContainer: ansi.brightRed._90,
  // Bright Green
  brightGreen: ansi.brightGreen._80,
  onBrightGreen: ansi.brightGreen._20,
  brightGreenContainer: ansi.brightGreen._30,
  onBrightGreenContainer: ansi.brightGreen._90,
  // Bright Yellow
  brightYellow: ansi.brightYellow._80,
  onBrightYellow: ansi.brightYellow._20,
  brightYellowContainer: ansi.brightYellow._30,
  onBrightYellowContainer: ansi.brightYellow._90,
  // Bright Blue
  brightBlue: ansi.brightBlue._80,
  onBrightBlue: ansi.brightBlue._20,
  brightBlueContainer: ansi.brightBlue._30,
  onBrightBlueContainer: ansi.brightBlue._90,
  // Bright Magenta
  brightMagenta: ansi.brightMagenta._80,
  onBrightMagenta: ansi.brightMagenta._20,
  brightMagentaContainer: ansi.brightMagenta._30,
  onBrightMagentaContainer: ansi.brightMagenta._90,
  // Bright Cyan
  brightCyan: ansi.brightCyan._80,
  onBrightCyan: ansi.brightCyan._20,
  brightCyanContainer: ansi.brightCyan._30,
  onBrightCyanContainer: ansi.brightCyan._90,
  // Bright White
  brightWhite: ansi.brightWhite._80,
  onBrightWhite: ansi.brightWhite._20,
  brightWhiteContainer: ansi.brightWhite._30,
  onBrightWhiteContainer: ansi.brightWhite._90,
};

const { primary, secondary, tertiary, error, neutral, neutralVariant } = file.interface;

const calcStateLayer = (color1, color2, opacity) => {
  const scale = chroma.scale([color1, color2]);
  return scale(opacity).hex();
};

const defaultTokens = {
  // Primary
  primary: primary._80,
  onPrimary: primary._20,
  primaryContainer: primary._30,
  onPrimaryContainer: primary._90,
  // Secondary
  secondary: secondary._80,
  onSecondary: secondary._20,
  secondaryContainer: secondary._30,
  onSecondaryContainer: secondary._90,
  // Tertiary
  tertiary: tertiary._80,
  onTertiary: tertiary._20,
  tertiaryContainer: tertiary._30,
  onTertiaryContainer: tertiary._90,
  // Error
  error: error._80,
  onError: error._20,
  errorContainer: error._30,
  onErrorContainer: error._90,
  // Surface
  surfaceDim: neutral._6,
  surface: neutral._6,
  surfaceBright: neutral._24,
  // Surface Container
  surfaceContainerLowest: neutral._4,
  surfaceContainerLow: neutral._10,
  surfaceContainer: neutral._12,
  surfaceContainerHigh: neutral._17,
  surfaceContainerHighest: neutral._22,
  // On Surface
  onSurface: neutral._90,
  onSurfaceVariant: neutralVariant._80,
  // Outline
  outline: neutralVariant._60,
  outlineVariant: neutralVariant._30,
  // Inverse
  inverseSurface: neutral._90,
  inverseOnSurface: neutral._20,
  inversePrimary: primary._40,
  // Background
  background: neutral._6,
  onBackground: neutral._90,
  // Surface Tint
  surfaceTint: primary._80,
  surfaceVariant: neutralVariant._30,
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
};

const customTokens = {
  // Primary
  primaryHover: calcStateLayer(defaultTokens.primary, defaultTokens.onPrimary, 0.08),
  // Secondary
  secondaryContainerHover: calcStateLayer(defaultTokens.secondaryContainer, defaultTokens.onSecondaryContainer, 0.08),
  // Error
  errorFixed: error._60,

  // Good
  good: ansi.green._80,
  onGood: ansi.green._20,
  goodContainer: ansi.green._30,
  onGoodContainer: ansi.green._90,
  // Warning
  warning: ansi.yellow._80,
  onWarning: ansi.yellow._20,
  warningContainer: ansi.yellow._30,
  onWarningContainer: ansi.yellow._90,
  // Info
  info: ansi.blue._80,
  onInfo: ansi.blue._20,
  infoContainer: ansi.blue._30,
  onInfoContainer: ansi.blue._90,
  // altError
  altError: ansi.red._80,
  onAltError: ansi.red._20,
  altErrorContainer: ansi.red._30,
  onAltErrorContainer: ansi.red._90,

  altErrorFixed: ansi.red._60,

  // Link
  link: ansi.cyan._80,
  onLink: ansi.cyan._20,
  linkContainer: ansi.cyan._30,
  onLinkContainer: ansi.cyan._90,

  linkHover: calcStateLayer(ansi.cyan._80, ansi.cyan._20, 0.08),
};

export const tokens = { ...defaultTokens, ...customTokens };

export const editor = {
  foreground0: chroma(tokens.onSurfaceVariant).alpha(0.6).hex(),
  foreground1: chroma(tokens.onSurfaceVariant).alpha(0.85).hex(),
  foreground2: tokens.onSurfaceVariant,
};

// nord-alt
// /**
//  * @typedef {'black0' | 'black1' | 'black2' | 'black3'} Black
//  * @typedef {'white0' | 'white1' | 'white2'} White
//  * @typedef {'blue0' | 'blue1Alt' | 'blue1'} Blue
//  * @typedef {'cyan0Alt' | 'cyan0' | 'cyan1'} Cyan
//  * @typedef {'redAlt' | 'red1'} Red
//  * @typedef {'orangeAlt' | 'orange'} Orange
//  * @typedef {'yellowAlt' | 'yellow'} Yellow
//  * @typedef {'greenAlt' | 'green'} Green
//  * @typedef {'magentaAlt' | 'magenta'} Magenta
//  * @typedef {Black | White | Blue | Cyan | Red | Orange | Yellow | Green | Magenta} Syntax
//  */

/**
 * @typedef {'black0' | 'black1' } Black
 * @typedef {'white0' | 'white1' } White
 * @typedef {'blue0'  'blue1'} Blue
 * @typedef {'cyan0' | 'cyan1'} Cyan
 * @typedef {'red0' | 'red1'} Red
 * @typedef {'orange0' | 'orange1'} Orange
 * @typedef {'yellow0' | 'yellow1'} Yellow
 * @typedef {'green0' | 'green1'} Green
 * @typedef {'magenta0' | 'magenta1'} Magenta
 * @typedef {Black | White | Blue | Cyan | Red | Orange | Yellow | Green | Magenta} Syntax
 */

/** @type {Record<Syntax, import('../../../schemas/color-tokens.js').ColorTones>} */
export const syntax = file.syntax.reduce((obj, color) => {
  const { name, tones } = color;

  obj[name] = tones;

  return obj;
}, {});
