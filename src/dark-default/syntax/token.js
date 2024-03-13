import { tokens } from '../colors/interface.js';

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
      foreground: '#B267E6', // TODO: Set debug token
    },
  },
];

export default settings;
