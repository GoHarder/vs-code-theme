// @ts-check

import { CorePalette, argbFromHex, hexFromArgb, TonalPalette, Hct, Blend } from '@material/material-color-utilities';
import { readDir, readJsonFile, saveJsonFile } from '../lib/file-system.js';
import chroma from 'chroma-js';
import inquirer from 'inquirer';
import jsonSchema from 'json-schema-library';

/** @typedef {import('../schemas/color-source.js').ColorSourceSchema} ColorSource */

const srcFiles = await readDir('tools/src');

const palette = { $schema: '../../schemas/color-tokens.json/' };

const numberSort = (a, b) => a - b;

const coreTones = [0, 10, 30, 20, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];
const uniqueStandardTones = [5, 15, 25, 35];
const uniqueExtendedTones = [4, 6, 12, 17, 22, 24, 87, 92, 94, 96];

const standardTones = [...coreTones, ...uniqueStandardTones].sort(numberSort);
const extendedTones = [...coreTones, ...uniqueExtendedTones].sort(numberSort);

/** @type {import('inquirer').ListQuestion} */
const prompt1 = {
  type: 'list',
  name: 'srcFile',
  message: 'Select a source file',
  choices: srcFiles,
};

/**
 * Asynchronously loads a file using the specified fileName.
 * @param {string} fileName - The name of the file to be loaded
 */
const loadFile = async (fileName) => {
  /** @type {ColorSource} */
  const file = await readJsonFile(`./tools/src/${fileName}`);
  const rawSchema = await readJsonFile('./schemas/color-source.json');

  const schema = new jsonSchema.Draft07(rawSchema);
  const errors = schema.validate(file);

  if (errors.length > 0) {
    console.error(errors);
    process.exit(1);
  }

  return file;
};

/**
 * Get hue and chroma from hex color.
 * @param {string} hex Hex color string.
 * @param {boolean} [adjust] Adjust hue and chroma.
 */
const getHueAndChroma = (hex, adjust = false) => {
  const colorInt = argbFromHex(hex);
  const hct = Hct.fromInt(colorInt);
  let { hue, chroma } = hct;

  if (adjust) {
    // @ts-ignore
    const adj = new CorePalette(colorInt, false);
    hue = adj.a1.hue;
    chroma = adj.a1.chroma;
  }

  return { hue, chroma };
};

/**
 * Calculate the secondary hue and chroma based on the primary color and an optional secondary color.
 * @param {{hue: number, chroma: number}} primary - the primary color object with hue and chroma properties
 * @param {ColorSource['interface']['secondary']} secondary - optional secondary color object
 */
const getSecondaryHueAndChroma = (primary, secondary) => {
  let hue = primary.hue;
  let chroma = primary.chroma / 3;

  if (!secondary) return { hue, chroma };

  let { color, hueShift, chromaSplit } = secondary;

  if (color) return getHueAndChroma(color);

  hueShift = hueShift || 0;
  chromaSplit = chromaSplit || 3;

  hue += hueShift;
  chroma = chroma / chromaSplit;

  return { hue, chroma };
};

/**
 * Calculate the tertiary hue and chroma based on the primary color and an optional tertiary color.
 * @param {{hue: number, chroma: number}} primary - the primary color object with hue and chroma properties
 * @param {ColorSource['interface']['secondary']} tertiary - optional tertiary color object
 */
const getTertiaryHueAndChroma = (primary, tertiary) => {
  let hue = primary.hue + 60;
  let chroma = primary.chroma / 2;

  if (!tertiary) return { hue, chroma };

  let { color, hueShift, chromaSplit } = tertiary;

  if (color) return getHueAndChroma(color);

  hueShift = hueShift || 0;
  chromaSplit = chromaSplit || 3;

  hue += hueShift;
  chroma = chroma / chromaSplit;

  return { hue, chroma };
};

/**
 * Generates tones for the given palette.
 * @param {import('@material/material-color-utilities').TonalPalette} palette - The color palette object
 * @param {number[]} tones - The array of tones to generate
 * @return {object} The object containing generated tones
 */
const getTones = (palette, tones) => {
  const output = {};

  return tones.reduce((obj, tone) => {
    obj[`_${tone}`] = hexFromArgb(palette.tone(tone));
    return obj;
  }, output);
};

/**
 * Build the interface palettes.
 * @param {ColorSource} source - the color source
 * @returns {Array<[string, TonalPalette, number[]]>}
 */
const buildInterfacePalettes = (source) => {
  const { primary: p, secondary: s, tertiary: t, neutral: n } = source.interface;
  const primary = getHueAndChroma(p.value, p.adjustColor);
  const secondary = getSecondaryHueAndChroma(primary, s);
  const tertiary = getTertiaryHueAndChroma(primary, t);
  const error = { hue: 25, chroma: 84 };

  let neutral = { hue: primary.hue, chroma: Math.min(primary.chroma / 12, 4) };
  let neutralVariant = { hue: primary.hue, chroma: Math.min(primary.chroma / 6, 8) };

  if (n) {
    const neutralAdj = getHueAndChroma(n.value, n.adjustColor);
    neutral = { hue: neutralAdj.hue, chroma: Math.min(neutralAdj.chroma / 12, 4) };
    neutralVariant = { hue: neutralAdj.hue, chroma: Math.min(neutralAdj.chroma / 6, 8) };
  }

  /** @type {Array<[string, {hue: number, chroma: number}, number[]]>} */
  const groups = [
    ['primary', primary, standardTones],
    ['secondary', secondary, standardTones],
    ['tertiary', tertiary, standardTones],
    ['error', error, standardTones],
    ['neutral', neutral, extendedTones],
    ['neutralVariant', neutralVariant, standardTones],
  ];

  return groups.map((group) => {
    let [tag, { hue, chroma }, tones] = group;
    const tonalPalette = TonalPalette.fromHueAndChroma(hue, chroma);
    return [tag, tonalPalette, tones];
  });
};

/**
 * @typedef SyntaxTones
 * @property {string} base
 * @property {string} _0
 * @property {string} _5
 * @property {string} _10
 * @property {string} _15
 * @property {string} _20
 * @property {string} _25
 * @property {string} _30
 * @property {string} _35
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

/**
 * @typedef SyntaxColor
 * @property {string} name
 * @property {SyntaxTones} tones
 */

/**
 * Build the syntax palettes.
 * @param {ColorSource} source - the color source
 * @returns {Array<SyntaxColor>}
 */
const buildSyntaxPalettes = (source) => {
  const { interface: i, syntax } = source;

  let priInt = argbFromHex(i.primary.value);

  if (i.primary.adjustColor) {
    // @ts-ignore
    const adj = new CorePalette(priInt, false);
    priInt = adj.a1.keyColor.argb;
  }

  return syntax.map((color) => {
    const priInt = argbFromHex(i.primary.value);
    let colorInt = argbFromHex(color.value);
    if (color.blend) {
      colorInt = Blend.harmonize(colorInt, priInt);
    }

    const hct = Hct.fromInt(colorInt);
    const hue = hct.hue;
    const chroma = hct.chroma;

    const palette = TonalPalette.fromHueAndChroma(hue, chroma);

    return { name: color.name, tones: { base: color.value, ...getTones(palette, standardTones) } };
  });
};

/**
 * Builds a collection of syntax palettes based on the given ColorSource.
 * @param {ColorSource} source - the color source
 * @param {SyntaxColor[]} palettes - the syntax colors to generate palettes for
 */
const buildTerminal = (source, palettes) => {
  const { ansi } = source;
  const output = {};

  for (const key in ansi) {
    const element = ansi[key];
    const chunk = palettes.find((p) => p.name === element);

    if (!chunk) {
      console.log(`Could not find tones for ${key}`);
      continue;
    }

    output[key] = chunk.tones;
  }

  return output;
};

/**
 * @param {ColorSource} source
 * @param {boolean} bright
 */
const getOrange = (source, bright) => {
  const { ansi, syntax } = source;
  const redKey = bright ? 'brightRed' : 'red';
  const yellowKey = bright ? 'brightYellow' : 'yellow';
  const orangeKey = bright ? 'brightOrange' : 'orange';
  const red = syntax.find((s) => s.name === ansi[redKey]);
  const yellow = syntax.find((s) => s.name === ansi[yellowKey]);

  if (!red || !yellow) {
    console.log('Could not find red or yellow');
    return source;
  }

  const blend = red.blend && yellow.blend;

  const scale = chroma.scale([red.value, yellow.value]);

  source.syntax.push({
    name: orangeKey,
    value: scale(0.5).hex(),
    blend,
  });

  source.ansi[orangeKey] = orangeKey;

  return source;
};

inquirer
  .prompt([prompt1])
  .then(async (answers) => {
    const fileName = answers.srcFile;
    let fileData = await loadFile(fileName);

    const interfacePallets = buildInterfacePalettes(fileData);

    if (!fileData.ansi.orange) fileData = getOrange(fileData, false);
    if (!fileData.ansi.brightOrange) fileData = getOrange(fileData, true);

    const syntaxPallets = buildSyntaxPalettes(fileData);

    palette['interface'] = interfacePallets.reduce((obj, [key, palette, tones]) => {
      obj[key] = getTones(palette, tones);
      return obj;
    }, {});

    palette['syntax'] = syntaxPallets;
    palette['ansi'] = buildTerminal(fileData, syntaxPallets);

    saveJsonFile(`../src/colors/${fileName}`, palette);

    console.log(`Created ${fileName}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
