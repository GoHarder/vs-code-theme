import { tokens } from '../colors/interface.js';

const profileBadge = {
  // Profile badge background color. The profile badge shows on top of the
  // settings gear icon in the activity bar. {default: #c4c4c4}
  background: tokens.secondaryContainer,

  // Profile badge foreground color. The profile badge shows on top of the
  // settings gear icon in the activity bar. {default: #333333}
  foreground: tokens.onSecondaryContainer,
};

export default {
  'profileBadge.background': profileBadge.background,
  'profileBadge.foreground': profileBadge.foreground,
};
