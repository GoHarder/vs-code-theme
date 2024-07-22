// Package Imports
import inquirer from 'inquirer';
import chroma from 'chroma-js';
import { argbFromHex, hexFromArgb, Hct, TonalPalette } from '@material/material-color-utilities';

// Local Imports
import { readDir, readJsonFile, saveJsonFile } from '../lib/file-system.js';

// MARK: Types
// ---------------------------------------------------------------------

/** @import { ListQuestion, QuestionCollection } from "inquirer"; */
/** @import { ColorPalletSchema } from '../schemas/color-tokens.js' */

/**
 * @typedef Tones
 * @property {string} _0
 * @property {string} _10
 * @property {string} _20
 * @property {string} _30
 * @property {string} _40
 * @property {string} _50
 * @property {string} _60
 * @property {string} _70
 * @property {string} _80
 * @property {string} _90
 * @property {string} _95
 * @property {string} _98
 * @property {string} _99
 * @property {string} _100
 */

// MARK: Constants
// ---------------------------------------------------------------------

const errorHex = '#c42b1c'; // 196 43 28
const warningHex = '#ffc209'; // 255 194 9
const successHex = '#008a17'; // 0 138 23
const linkHex = '#99ebff'; // 153 235 255

// MARK: Helpers
// ---------------------------------------------------------------------

/** Prompts the user to select a color source file. */
async function colorSourcePrompt() {
  const srcFiles = await readDir('src/colors');

  /** @type {import('inquirer').ListQuestion<{srcFile: string}>} */
  const prompt1 = {
    type: 'list',
    name: 'srcFile',
    message: 'Select a color source file',
    choices: srcFiles,
  };

  /** @type {QuestionCollection<{srcFile: string}>} */
  const questions = [prompt1];

  return (await inquirer.prompt(questions)).srcFile;
}

/**
 * Get a palette from a hex color.
 * @param {string} hex Hex color string.
 */
function palette(hex) {
  const argb = argbFromHex(hex);
  const { hue, chroma } = Hct.fromInt(argb);
  const palette = TonalPalette.fromHueAndChroma(hue, chroma);

  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];

  /** @type {Partial<Tones>} */
  const obj = {};

  return tones.reduce((obj, tone) => {
    obj[`_${tone}`] = hexFromArgb(palette.tone(tone));
    return obj;
  }, obj);
}

/**
 * Get the palettes for a color source.
 * @param {ColorPalletSchema} file
 */
function getTokens(file) {
  const { neutral: n, neutralVariant: nV } = file.interface;

  const error = palette(errorHex);
  const warning = palette(warningHex);
  const success = palette(successHex);
  const link = palette(linkHex);

  console.log(link);

  return {
    // Surface
    surfaceDim: n._6,
    surface: n._6,
    surfaceBright: n._24,
    // Surface Container
    surfaceContainerLowest: n._4,
    surfaceContainerLow: n._10,
    surfaceContainer: n._12,
    surfaceContainerHigh: n._17,
    surfaceContainerHighest: n._22,
    // Inverse Surface Container
    inverseSurfaceContainerLowest: n._100,
    inverseSurfaceContainerLow: n._96,
    inverseSurfaceContainer: n._94,
    inverseSurfaceContainerHigh: n._92,
    inverseSurfaceContainerHighest: n._90,
    // On Surface
    onSurface: n._90,
    onSurfaceVariant: nV._80,
    // Inverse On Surface
    inverseOnSurface: n._10,
    inverseOnSurfaceVariant: nV._30,
    // Error
    error1: error._50,
    error2: error._30,
    // Warning
    warning1: warning._80,
    warning2: warning._60,
    // Success
    success1: success._50,
    success2: success._30,
    // Link
    link1: link._90,
    link2: link._70,
  };
}

/**
 * Blend two colors together.
 * @param {string} color1 The base color.
 * @param {string} color2 The overlay color.
 * @param {number} per The percentage of the overlay color.
 */
function blend(color1, color2, per) {
  const scale = chroma.scale([color1, color2]);
  // @ts-ignore
  return scale(per).hex();
}

// MARK: Main
// ---------------------------------------------------------------------

async function main() {
  const srcFile = await colorSourcePrompt();

  /** @type {ColorPalletSchema} */
  const file = await readJsonFile(`src/colors/${srcFile}`);

  const tokens = getTokens(file);

  const output = {
    view: {
      normalBackground: tokens.surfaceContainer,
      alternateBackground: tokens.surfaceContainerLow,
      normalText: tokens.onSurface,
      inactiveText: blend(tokens.surfaceContainer, tokens.onSurface, 0.38),
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: tokens.error1,
      neutralText: tokens.warning1,
      positiveText: tokens.success1,
      focusDecoration: '',
      hoverDecoration: '',
    },
    window: {
      normalBackground: tokens.surfaceContainerHigh,
      alternateBackground: tokens.surfaceContainer,
      normalText: tokens.onSurface,
      inactiveText: blend(tokens.surfaceContainerHigh, tokens.onSurface, 0.38),
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: tokens.error1,
      neutralText: tokens.warning1,
      positiveText: tokens.success1,
      focusDecoration: '',
      hoverDecoration: '',
    },
    button: {
      normalBackground: tokens.surfaceContainerHighest,
      alternateBackground: tokens.surfaceContainerHigh,
      normalText: tokens.onSurface,
      inactiveText: blend(tokens.surfaceContainerHighest, tokens.onSurface, 0.38),
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: tokens.error1,
      neutralText: tokens.warning1,
      positiveText: tokens.success1,
      focusDecoration: '',
      hoverDecoration: '',
    },
    selection: {
      normalBackground: '',
      alternateBackground: '',
      normalText: '',
      inactiveText: '',
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: '',
      neutralText: '',
      positiveText: '',
      focusDecoration: '',
      hoverDecoration: '',
    },
    toolTip: {
      normalBackground: tokens.inverseSurfaceContainer,
      alternateBackground: tokens.inverseSurfaceContainerLow,
      normalText: tokens.inverseOnSurface,
      inactiveText: blend(tokens.inverseSurfaceContainer, tokens.inverseOnSurface, 0.38),
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: tokens.error2,
      neutralText: tokens.warning2,
      positiveText: tokens.success2,
      focusDecoration: '',
      hoverDecoration: '',
    },
    complementary: {
      normalBackground: '',
      alternateBackground: '',
      normalText: '',
      inactiveText: '',
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: '',
      neutralText: '',
      positiveText: '',
      focusDecoration: '',
      hoverDecoration: '',
    },
    header: {
      normalBackground: tokens.surfaceContainerHighest,
      alternateBackground: tokens.surfaceContainerHigh,
      normalText: tokens.onSurface,
      inactiveText: blend(tokens.surfaceContainerHighest, tokens.onSurface, 0.38),
      activeText: '',
      linkText: '',
      visitedText: '',
      negativeText: tokens.error1,
      neutralText: tokens.warning1,
      positiveText: tokens.success1,
      focusDecoration: '',
      hoverDecoration: '',
    },
    titleBar: {
      background: tokens.surfaceContainerHighest,
      text: tokens.onSurface,
      secondary: tokens.onSurfaceVariant,
    },
    inactiveTitleBar: {
      background: tokens.surfaceContainerHigh,
      text: blend(tokens.surfaceContainerHigh, tokens.onSurface, 0.38),
      secondary: blend(tokens.surfaceContainerHigh, tokens.onSurfaceVariant, 0.38),
    },
  };

  console.log(output);
}

main();
