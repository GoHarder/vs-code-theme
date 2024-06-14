import chroma from 'chroma-js';
import { ansi, tokens } from '../colors.js';

const charts = {
  // Contrast color for text in charts. {default: #cccccc}
  foreground: tokens.onSurfaceVariant,

  // Color for lines in charts. {default: #cccccc80}
  lines: ansi.white.base,

  // Color for red elements in charts. {default: #f14c4c}
  red: ansi.red.base,

  // Color for blue elements in charts. {default: #3794ff}
  blue: ansi.blue.base,

  // Color for yellow elements in charts. {default: #cca700}
  yellow: ansi.yellow.base,

  // Color for orange elements in charts. {default: #d18616}
  orange: ansi.orange.base,

  // Color for green elements in charts. {default: #89d185}
  green: ansi.green.base,

  // Color for purple elements in charts. {default: #b180d7}
  purple: ansi.magenta.base,
};

export default {
  'charts.foreground': charts.foreground,
  'charts.lines': charts.lines,
  'charts.red': charts.red,
  'charts.blue': charts.blue,
  'charts.yellow': charts.yellow,
  'charts.orange': charts.orange,
  'charts.green': charts.green,
  'charts.purple': charts.purple,
};
