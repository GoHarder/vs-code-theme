// -------------------------------------------------------
// Status Bar Colors
// The Status Bar is shown in the bottom of the workbench.
// -------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const statusBar = {
  // Standard Status Bar background color.
  background: tokens.surfaceContainerHigh,

  // Status Bar foreground color.
  foreground: tokens.onSurfaceVariant,

  // Status Bar border color separating the Status Bar and editor.
  // {default: null}
  border: undefined, // Done

  // Status Bar background color when a program is being debugged.
  // {default: #cc6633}
  debuggingBackground: tokens.onPrimaryContainer,

  // Status Bar foreground color when a program is being debugged.
  // {default: #ffffff}
  debuggingForeground: tokens.primaryContainer,

  // Status Bar border color separating the Status Bar and editor
  // when a program is being debugged. {default: null}
  debuggingBorder: undefined, // DOne

  // Status Bar background color when no folder is opened.
  noFolderBackground: tokens.surfaceContainerHigh,

  // Status Bar foreground color when no folder is opened.
  // {default: #ffffff}
  noFolderForeground: chroma(tokens.onSurfaceVariant).alpha(0.5).hex(),

  // Status Bar border color separating the Status Bar and editor when no
  // folder is opened. {default: null}
  noFolderBorder: undefined, // Done

  // Status bar border color when focused on keyboard navigation. The status
  // bar is shown in the bottom of the window. {default: #ffffff}
  focusBorder: tokens.secondary,
};

const statusBarItem = {
  // Status Bar item background color when clicking. {default: #ffffff2e}
  activeBackground: chroma(tokens.onSurface).alpha(0.15).hex(),

  // Status Bar item background color when hovering. {default: #ffffff1f}
  hoverBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // {default: #ffffff}
  hoverForeground: tokens.onSurface,

  // Status bar item background color when hovering an item that
  // contains two hovers. The status bar is shown in the bottom of
  // the window. {default: #ffffff33}
  compactHoverBackground: tokens.secondaryContainer,

  // Status bar item border color when focused on keyboard navigation. The
  // status bar is shown in the bottom of the window. {default: #ffffff}
  focusBorder: tokens.outline,

  // Status Bar prominent items foreground color. {default: #ffffff}
  prominentForeground: tokens.onSecondaryContainer,

  // Status Bar prominent items background color. {default: #00000080}
  prominentBackground: tokens.secondaryContainer,

  // Status Bar prominent items background color when hovering.
  // {default: #0000004d}
  prominentHoverBackground: chroma(tokens.onSecondaryContainer).alpha(0.1).hex(),

  // {default: #ffffff}
  prominentHoverForeground: tokens.onSurface,

  // Background color for the remote indicator on the status bar.
  // {default: #007acc}
  remoteBackground: tokens.surfaceContainerHigh,

  // Foreground color for the remote indicator on the status bar.
  // {default: #ffffff}
  remoteForeground: tokens.onSurfaceVariant,

  // Added in release 1.82.0 {default: #ffffff1f}
  remoteHoverBackground: tokens.secondaryContainer,

  // Added in release 1.82.0 {default: #ffffff}
  remoteHoverForeground: tokens.onSecondaryContainer,

  // Status bar error items background color. Error items stand out from
  // other status bar entries to indicate error conditions.
  // {default: #c72e0f}
  errorBackground: tokens.errorContainer,

  // Status bar error items foreground color. Error items stand out
  // from other status bar entries to indicate error conditions.
  // {default: #ffffff}
  errorForeground: tokens.onErrorContainer,

  // Added in release 1.82.0 {default: #ffffff1f}
  errorHoverBackground: chroma(tokens.onErrorContainer).alpha(0.1).hex(),

  // Added in release 1.82.0 {default: #ffffff}
  errorHoverForeground: tokens.onSurface,

  // Status bar warning items background color. Warning items stand
  // out from other status bar entries to indicate warning conditions.
  // The status bar is shown in the bottom of the window.
  // {default: #7a6400}
  warningBackground: tokens.warning,

  // Status bar warning items foreground color. Warning items stand
  // out from other status bar entries to indicate warning conditions.
  // The status bar is shown in the bottom of the window.
  // {default: #ffffff}
  warningForeground: tokens.onWarning,

  // Added in release 1.82.0 {default: #ffffff1f}
  warningHoverBackground: chroma(tokens.onWarning).alpha(0.1).hex(),

  // Added in release 1.82.0 {default: #ffffff}
  warningHoverForeground: tokens.onWarning,

  // Status bar background color when the workbench is offline. The status
  // bar is shown in the bottom of the window. {default: #6c1717}
  offlineBackground: tokens.errorContainer,

  // Status bar foreground color when the workbench is offline. The status
  // bar is shown in the bottom of the window. {default: #ffffff}
  offlineForeground: tokens.onErrorContainer,

  // Added in release 1.82.0 {default: #ffffff1f}
  offlineHoverBackground: chroma(tokens.onErrorContainer).alpha(0.1).hex(),

  // Added in release 1.82.0 {default: #ffffff}
  offlineHoverForeground: tokens.onSurface,
};

export default {
  'statusBar.background': statusBar.background,
  'statusBar.foreground': statusBar.foreground,
  'statusBar.border': statusBar.border,
  'statusBar.debuggingBackground': statusBar.debuggingBackground,
  'statusBar.debuggingForeground': statusBar.debuggingForeground,
  'statusBar.debuggingBorder': statusBar.debuggingBorder,
  'statusBar.noFolderForeground': statusBar.noFolderForeground,
  'statusBar.noFolderBackground': statusBar.noFolderBackground,
  'statusBar.noFolderBorder': statusBar.noFolderBorder,
  'statusBarItem.activeBackground': statusBarItem.activeBackground,
  'statusBarItem.hoverBackground': statusBarItem.hoverBackground,
  'statusBarItem.hoverForeground': statusBarItem.hoverForeground,
  'statusBarItem.prominentForeground': statusBarItem.prominentForeground,
  'statusBarItem.prominentBackground': statusBarItem.prominentBackground,
  'statusBarItem.prominentHoverBackground': statusBarItem.prominentHoverBackground,
  'statusBarItem.prominentHoverForeground': statusBarItem.prominentHoverForeground,
  'statusBarItem.remoteBackground': statusBarItem.remoteBackground,
  'statusBarItem.remoteForeground': statusBarItem.remoteForeground,
  'statusBarItem.errorBackground': statusBarItem.errorBackground,
  'statusBarItem.errorForeground': statusBarItem.errorForeground,
  'statusBarItem.warningBackground': statusBarItem.warningBackground,
  'statusBarItem.warningForeground': statusBarItem.warningForeground,
  'statusBarItem.compactHoverBackground': statusBarItem.compactHoverBackground,
  'statusBarItem.focusBorder': statusBarItem.focusBorder,
  'statusBar.focusBorder': statusBar.focusBorder,
  'statusBarItem.offlineBackground': statusBarItem.offlineBackground,
  'statusBarItem.offlineForeground': statusBarItem.offlineForeground,
  'statusBarItem.remoteHoverBackground': statusBarItem.remoteHoverBackground,
  'statusBarItem.remoteHoverForeground': statusBarItem.remoteHoverForeground,
  'statusBarItem.errorHoverBackground': statusBarItem.errorHoverBackground,
  'statusBarItem.errorHoverForeground': statusBarItem.errorHoverForeground,
  'statusBarItem.offlineHoverBackground': statusBarItem.offlineHoverBackground,
  'statusBarItem.offlineHoverForeground': statusBarItem.offlineHoverForeground,
  'statusBarItem.warningHoverBackground': statusBarItem.warningHoverBackground,
  'statusBarItem.warningHoverForeground': statusBarItem.warningHoverForeground,
};
