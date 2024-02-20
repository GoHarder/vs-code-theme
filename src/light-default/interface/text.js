// --------------------------------------------------------
// Text Colors
// Colors inside a text document, such as the welcome page.
// --------------------------------------------------------

import { tokens } from '../colors/interface.js';

const textBlockQuote = {
  // Background color for block quotes in text. {default: #f2f2f2}
  background: tokens.surfaceContainerLow,

  // Border color for block quotes in text. {default: #007acc80}
  border: tokens.outlineVariant,
};

const textCodeBlock = {
  // Background color for code blocks in text. {default: #dcdcdc66}
  background: tokens.surfaceContainerLow,
};

const textLink = {
  // Foreground color for links in text when clicked on and on mouse hover.
  // {default: #006ab1}
  activeForeground: tokens.primaryHover,

  // Foreground color for links in text. {default: #006ab1}
  foreground: tokens.primary,
};

const textPreformat = {
  // Foreground color for preformatted text segments. {default: #a31515}
  foreground: undefined, // TODO: textPreformat.foreground

  // {default: #0000001a}
  background: undefined, // TODO: textPreformat.background
};

const textSeparator = {
  // Color for text separators. {default: #0000002e}
  foreground: undefined,
};

export default {
  'textBlockQuote.background': textBlockQuote.background,
  'textBlockQuote.border': textBlockQuote.border,
  'textCodeBlock.background': textCodeBlock.background,
  'textLink.activeForeground': textLink.activeForeground,
  'textLink.foreground': textLink.foreground,
  'textPreformat.foreground': textPreformat.foreground,
  'textPreformat.background': textPreformat.background,
  'textSeparator.foreground': textSeparator.foreground,
};
