import { tokens } from '../colors.js';

const profileBadge = {
  // Profile badge background color. The profile badge shows on top of the
  // settings gear icon in the activity bar. {default: #4d4d4d}
  background: tokens.secondaryContainer,

  // Profile badge foreground color. The profile badge shows on top of the
  // settings gear icon in the activity bar. {default: #ffffff}
  foreground: tokens.onSecondaryContainer,
};

export default {
  'profileBadge.background': profileBadge.background,
  'profileBadge.foreground': profileBadge.foreground,
};
