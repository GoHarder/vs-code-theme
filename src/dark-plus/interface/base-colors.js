import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

// Overall border color for focused elements. {default: #007fd4}
const focusBorder = tokens.secondary;

// Overall foreground color. {default: #cccccc}
const foreground = tokens.onSurface;

// Overall foreground for disabled elements. {default: #cccccc80}
const disabledForeground = chroma(tokens.onSurface).alpha(0.5).hex();

// Foreground color for description text providing additional information,
// for example for a label. {default: #ccccccb3}
const descriptionForeground = chroma(tokens.onSurface).alpha(0.7).hex();

// Overall foreground color for error messages (this color is only used if
// not overridden by a component). {default: #f48771}
const errorForeground = tokens.errorFixed;

const widget = {
  // Border color of widgets such as Find/Replace inside the editor.
  // {default: null}
  border: undefined, // Done

  // Shadow color of widgets such as Find/Replace inside the editor.
  // {default: #0000005c}
  shadow: chroma(tokens.shadow).alpha(0.36).hex(),
};

const selection = {
  // Background color of text selections in the workbench (for input fields
  // or text areas, does not apply to selections within the editor and the
  // terminal). {default: null}
  background: tokens.infoContainer,
};

const icon = {
  // The default color for icons in the workbench. {default: #c5c5c5}
  foreground: tokens.onSurface,
};

const sash = {
  // The hover border color for draggable sashes. {default: #007fd4}
  hoverBorder: undefined, // Done
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
