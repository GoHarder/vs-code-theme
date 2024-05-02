import chroma from 'chroma-js';
import { tokens } from '../colors.js';

const scrollbar = {
  // Scrollbar slider shadow to indicate that the view is scrolled.
  // {default: #dddddd}
  shadow: chroma(tokens.shadow).alpha(0.36).hex(),
};

const scrollbarSlider = {
  // Scrollbar slider background color when clicked on.
  // {default: #00000099}
  activeBackground: chroma(tokens.onSurfaceVariant).alpha(0.5).hex(),

  // Scrollbar slider background color. {default: #64646466}
  background: chroma(tokens.onSurfaceVariant).alpha(0.18).hex(),

  // Scrollbar slider background color when hovering. {default: #646464b3}
  hoverBackground: chroma(tokens.onSurfaceVariant).alpha(0.25).hex(),
};

export default {
  'scrollbar.shadow': scrollbar.shadow,
  'scrollbarSlider.activeBackground': scrollbarSlider.activeBackground,
  'scrollbarSlider.background': scrollbarSlider.background,
  'scrollbarSlider.hoverBackground': scrollbarSlider.hoverBackground,
};
