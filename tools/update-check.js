import { readJsonFile, saveJsonFile } from '../lib/file-system.js';

const schema = await readJsonFile('./reference/schema.json');
const checkFile = await readJsonFile('./themes/dark-default.json');

const schemaKeys = Object.keys(schema.properties);
const checkFileKeys = Object.keys(checkFile.colors);

const missingFromFile = checkFileKeys.filter((key) => {
  return !schemaKeys.includes(key);
});

const inverse = schemaKeys.filter((key) => {
  return !checkFileKeys.includes(key);
});

// [
//   'textPreformat.background',
//   'activityBarTop.activeBorder',
//   'activityBarTop.dropBorder',
//   'activityBarTop.foreground',
//   'activityBarTop.inactiveForeground'
// ]

console.log(missingFromFile);

/** @type {Intl.DateTimeFormatOptions} */
const dateSettings = {
  timeStyle: 'medium',
};

const internal = new Intl.DateTimeFormat('en-us', dateSettings);

console.log(`results @ ${internal.format(Date.now())}`);
