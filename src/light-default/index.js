import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import colors from './interface/index.js';
import tokenColors from './syntax/index.js';

const getFilePath = (file) => fileURLToPath(new URL(`../../themes/${file}`, import.meta.url));

const path = getFilePath('light-default.json');

try {
  const data = {
    colors,
    tokenColors,
  };

  const promise = writeFile(path, JSON.stringify(data, undefined, 2));

  await promise;
} catch (err) {
  console.error(err);
}
