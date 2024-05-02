import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import colors from './interface/index.js';
import { tokenColors } from './syntax/index.js';

const getFilePath = (file) => fileURLToPath(new URL(`../../themes/${file}`, import.meta.url));

const path = getFilePath('light-default.json');

try {
  const data = {
    $schema: 'vscode://schemas/color-theme',
    colors,
    tokenColors,
  };

  const promise = writeFile(path, JSON.stringify(data, undefined, 2));

  await promise;
} catch (err) {
  console.error(err);
}

/** @type {Intl.DateTimeFormatOptions} */
const dateSettings = {
  timeStyle: 'medium',
};

const internal = new Intl.DateTimeFormat('en-us', dateSettings);

console.log(internal.format(Date.now()));
