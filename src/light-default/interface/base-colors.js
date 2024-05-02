import chroma from 'chroma-js';
import { tokens } from '../colors.js';

// Overall border color for focused elements. {default: #0090f1}
const focusBorder = tokens.secondary;

// Overall foreground color. {default: #616161}
const foreground = tokens.onSurface;

// Overall foreground for disabled elements. {default: #61616180}
const disabledForeground = chroma(tokens.onSurface).alpha(0.5).hex();

// Foreground color for description text providing additional information,
// for example for a label. {default: #717171}
const descriptionForeground = chroma(tokens.onSurface).alpha(0.7).hex();

// Overall foreground color for error messages (this color is only used if
// not overridden by a component). {default: #ff1212b3}
const errorForeground = tokens.error;

const widget = {
  // Border color of widgets such as Find/Replace inside the editor.
  // {default: null}
  border: undefined,

  // Shadow color of widgets such as Find/Replace inside the editor.
  // {default: #00000029}
  shadow: chroma(tokens.shadow).alpha(0.36).hex(),
};

const selection = {
  // Background color of text selections in the workbench (for input fields
  // or text areas, does not apply to selections within the editor and the
  // terminal). {default: null}
  background: tokens.infoContainer,
};

const icon = {
  // The default color for icons in the workbench. {default: #424242}
  foreground: tokens.onSurface,
};

const sash = {
  // The hover border color for draggable sashes. {default: #0090f1}
  hoverBorder: undefined,
};

export default {
  focusBorder,
  foreground,
  disabledForeground,
  'widget.border': widget.border,
  'widget.shadow': widget.shadow,
  'selection.background': selection.background,
  descriptionForeground: descriptionForeground,
  errorForeground: errorForeground,
  'icon.foreground': icon.foreground,
  'sash.hoverBorder': sash.hoverBorder,
};
