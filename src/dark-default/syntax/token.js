import { ansi, tokens } from '../colors.js';

const settings = [
  {
    scope: 'token.info-token',
    settings: {
      foreground: tokens.info,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: tokens.warning,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: tokens.errorFixed,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: ansi.magenta.base,
    },
  },
];

export default settings;
