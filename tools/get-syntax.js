import { argbFromHex } from '@material/material-color-utilities';
import { readDir, readJsonFile, saveJsonFile } from '../lib/file-system.js';
import inquirer from 'inquirer';
import chroma from 'chroma-js';

/**
 * @typedef {import('../schemas/color-tokens.js').ColorPalletSchema} ColorTokens
 */

const start = [
  '#808080',
  '#c8c8c8',
  '#d4d4d4',
  '#d16969',
  '#ce9178',
  '#d7ba7d',
  '#dcdcaa',
  '#6a9955',
  '#b5cea8',
  '#4ec9b0',
  '#000080',
  '#569cd6',
  '#4fc1ff',
  '#9cdcfe',
  '#b267e6',
  '#c586c0',
  '#646695',
  '#6796E6',
  '#F44747',
];

const nord = ['#5e81ac', '#616e88', '#81a1c1', '#88c0d0', '#8fbcbb', '#a3be8c', '#b48ead', '#bf616a', '#d08770', '#d8dee9', '#d8dee9', '#ebcb8b', '#eceff4'];

/** Asynchronously creates prompts to select a file from a list of color token files. */
const createPrompts = async () => {
  const colorTokenFiles = await readDir('./src/colors');

  const prompt1 = {
    type: 'list',
    name: 'colorTokenFile',
    message: 'Select a token file',
    choices: colorTokenFiles,
  };

  return [prompt1];
};

/**
 * @param {string} source
 * @param {ColorTokens['syntax']} syntax - the syntax palettes
 */
const buildSearchTable = (source, syntax) => {
  const baseTable = syntax.reduce((arr, item) => {
    const { name, tones } = item;
    const [r1, g1, b1] = chroma.hex(source).rgb();

    for (const key in tones) {
      if (key === 'base') continue;
      const codeName = `syntax.${name}.${key}`;
      const [r2, g2, b2] = chroma.hex(tones[key]).rgb();

      const diff = Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));

      arr.push({ codeName, diff, hex: tones[key] });
    }

    return arr;
  }, []);

  return baseTable.sort((a, b) => a.diff - b.diff);
};

const init = async () => {
  const prompts = await createPrompts();
  inquirer
    .prompt(prompts)
    .then(async (answers) => {
      const { colorTokenFile } = answers;

      /** @type {ColorTokens} */
      const colorTokens = await readJsonFile(`./src/colors/${colorTokenFile}`);

      const result = start.map((hex) => {
        const searchTable = buildSearchTable(hex, colorTokens.syntax);

        return {
          target: hex,
          selections: searchTable.slice(0, 15),
        };
      });

      saveJsonFile(`./${colorTokenFile}`, result);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

init();
