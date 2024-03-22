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
    message: 'Select a color',
    choices: colorTokenFiles,
  };

  return [prompt1];
};

const init = async () => {
  const prompts = await createPrompts();
  inquirer
    .prompt(prompts)
    .then(async (answers) => {
      const { colorTokenFile } = answers;

      /** @type {ColorTokens} */
      const colorTokens = await readJsonFile(`./src/colors/${colorTokenFile}`);

      console.log(ansi);

      const { neutral } = colorTokens.interface;

      const filter = ['orange', 'brightOrange', 'teal', 'brightTeal'];

      const [r1, g1, b1] = chroma.hex(neutral._6).rgb();
      const [r2, g2, b2] = chroma.hex(neutral._90).rgb();

      let result = `background\t${neutral._6}\tR ${r1} G ${g1} B ${b1}\n`;
      result += `foreground\t${neutral._90}\tR ${r2} G ${g2} B ${b2}\n`;

      for (const key in colorTokens.ansi) {
        if (filter.includes(key)) continue;

        const [r, g, b] = chroma.hex(colorTokens.ansi[key].base).rgb();
        result += `${key}\t${colorTokens.ansi[key].base}\tR ${r} G ${g} B ${b}\n`;
      }

      console.log(result);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

init();
