import { readJsonFile } from '../../../lib/file-system.js';

const settings = await readJsonFile('./src/dark-default/settings.json');

/** @type {import('../../../schemas/color-tokens.js').ColorPalletSchema} */
export const file = await readJsonFile(`./src/colors/${settings.colorFile}`);

const { neutral, neutralVariant } = file.interface;

export const editor = {
  foreground: neutralVariant._80,
};

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
};
