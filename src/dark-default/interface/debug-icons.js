import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const debugIcon = {
  // Icon color for breakpoints. {default: #e51400}
  breakpointForeground: tokens.errorFixed,

  // Icon color for disabled breakpoints. {default: #848484}
  breakpointDisabledForeground: chroma(tokens.onSurfaceVariant).alpha(0.5).hex(),

  // Icon color for unverified breakpoints. {default: #848484}
  breakpointUnverifiedForeground: chroma(tokens.onSurfaceVariant).alpha(0.5).hex(),

  // Icon color for the current breakpoint stack frame. {default: #ffcc00}
  breakpointCurrentStackframeForeground: tokens.warning,

  // Icon color for all breakpoint stack frames. {default: #89d185}
  breakpointStackframeForeground: tokens.good,

  // Debug toolbar icon for start debugging. {default: #89d185}
  startForeground: tokens.good,

  // Debug toolbar icon for pause. {default: #75beff}
  pauseForeground: tokens.info,

  // Debug toolbar icon for stop. {default: #f48771}
  stopForeground: tokens.errorFixed,

  // Debug toolbar icon for disconnect. {default: #f48771}
  disconnectForeground: tokens.errorFixed,

  // Debug toolbar icon for restart. {default: #89d185}
  restartForeground: tokens.good,

  // Debug toolbar icon for step over. {default: #75beff}
  stepOverForeground: tokens.info,

  // Debug toolbar icon for step into. {default: #75beff}
  stepIntoForeground: tokens.info,

  // Debug toolbar icon for step over. {default: #75beff}
  stepOutForeground: tokens.info,

  // Debug toolbar icon for continue. {default: #75beff}
  continueForeground: tokens.info,

  // Debug toolbar icon for step back. {default: #75beff}
  stepBackForeground: tokens.info,
};

const debugConsole = {
  // Foreground color for info messages in debug REPL console.
  // {default: #3794ff}
  infoForeground: tokens.onSurface,

  // Foreground color for warning messages in debug REPL console.
  // {default: #cca700}
  warningForeground: tokens.warning,

  // Foreground color for error messages in debug REPL console.
  // {default: #f48771}
  errorForeground: tokens.errorFixed,

  // Foreground color for source filenames in debug REPL console.
  // {default: #cccccc}
  sourceForeground: tokens.info,
};

const debugConsoleInputIcon = {
  // Foreground color for debug console input marker icon.
  // {default: #cccccc}
  foreground: undefined, // TODO: debugConsoleInputIcon.foreground
};

export default {
  'debugIcon.breakpointForeground': debugIcon.breakpointForeground,
  'debugIcon.breakpointDisabledForeground': debugIcon.breakpointDisabledForeground,
  'debugIcon.breakpointUnverifiedForeground': debugIcon.breakpointUnverifiedForeground,
  'debugIcon.breakpointCurrentStackframeForeground': debugIcon.breakpointCurrentStackframeForeground,
  'debugIcon.breakpointStackframeForeground': debugIcon.breakpointStackframeForeground,
  'debugIcon.startForeground': debugIcon.startForeground,
  'debugIcon.pauseForeground': debugIcon.pauseForeground,
  'debugIcon.stopForeground': debugIcon.stopForeground,
  'debugIcon.disconnectForeground': debugIcon.disconnectForeground,
  'debugIcon.restartForeground': debugIcon.restartForeground,
  'debugIcon.stepOverForeground': debugIcon.stepOverForeground,
  'debugIcon.stepIntoForeground': debugIcon.stepIntoForeground,
  'debugIcon.stepOutForeground': debugIcon.stepOutForeground,
  'debugIcon.continueForeground': debugIcon.continueForeground,
  'debugIcon.stepBackForeground': debugIcon.stepBackForeground,
  'debugConsole.infoForeground': debugConsole.infoForeground,
  'debugConsole.warningForeground': debugConsole.warningForeground,
  'debugConsole.errorForeground': debugConsole.errorForeground,
  'debugConsole.sourceForeground': debugConsole.sourceForeground,
  'debugConsoleInputIcon.foreground': debugConsoleInputIcon.foreground,
};
