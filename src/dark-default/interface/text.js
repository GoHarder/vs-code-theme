// --------------------------------------------------------
// Text Colors
// Colors inside a text document, such as the welcome page.
// --------------------------------------------------------

import { tokens } from '../colors.js';

const textBlockQuote = {
  // Background color for block quotes in text. {default: #222222}
  background: tokens.surfaceContainerLow,

  // Border color for block quotes in text. {default: #007acc80}
  border: tokens.outlineVariant,
};

const textCodeBlock = {
  // Background color for code blocks in text. {default: #0a0a0a66}
  background: tokens.surfaceContainerLow,
};

const textLink = {
  // Foreground color for links in text when clicked on and on mouse hover.
  // {default: #3794ff}
  // activeForeground: tokens.primaryHover,
  activeForeground: tokens.linkHover,

  // Foreground color for links in text. {default: #3794ff}
  // foreground: tokens.primary,
  foreground: tokens.link,
};

const textPreformat = {
  // Foreground color for preformatted text segments. {default: #d7ba7d}
  foreground: tokens.altWarning,

  // {default: #ffffff1a}
  background: tokens.surfaceContainerLowest,
};

const textSeparator = {
  // Color for text separators. {default: #ffffff2e}
  foreground: undefined, // TODO: textSeparator.foreground
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
