import chroma from 'chroma-js';

import { file, ansi as a, editor } from './index.js';

// export const terminal = {
//   // Cyan
//   cyanBase: ansi.cyan.base,
//   cyan: ansi.cyan._80,
//   onCyan: ansi.cyan._20,
//   cyanContainer: ansi.cyan._30,
//   onCyanContainer: ansi.cyan._90,
//   // Bright Cyan
//   brightCyanBase: ansi.brightCyan.base,
//   brightCyan: ansi.brightCyan._80,
//   onBrightCyan: ansi.brightCyan._20,
//   brightCyanContainer: ansi.brightCyan._30,
//   onBrightCyanContainer: ansi.brightCyan._90,
//   // White
//   whiteBase: ansi.white.base,
//   white: ansi.white._80,
//   onWhite: ansi.white._20,
//   whiteContainer: ansi.white._30,
//   onWhiteContainer: ansi.white._90,
//   // Bright White
//   brightWhiteBase: ansi.brightWhite.base,
//   brightWhite: ansi.brightWhite._80,
//   onBrightWhite: ansi.brightWhite._20,
//   brightWhiteContainer: ansi.brightWhite._30,
//   onBrightWhiteContainer: ansi.brightWhite._90,
// };

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

  editor,

  // Good
  good: a.green._80,
  onGood: a.green._20,
  goodContainer: a.green._30,
  onGoodContainer: a.green._90,
  // Warning
  warning: a.yellow._80,
  onWarning: a.yellow._20,
  warningContainer: a.yellow._30,
  onWarningContainer: a.yellow._90,
  // Info
  info: a.blue._80,
  onInfo: a.blue._20,
  infoContainer: a.blue._30,
  onInfoContainer: a.blue._90,
  // altError
  altError: a.red._80,
  onAltError: a.red._20,
  altErrorContainer: a.red._30,
  onAltErrorContainer: a.red._90,
};

export const tokens = { ...defaultTokens, ...customTokens };

export const ansi = a;
