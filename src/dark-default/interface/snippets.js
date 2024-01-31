// ------------------------------
// Snippets Colors
// The theme colors for snippets.
// ------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const editor = {
  // Highlight background color of a snippet tabstop. {default: #7c7c7c4d}
  snippetTabstopHighlightBackground: undefined,

  // Highlight border color of a snippet tabstop. {default: #525252}
  snippetTabstopHighlightBorder: undefined,

  // Highlight background color of the final tabstop of a snippet.
  // {default: null}
  snippetFinalTabstopHighlightBackground: undefined,

  // Highlight border color of the final tabstop of a snippet.
  // {default: null}
  snippetFinalTabstopHighlightBorder: undefined,
};

export default {
  'editor.snippetTabstopHighlightBackground': editor.snippetTabstopHighlightBackground,
  'editor.snippetTabstopHighlightBorder': editor.snippetTabstopHighlightBorder,
  'editor.snippetFinalTabstopHighlightBackground': editor.snippetFinalTabstopHighlightBackground,
  'editor.snippetFinalTabstopHighlightBorder': editor.snippetFinalTabstopHighlightBorder,
};
