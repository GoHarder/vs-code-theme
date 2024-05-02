import { tokens } from '../colors.js';

const badge = {
  // Badge foreground color. {default: #ffffff}
  foreground: tokens.onTertiary,

  // Badge background color. {default: #4d4d4d}
  background: tokens.tertiary,
};

export default {
  'badge.foreground': badge.foreground,
  'badge.background': badge.background,
};
