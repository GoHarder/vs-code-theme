// @ts-check

import { readDir, readJsonFile } from '../lib/file-system.js';
import inquirer from 'inquirer';
import chroma from 'chroma-js';

/**
 * @typedef {import('../schemas/color-tokens.js').ColorPalletSchema} ColorTokens
 */

/** Asynchronously creates prompts to select a file from a list of color token files. */
// const createPrompts = async () => {
//   const colorTokenFiles = await readDir('./src/colors');

//   const prompt1 = {
//     type: 'list',
//     name: 'colorTokenFile',
//     message: 'Select a file',
//     choices: colorTokenFiles,
//   };

//   return [prompt1];
// };

// const ansi = await readJsonFile('./tools/ansi.json');

// /**
//  *
//  * @param {string[]} colors
//  */
// const findClosestAnsi = (colors) => {
//   // const ansi = await readJsonFile('./tools/ansi.json');

//   return colors.map((color) => {
//     const [r1, g1, b1] = chroma.hex(color).rgb();
//     const sorted = ansi.sort((a, b) => {
//       const [aR, aG, aB] = chroma.hex(a).rgb();
//       const [bR, bG, bB] = chroma.hex(b).rgb();

//       const diffA = Math.sqrt(Math.pow(r1 - aR, 2) + Math.pow(g1 - aG, 2) + Math.pow(b1 - aB, 2));
//       const diffB = Math.sqrt(Math.pow(r1 - bR, 2) + Math.pow(g1 - bG, 2) + Math.pow(b1 - bB, 2));

//       return diffA - diffB;
//     });

//     return sorted[0];
//   });
// };

// /**
//  * @param {number} start
//  * @param {number} end
//  */
// const range = (start, end) => {
//   return Array.from({ length: end - start + 1 }, (_, i) => start + i);
// };

// /**
//  * @param scale {chroma.Scale}
//  */
// const buildTable = (scale) => {
//   let uniqueLength = 0;
//   let size = 1;
//   let table = [];

//   while (uniqueLength < 8) {
//     table = [];

//     let raw = range(0, size).map((i) => scale(i / size).hex());
//     raw = findClosestAnsi(raw);

//     table = [...new Set(raw)];

//     uniqueLength = table.length;

//     size++;
//   }

//   return table;
// };

// const init = async () => {
//   const prompts = await createPrompts();
//   inquirer
//     .prompt(prompts)
//     .then(async (answers) => {
//       const { colorTokenFile } = answers;

//       /** @type {ColorTokens} */
//       const colorTokens = await readJsonFile(`./src/colors/${colorTokenFile}`);

//       const { red, yellow, green } = colorTokens.ansi;

//       const scale = chroma.scale([green.base, yellow.base, red.base]);

//       const table = buildTable(scale);

//       // const table = [
//       //   scale(0 / 7).hex(),
//       //   scale(1 / 7).hex(),
//       //   scale(2 / 7).hex(),
//       //   scale(3 / 7).hex(),
//       //   scale(4 / 7).hex(),
//       //   scale(5 / 7).hex(),
//       //   scale(6 / 7).hex(),
//       //   scale(7 / 7).hex(),
//       // ];

//       // const ansiTable = findClosestAnsi(table);

//       const result = table.reduce((acc, value, index) => {
//         acc += `gradient_color_${index + 1} = '${value}'\n`;
//         return acc;
//       }, '');

//       // const result = ansiTable.reduce((acc, value, index) => {
//       //   acc += `gradient_color_${index} = '${value}'\n`;
//       //   return acc;
//       // }, '');

//       // offset of 38

//       // r: 163 g: 190 b: 140 #a3be8c
//       // r: 235 g: 203 b: 139 #ebcb8b
//       // r: 191 g: 97  b: 117 #bf616a

//       // r: 89  g: 204 b: 51  #59cc33
//       // r: 128 g: 204 b: 51  #80cc33
//       // r: 166 g: 204 b: 51  #a6cc33
//       // r: 204 g: 204 b: 51  #cccc33
//       // r: 204 g: 166 b: 51  #cca633
//       // r: 204 g: 128 b: 51  #cc8033
//       // r: 204 g: 89  b: 51  #cc5933
//       // r: 204 g: 51  b: 51  #cc3333
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });
// };

// init();

const scale = chroma.scale(['#2e3440', '#81a1c1']);

const table = [scale(0 / 7).hex(), scale(1 / 7).hex(), scale(2 / 7).hex(), scale(3 / 7).hex(), scale(4 / 7).hex(), scale(5 / 7).hex(), scale(6 / 7).hex(), scale(7 / 7).hex()];

console.log(table);

const peek = ['#2e3440', '#3a4452', '#465365', '#526377', '#5d728a', '#69829c', '#7591af', '#81a1c1'];
