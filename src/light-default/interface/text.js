// --------------------------------------------------------
// Text Colors
// Colors inside a text document, such as the welcome page.
// --------------------------------------------------------

import { tokens } from '../colors/interface.js';

const textBlockQuote = {
  // Background color for block quotes in text. {default: }
  background: tokens.surfaceContainerLow, // TODO: textBlockQuote.background

  // Border color for block quotes in text. {default: }
  border: tokens.outlineVariant, // TODO: textBlockQuote.border
};

const textCodeBlock = {
  // Background color for code blocks in text. {default: }
  background: tokens.surfaceContainerLow, // TODO: textCodeBlock.background
};

const textLink = {
  // Foreground color for links in text when clicked on and on mouse hover.
  // {default: }
  activeForeground: tokens.primaryHover, // TODO: textLink.activeForeground

  // Foreground color for links in text. {default: }
  foreground: tokens.primary, // TODO: textLink.foreground
};

const textPreformat = {
  // Foreground color for preformatted text segments. {default: }
  foreground: tokens.warning, // TODO: textPreformat.foreground

  // {default: }
  background: tokens.surfaceContainerLowest, // TODO: textPreformat.background
};

const textSeparator = {
  // Color for text separators. {default: }
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
