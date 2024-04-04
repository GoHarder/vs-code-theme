import { tokens } from '../colors.js';

const inlineChat = {
  // Background color of the interactive editor widget. {default: #252526}
  background: undefined, // TODO: inlineChat.background

  // Border color of the interactive editor widget. {default: #454545}
  border: undefined, // TODO: inlineChat.border

  // Shadow color of the interactive editor widget. {default: #0000005c}
  shadow: undefined, // TODO: inlineChat.shadow

  // Background highlighting of the current interactive region. Must be
  // transparent. {default: #264f7840}
  regionHighlight: undefined, // TODO: inlineChat.regionHighlight
};

const inlineChatInput = {
  // Border color of the interactive editor input. {default: #454545}
  border: tokens.outlineVariant,

  // Border color of the interactive editor input when focused.
  // {default: #007fd4}
  focusBorder: tokens.outline,

  // Foreground color of the interactive editor input placeholder.
  // {default: #cccccc80}
  placeholderForeground: tokens.onSurfaceVariant,

  // Background color of the interactive editor input. {default: #3c3c3c}
  background: '#00000000',
};

const inlineChatDiff = {
  // Background color of inserted text in the interactive editor input.
  // {default: #9ccc2c1a}
  inserted: undefined, // TODO: inlineChatDiff.inserted

  // Background color of removed text in the interactive editor input.
  // {default: #ff00001a}
  removed: undefined, // TODO: inlineChatDiff.removed
};

export default {
  'inlineChat.background': inlineChat.background,
  'inlineChat.border': inlineChat.border,
  'inlineChat.shadow': inlineChat.shadow,
  'inlineChat.regionHighlight': inlineChat.regionHighlight,
  'inlineChatInput.border': inlineChatInput.border,
  'inlineChatInput.focusBorder': inlineChatInput.focusBorder,
  'inlineChatInput.placeholderForeground': inlineChatInput.placeholderForeground,
  'inlineChatInput.background': inlineChatInput.background,
  'inlineChatDiff.inserted': inlineChatDiff.inserted,
  'inlineChatDiff.removed': inlineChatDiff.removed,
};
