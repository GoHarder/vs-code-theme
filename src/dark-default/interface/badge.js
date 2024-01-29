import { tokens } from '../colors/interface.js';

const badge = {
  // Badge foreground color. {default: #ffffff}
  foreground: tokens.tertiary,

  // Badge background color. {default: #4d4d4d}
  background: '#00000000',
};

export default {
  'badge.foreground': badge.foreground,
  'badge.background': badge.background,
};
