import { argbFromHex, hexFromArgb, TonalPalette, Hct, Blend } from '@material/material-color-utilities';
import { readJsonFile, saveJsonFile } from '../lib/file-system.js';
import chroma from 'chroma-js';

const file = await readJsonFile('./tools/src/gogh.json');

const primary = file.interface.primary;
const secondary = file.interface.secondary;
const tertiary = file.interface.tertiary;

const numberSort = (a, b) => a - b;

const coreTones = [0, 10, 30, 20, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];
const uniqueStandardTones = [5, 15, 25, 35];
const uniqueExtendedTones = [4, 6, 12, 17, 22, 24, 87, 92, 94, 96];

const standardTones = [...coreTones, ...uniqueStandardTones].sort(numberSort);
const extendedTones = [...coreTones, ...uniqueExtendedTones].sort(numberSort);

/**
 * @template {string} Prefix
 * @template {number[]} Tones
 * @param {Prefix} prefix Object key prefix.
 * @param {TonalPalette} palette Tonal palette from utils.
 * @param {Tones} tones The tones to create.
 * @return {Record<`${Prefix}${Tones}`, string>}
 */
const getTones = (prefix, palette, tones) => {
  const output = {};

  output[prefix] = {};

  return tones.reduce((obj, tone) => {
    obj[prefix][`_${tone}`] = hexFromArgb(palette.tone(tone));
    return obj;
  }, output);
};

/**
 * @param {string} hex
 */
const getHueAndChroma = (hex) => {
  const colorInt = argbFromHex(hex);
  const hct = Hct.fromInt(colorInt);
  const hue = hct.hue;
  const chroma = hct.chroma;

  return { hue, chroma };
};

/**
 * @typedef InterfaceColor
 * @prop {string} color
 * @prop {number} [hueShift]
 * @prop {number} [chromaSplit]
 */

/**
 * @param {InterfaceColor} pri
 * @param {InterfaceColor} sec
 * @param {InterfaceColor} ter
 */
const createPalette = (pri, sec, ter) => {
  const primary = getHueAndChroma(pri.color);
  let secondary = { hue: primary.hue, chroma: primary.chroma / 3 };
  let tertiary = { hue: primary.hue - 60, chroma: primary.chroma / 3 };

  if (sec) {
    if (sec.color) secondary = getHueAndChroma(sec.color);

    if (sec.hueShift || sec.chromaSplit) {
      const hueShift = sec?.hueShift ?? 0;
      const chromaSplit = sec?.chromaSplit ?? 1;

      secondary = { hue: primary.hue + hueShift, chroma: primary.chroma / chromaSplit };
    }
  }

  if (ter) {
    if (ter.color) tertiary = getHueAndChroma(ter.color);

    if (ter.hueShift || ter.chromaSplit) {
      const hueShift = ter?.hueShift ?? 0;
      const chromaSplit = ter?.chromaSplit ?? 1;

      tertiary = { hue: primary.hue + hueShift, chroma: primary.chroma / chromaSplit };
    }
  }

  const paletteP = TonalPalette.fromHueAndChroma(primary.hue, primary.chroma);
  const paletteS = TonalPalette.fromHueAndChroma(secondary.hue, secondary.chroma);
  const paletteT = TonalPalette.fromHueAndChroma(tertiary.hue, tertiary.chroma);
  const paletteE = TonalPalette.fromHueAndChroma(25, 84);
  const paletteN = TonalPalette.fromHueAndChroma(primary.hue, Math.min(primary.chroma / 12, 4));
  const paletteNV = TonalPalette.fromHueAndChroma(primary.hue, Math.min(primary.chroma / 6, 8));

  const paletteGroups = [
    ['primary', paletteP, standardTones],
    ['secondary', paletteS, standardTones],
    ['tertiary', paletteT, standardTones],
    ['error', paletteE, standardTones],
    ['neutral', paletteN, extendedTones],
    ['neutralVariant', paletteNV, standardTones],
  ];

  return paletteGroups.reduce((obj, group) => {
    const [prefix, palette, tones] = group;

    const toneClump = getTones(prefix, palette, tones);

    // console.log(toneClump);

    obj = { ...obj, ...toneClump };

    return obj;
  }, {});
};

const getOrange = (red, yellow, name) => {
  const scale = chroma.scale([red.value, yellow.value]);
  return {
    value: scale(0.5).hex(),
    blend: red.blend && yellow.blend,
    name,
  };
};

const createSyntax = (pri, colors) => {
  const priInt = argbFromHex(pri.color);

  const red = colors.find((color) => color.name === 'red');
  const yellow = colors.find((color) => color.name === 'yellow');
  const brightRed = colors.find((color) => color.name === 'brightRed');
  const brightYellow = colors.find((color) => color.name === 'brightYellow');

  const orange = getOrange(red, yellow, 'orange');
  const brightOrange = getOrange(brightRed, brightYellow, 'brightOrange');

  colors = [...colors, orange, brightOrange];

  return colors.reduce((obj, color) => {
    let value = argbFromHex(color.value);
    if (color.blend) value = Blend.harmonize(value, pri);

    const hct = Hct.fromInt(value);
    const hue = hct.hue;
    const chroma = hct.chroma;

    const palette = TonalPalette.fromHueAndChroma(hue, chroma);

    let chunk = getTones(color.name, palette, standardTones);

    chunk = { base: color.value, ...chunk[color.name] };

    console.log(chunk);

    obj[color.name] = chunk;

    return obj;
  }, {});
};

const palette = {
  $schema: './schema.json',
  interface: createPalette(primary, secondary, tertiary),
  terminal: createSyntax(primary, file.syntax),
};

saveJsonFile('../src/colors/gogh.json', palette);
