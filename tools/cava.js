import { readDir, readJsonFile } from '../lib/file-system.js';
import inquirer from 'inquirer';
import chroma from 'chroma-js';

/**
 * @typedef {import('../schemas/color-tokens.js').ColorPalletSchema} ColorTokens
 */

/** Asynchronously creates prompts to select a file from a list of color token files. */
const createPrompts = async () => {
  const colorTokenFiles = await readDir('./src/colors');

  const prompt1 = {
    type: 'list',
    name: 'colorTokenFile',
    message: 'Select a file',
    choices: colorTokenFiles,
  };

  return [prompt1];
};

// const ansi = await readJsonFile('./tools/ansi.json');

/**
 *
 * @param {string[]} colors
 */
const findClosestAnsi = async (colors) => {
  const ansi = await readJsonFile('./tools/ansi.json');

  return colors.map((color) => {
    const [r1, g1, b1] = chroma.hex(color).rgb();
    const sorted = ansi.sort((a, b) => {
      const [aR, aG, aB] = chroma.hex(a).rgb();
      const [bR, bG, bB] = chroma.hex(b).rgb();

      const diffA = Math.sqrt(Math.pow(r1 - aR, 2) + Math.pow(g1 - aG, 2) + Math.pow(b1 - aB, 2));
      const diffB = Math.sqrt(Math.pow(r1 - bR, 2) + Math.pow(g1 - bG, 2) + Math.pow(b1 - bB, 2));

      return diffA - diffB;
    });

    return sorted[0];
  });
};

const init = async () => {
  const prompts = await createPrompts();
  inquirer
    .prompt(prompts)
    .then(async (answers) => {
      const { colorTokenFile } = answers;

      /** @type {ColorTokens} */
      const colorTokens = await readJsonFile(`./src/colors/${colorTokenFile}`);

      const { red, yellow, green } = colorTokens.ansi;

      const scale = chroma.scale([green.base, yellow.base, red.base]);
      // const scale = chroma.scale([green.base, red.base]);

      const table = [
        scale(0 / 7).hex(),
        scale(1 / 7).hex(),
        scale(2 / 7).hex(),
        scale(3 / 7).hex(),
        scale(4 / 7).hex(),
        scale(5 / 7).hex(),
        scale(6 / 7).hex(),
        scale(7 / 7).hex(),
      ];

      const ansiTable = await findClosestAnsi(table);

      // const result = table.reduce((acc, value, index) => {
      //   acc += `gradient_color_${index} = '${value}'\n`;
      //   return acc;
      // }, '');

      const result = ansiTable.reduce((acc, value, index) => {
        acc += `gradient_color_${index} = '${value}'\n`;
        return acc;
      }, '');

      const peek = [
        '#a3be8c',
        '#b8c28c',
        '#ccc58b',
        '#e1c98b',
        '#e5bc86',
        '#d89e7d',
        '#cc7f73',
        '#bf616a',
        '-',
        '#afaf87',
        '#afaf87',
        '#d7d787',
        '#d7d787',
        '#d7af87',
        '#d7af87',
        '#d78787',
        '#af5f5f',
      ];

      // console.log([...table, '-', ...ansiTable]);

      console.log(result);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

init();
