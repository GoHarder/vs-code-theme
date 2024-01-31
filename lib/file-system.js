import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const getPath = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));

/** @param {string} path */
export const readDir = async (path) => {
  try {
    const dir = getPath(path);
    const files = await readdir(dir);
    return files;
  } catch (error) {
    console.error(error);
  }
};

/** @param {string} path */
export const readJsonFile = async (path) => {
  const filePath = getPath(path);
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return JSON.parse(contents);
  } catch (err) {
    console.error(err.message);
  }
};

export const saveJsonFile = async (path, data) => {
  const stringData = JSON.stringify(data, undefined, 2);

  try {
    const promise = writeFile(path, stringData);

    await promise;
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
};
