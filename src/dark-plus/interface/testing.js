import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const testing = {
  // Color for the 'failed' icon in the test explorer. {default: #f14c4c}
  iconFailed: undefined, // TODO: testing.iconFailed

  // Color for the 'Errored' icon in the test explorer. {default: #f14c4c}
  iconErrored: undefined, // TODO: testing.iconErrored

  // Color for the 'passed' icon in the test explorer. {default: #73c991}
  iconPassed: undefined, // TODO: testing.iconPassed

  // Color for 'run' icons in the editor. {default: #73c991}
  runAction: undefined, // TODO: testing.runAction

  // Color for the 'Queued' icon in the test explorer. {default: #cca700}
  iconQueued: undefined, // TODO: testing.iconQueued

  // Color for the 'Unset' icon in the test explorer. {default: #848484}
  iconUnset: undefined, // TODO: testing.iconUnset

  // Color for the 'Skipped' icon in the test explorer. {default: #848484}
  iconSkipped: undefined, // TODO: testing.iconSkipped

  // Color of the peek view borders and arrow. {default: #f14c4c}
  peekBorder: undefined, // TODO: testing.peekBorder

  // Color of the peek view borders and arrow. {default: #f14c4c1a}
  peekHeaderBackground: undefined, // TODO: testing.peekHeaderBackground

  message: {
    error: {
      // Text color of test error messages shown inline in the editor.
      // {default: #f14c4c}
      decorationForeground: undefined, // TODO: testing.message.error.decorationForeground

      // Margin color beside error messages shown inline in the editor.
      // {default: #ff000033}
      lineBackground: undefined, // TODO: testing.message.error.lineBackground
    },

    info: {
      // Text color of test info messages shown inline in the editor.
      // {default: #bbbbbb80}
      decorationForeground: undefined, // TODO: testing.message.info.decorationForeground

      // Margin color beside info messages shown inline in the editor.
      // {default: null}
      lineBackground: undefined, // TODO: testing.message.info.lineBackground
    },
  },
};

export default {
  'testing.iconFailed': testing.iconFailed,
  'testing.iconErrored': testing.iconErrored,
  'testing.iconPassed': testing.iconPassed,
  'testing.runAction': testing.runAction,
  'testing.iconQueued': testing.iconQueued,
  'testing.iconUnset': testing.iconUnset,
  'testing.iconSkipped': testing.iconSkipped,
  'testing.peekBorder': testing.peekBorder,
  'testing.peekHeaderBackground': testing.peekHeaderBackground,
  'testing.message.error.decorationForeground': testing.message['error'].decorationForeground,
  'testing.message.error.lineBackground': testing.message['error'].lineBackground,
  'testing.message.info.decorationForeground': testing.message.info.decorationForeground,
  'testing.message.info.lineBackground': testing.message.info.lineBackground,
};
