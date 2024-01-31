// NPM Imports
import { Command } from 'commander';
import inquirer from 'inquirer';

// Local Imports
import { readDir, readJsonFile, saveJsonFile } from '../lib/file-system.js';

const files = await readDir('m3/raw');

const cli = new Command();

let fileName = '';

cli.name('process');
cli.description('A script to process material JSON files');
cli.version('0.0.0');

const fileSelectPrompt = [
  {
    type: 'list',
    name: 'file',
    message: 'Select a file to process.',
    choices: files,
  },
];

cli.action(() => {
  inquirer.prompt(fileSelectPrompt).then(async (res) => {
    fileName = res.file;
    const file = `m3/raw/${res.file}`;

    const fileData = await readJsonFile(file);

    process(fileData);
  });
});

cli.parse();

const process = (data) => {
  const light = processLight(data.schemes.light);
  const dark = processDark(data.schemes.dark);

  console.log(light);
  console.log(dark);

  const processed = deepMerge(light, {});

  saveJsonFile(`m3/processed/${fileName}`, light);
};

const isObject = (value) => typeof value === 'object' && !Array.isArray(value);

const deepMerge = (target, source) => {
  target = structuredClone(target);
  source = structuredClone(source);

  for (const key in source) {
    const value = source[key];

    if (isObject(value)) {
      if (key in target) {
        target[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: value });
      }
    } else {
      Object.assign(target, { [key]: value });
    }

    return target;
  }

  // if (!sources.length) return target;
  // const source = sources.shift();
  // const _target = clone(target);

  // if ((isObject(_target), isObject(source))) {
  //   for (const key in source) {
  //     const value = source[key];

  //     if (isObject(value)) {
  //       if (key in _target) {
  //         _target[key] = deepMerge(_target[key], value);
  //       } else {
  //         Object.assign(_target, { [key]: value });
  //       }
  //     } else {
  //       Object.assign(_target, { [key]: value });
  //     }
  //   }
  // }

  // return deepMerge(_target, ...sources);
};

const processDark = (data) => {
  return {
    primary: {
      _10: data.onPrimaryFixed,
      _20: data.onPrimary,
      _30: data.primaryContainer,
      _40: data.inversePrimary,
      _80: data.primary,
      _90: data.onPrimaryContainer,
    },
    secondary: {
      _10: data.onSecondaryFixed,
      _20: data.onSecondary,
      _30: data.secondaryContainer,
      _80: data.secondary,
      _90: data.onSecondaryContainer,
    },
    tertiary: {
      _10: data.onTertiaryFixed,
      _20: data.onTertiary,
      _30: data.tertiaryContainer,
      _80: data.tertiary,
      _90: data.onTertiaryContainer,
    },
    error: {
      _20: data.onError,
      _30: data.errorContainer,
      _80: data.error,
      _90: data.onErrorContainer,
    },
    neutral: {
      _0: data.shadow,
      _4: data.surfaceContainerLowest,
      _6: data.surface,
      _10: data.surfaceContainerLow,
      _12: data.surfaceContainer,
      _17: data.surfaceContainerHigh,
      _20: data.inverseOnSurface,
      _22: data.surfaceContainerHighest,
      _24: data.surfaceBright,
      _90: data.onSurface,
    },
    neutralVariant: {
      _30: data.surfaceVariant,
      _60: data.outline,
      _80: data.onSurfaceVariant,
    },
  };
};

const processLight = (data) => {
  return {
    primary: {
      _10: data.onPrimaryFixed,
      _30: data.onPrimaryFixedVariant,
      _40: data.primary,
      _80: data.primaryFixedDim,
      _90: data.primaryFixed,
      _100: data.onPrimary,

      // _10: data.onPrimaryContainer,
      // _80: data.inversePrimary,
      // _90: data.primaryContainer,
    },
    secondary: {
      secondary: 'S40',
      onSecondary: 'S100',
      secondaryContainer: 'S90',
      onSecondaryContainer: 'S10',
      secondaryFixed: 'S90',
      secondaryFixedDim: 'S80',
      onSecondaryFixed: 'S10',
      onSecondaryFixedVariant: 'S30',
    },
    tertiary: {
      tertiary: 'T40',
      onTertiary: 'T100',
      tertiaryContainer: 'T90',
      onTertiaryContainer: 'T10',
      tertiaryFixed: 'T90',
      tertiaryFixedDim: 'T80',
      onTertiaryFixed: 'T10',
      onTertiaryFixedVariant: 'T30',
    },
    error: {
      error: 'E40',
      onError: 'E100',
      errorContainer: 'E90',
      onErrorContainer: 'E10',
    },
    neutral: {
      surfaceDim: 'N87',
      surface: 'N98',
      surfaceBright: 'N98',
      surfaceContainerLowest: 'N100',
      surfaceContainerLow: 'N96',
      surfaceContainer: 'N94',
      surfaceContainerHigh: 'N92',
      surfaceContainerHighest: 'N90',
      inverseSurface: 'N20',
      inverseOnSurface: 'N95',
      onSurface: 'N10',
      scrim: 'N0',
      shadow: 'N0',
    },
    neutralVariant: {
      onSurfaceVariant: 'NV30',
      outline: 'NV50',
      outlineVariant: 'NV80',
    },
  };
};

const lightSort = {
  // Primary
  primary: 'P40',
  onPrimary: 'P100',
  primaryContainer: 'P90',
  onPrimaryContainer: 'P10',
  primaryFixed: 'P90',
  primaryFixedDim: 'P80',
  onPrimaryFixed: 'P10',
  onPrimaryFixedVariant: 'P30',
  // Secondary
  secondary: 'S40',
  onSecondary: 'S100',
  secondaryContainer: 'S90',
  onSecondaryContainer: 'S10',
  secondaryFixed: 'S90',
  secondaryFixedDim: 'S80',
  onSecondaryFixed: 'S10',
  onSecondaryFixedVariant: 'S30',
  // Tertiary
  tertiary: 'T40',
  onTertiary: 'T100',
  tertiaryContainer: 'T90',
  onTertiaryContainer: 'T10',
  tertiaryFixed: 'T90',
  tertiaryFixedDim: 'T80',
  onTertiaryFixed: 'T10',
  onTertiaryFixedVariant: 'T30',
  // Error
  error: 'E40',
  onError: 'E100',
  errorContainer: 'E90',
  onErrorContainer: 'E10',
  // Surface
  surfaceDim: 'N87',
  surface: 'N98',
  surfaceBright: 'N98',
  surfaceContainerLowest: 'N100',
  surfaceContainerLow: 'N96',
  surfaceContainer: 'N94',
  surfaceContainerHigh: 'N92',
  surfaceContainerHighest: 'N90',
  inverseSurface: 'N20',
  inverseOnSurface: 'N95',
  inversePrimary: 'P80',
  onSurface: 'N10',
  onSurfaceVariant: 'NV30',
  outline: 'NV50',
  outlineVariant: 'NV80',
  scrim: 'N0',
  shadow: 'N0',
};

const darkSort = {
  // Primary
  primary: 'P80',
  onPrimary: 'P20',
  primaryContainer: 'P30',
  onPrimaryContainer: 'P90',
  primaryFixed: 'P90',
  primaryFixedDim: 'P80',
  onPrimaryFixed: 'P10',
  onPrimaryFixedVariant: 'P30',
  // Secondary
  secondary: 'S80',
  onSecondary: 'S20',
  secondaryContainer: 'S30',
  onSecondaryContainer: 'S90',
  secondaryFixed: 'S90',
  secondaryFixedDim: 'S80',
  onSecondaryFixed: 'S10',
  onSecondaryFixedVariant: 'S30',
  // Tertiary
  tertiary: 'T80',
  onTertiary: 'T20',
  tertiaryContainer: '30',
  onTertiaryContainer: 'T90',
  tertiaryFixed: 'T90',
  tertiaryFixedDim: 'T80',
  onTertiaryFixed: 'T10',
  onTertiaryFixedVariant: 'T30',
  // Error
  error: 'E80',
  onError: 'E20',
  errorContainer: 'E30',
  onErrorContainer: 'E90',
  // Surface
  surfaceDim: 'N6',
  surface: 'N6',
  surfaceBright: 'N24',
  surfaceContainerLowest: 'N4',
  surfaceContainerLow: 'N10',
  surfaceContainer: 'N12',
  surfaceContainerHigh: 'N17',
  surfaceContainerHighest: 'N22',
  inverseSurface: 'N90',
  inverseOnSurface: 'N20',
  inversePrimary: 'P40',
  onSurface: 'N90',
  onSurfaceVariant: 'NV80',
  outline: 'NV60',
  outlineVariant: 'NV30',
  scrim: 'N0',
  shadow: 'N0',
};
