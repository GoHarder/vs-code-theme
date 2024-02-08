import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const ports = {
  // The color of the icon for a port that has an associated running
  // process. {default: #007acc}
  iconRunningProcessForeground: undefined, // TODO: ports.iconRunningProcessForeground
};

export default { 'ports.iconRunningProcessForeground': ports.iconRunningProcessForeground };
