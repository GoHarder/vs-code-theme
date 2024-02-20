import { tokens } from '../colors/interface.js';

const badge = {
  // Badge foreground color. {default: #ffffff}
  foreground: tokens.onTertiaryContainer,

  // Badge background color. {default: #4d4d4d}
  background: tokens.tertiaryContainer,
};

export default {
  'badge.foreground': badge.foreground,
  'badge.background': badge.background,
};
