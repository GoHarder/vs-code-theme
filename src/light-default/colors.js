import chroma from 'chroma-js';
import { readJsonFile } from '../../lib/file-system.js';

/**
 * @typedef {import('../../schemas/color-tokens.js').ColorPalletSchema} ColorPallet
 */

const settings = await readJsonFile('./src/light-default/settings.json');

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
  black: ansi.black._40,
  onBlack: ansi.black._100,
  blackContainer: ansi.black._90,
  onBlackContainer: ansi.black._10,
  // Red
  red: ansi.red._40,
  onRed: ansi.red._100,
  redContainer: ansi.red._90,
  onRedContainer: ansi.red._10,
  // Green
  green: ansi.green._40,
  onGreen: ansi.green._100,
  greenContainer: ansi.green._90,
  onGreenContainer: ansi.green._10,
  // Yellow
  yellow: ansi.yellow._40,
  onYellow: ansi.yellow._100,
  yellowContainer: ansi.yellow._90,
  onYellowContainer: ansi.yellow._10,
  // Blue
  blue: ansi.blue._40,
  onBlue: ansi.blue._100,
  blueContainer: ansi.blue._90,
  onBlueContainer: ansi.blue._10,
  // Magenta
  magenta: ansi.magenta._40,
  onMagenta: ansi.magenta._100,
  magentaContainer: ansi.magenta._90,
  onMagentaContainer: ansi.magenta._10,
  // Cyan
  cyan: ansi.cyan._40,
  onCyan: ansi.cyan._100,
  cyanContainer: ansi.cyan._90,
  onCyanContainer: ansi.cyan._10,
  // White
  white: ansi.white._40,
  onWhite: ansi.white._100,
  whiteContainer: ansi.white._90,
  onWhiteContainer: ansi.white._10,
  // Bright Black
  brightBlack: ansi.brightBlack._40,
  onBrightBlack: ansi.brightBlack._100,
  brightBlackContainer: ansi.brightBlack._90,
  onBrightBlackContainer: ansi.brightBlack._10,
  // Bright Red
  brightRed: ansi.brightRed._40,
  onBrightRed: ansi.brightRed._100,
  brightRedContainer: ansi.brightRed._90,
  onBrightRedContainer: ansi.brightRed._10,
  // Bright Green
  brightGreen: ansi.brightGreen._40,
  onBrightGreen: ansi.brightGreen._100,
  brightGreenContainer: ansi.brightGreen._90,
  onBrightGreenContainer: ansi.brightGreen._10,
  // Bright Yellow
  brightYellow: ansi.brightYellow._40,
  onBrightYellow: ansi.brightYellow._100,
  brightYellowContainer: ansi.brightYellow._90,
  onBrightYellowContainer: ansi.brightYellow._10,
  // Bright Blue
  brightBlue: ansi.brightBlue._40,
  onBrightBlue: ansi.brightBlue._100,
  brightBlueContainer: ansi.brightBlue._90,
  onBrightBlueContainer: ansi.brightBlue._10,
  // Bright Magenta
  brightMagenta: ansi.brightMagenta._40,
  onBrightMagenta: ansi.brightMagenta._100,
  brightMagentaContainer: ansi.brightMagenta._90,
  onBrightMagentaContainer: ansi.brightMagenta._10,
  // Bright Cyan
  brightCyan: ansi.brightCyan._40,
  onBrightCyan: ansi.brightCyan._100,
  brightCyanContainer: ansi.brightCyan._90,
  onBrightCyanContainer: ansi.brightCyan._10,
  // Bright White
  brightWhite: ansi.brightWhite._40,
  onBrightWhite: ansi.brightWhite._100,
  brightWhiteContainer: ansi.brightWhite._90,
  onBrightWhiteContainer: ansi.brightWhite._10,
};

const { primary, secondary, tertiary, error, neutral, neutralVariant } = file.interface;

const calcStateLayer = (color1, color2, opacity) => {
  const scale = chroma.scale([color1, color2]);
  return scale(opacity).hex();
};

const defaultTokens = {
  // Primary
  primary: primary._40,
  onPrimary: primary._100,
  primaryContainer: primary._90,
  onPrimaryContainer: primary._10,
  // Secondary
  secondary: secondary._40,
  onSecondary: secondary._100,
  secondaryContainer: secondary._90,
  onSecondaryContainer: secondary._10,
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
};

const customTokens = {
  // Primary
  primaryHover: calcStateLayer(defaultTokens.primary, defaultTokens.onPrimary, 0.08),
  // Secondary
  secondaryContainerHover: calcStateLayer(defaultTokens.secondaryContainer, defaultTokens.onSecondaryContainer, 0.08),
  // Error
  errorFixed: error._60,

  // Good
  good: ansi.green._40,
  onGood: ansi.green._100,
  goodContainer: ansi.green._90,
  onGoodContainer: ansi.green._10,
  // Warning
  warning: ansi.yellow._40,
  onWarning: ansi.yellow._100,
  warningContainer: ansi.yellow._90,
  onWarningContainer: ansi.yellow._10,
  // Info
  info: ansi.blue._40,
  onInfo: ansi.blue._100,
  infoContainer: ansi.blue._90,
  onInfoContainer: ansi.blue._10,
  // altError
  altError: ansi.red._40,
  onAltError: ansi.red._100,
  altErrorContainer: ansi.red._90,
  onAltErrorContainer: ansi.red._10,

  warningFixed: ansi.yellow._60,

  altErrorFixed: ansi.red._60,

  // Link
  link: ansi.cyan._40,
  onLink: ansi.cyan._100,
  linkContainer: ansi.cyan._90,
  onLinkContainer: ansi.cyan._10,

  linkHover: calcStateLayer(ansi.cyan._40, ansi.cyan._100, 0.08),
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
