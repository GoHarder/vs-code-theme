import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const charts = {
  // Contrast color for text in charts. {default: #cccccc}
  foreground: undefined, // TODO: charts.foreground

  // Color for lines in charts. {default: #cccccc80}
  lines: undefined, // TODO: charts.lines

  // Color for red elements in charts. {default: #f14c4c}
  red: undefined, // TODO: charts.red

  // Color for blue elements in charts. {default: #3794ff}
  blue: undefined, // TODO: charts.blue

  // Color for yellow elements in charts. {default: #cca700}
  yellow: undefined, // TODO: charts.yellow

  // Color for orange elements in charts. {default: #d18616}
  orange: undefined, // TODO: charts.orange

  // Color for green elements in charts. {default: #89d185}
  green: undefined, // TODO: charts.green

  // Color for purple elements in charts. {default: #b180d7}
  purple: undefined, // TODO: charts.purple
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
