import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const extensionButton = {
  // Extension view button foreground color (for example Install button).
  // {default: #ffffff}
  prominentForeground: undefined, // Done

  // Extension view button background color. {default: #0e639c}
  prominentBackground: tokens.secondary,

  // Extension view button background hover color. {default: #1177bb}
  prominentHoverBackground: undefined,

  // Button background color for extension actions. {default: #0e639c}
  background: undefined,

  // Button foreground color for extension actions. {default: #ffffff}
  foreground: undefined,

  // Button background hover color for extension actions.
  // {default: #1177bb}
  hoverBackground: undefined,

  // Button separator color for extension actions. {default: #ffffff66}
  separator: undefined,
};

const extensionBadge = {
  // Background color for the remote badge in the extensions view.
  // {default: #007acc}
  remoteBackground: tokens.primaryContainer,

  // Foreground color for the remote badge in the extensions view.
  // {default: #ffffff}
  remoteForeground: tokens.onPrimaryContainer,
};

const extensionIcon = {
  // The icon color for extension ratings. {default: #ff8e00}
  starForeground: chroma(tokens.warning).alpha(0.9).hex(),

  // The icon color for extension verified publisher. {default: #3794ff}
  verifiedForeground: chroma(tokens.warning).alpha(0.9).hex(),

  // The icon color for pre-release extension. {default: #1d9271}
  preReleaseForeground: chroma(tokens.secondaryContainer).alpha(0.9).hex(),

  // The icon color for extension sponsor. {default: #d758b3}
  sponsorForeground: chroma(tokens.errorFixed).alpha(0.9).hex(),
};

export default {
  'extensionButton.prominentForeground': extensionButton.prominentForeground,
  'extensionButton.prominentBackground': extensionButton.prominentBackground,
  'extensionButton.prominentHoverBackground': extensionButton.prominentHoverBackground,
  'extensionButton.background': extensionButton.background,
  'extensionButton.foreground': extensionButton.foreground,
  'extensionButton.hoverBackground': extensionButton.hoverBackground,
  'extensionButton.separator': extensionButton.separator,
  'extensionBadge.remoteBackground': extensionBadge.remoteBackground,
  'extensionBadge.remoteForeground': extensionBadge.remoteForeground,
  'extensionIcon.starForeground': extensionIcon.starForeground,
  'extensionIcon.verifiedForeground': extensionIcon.verifiedForeground,
  'extensionIcon.preReleaseForeground': extensionIcon.preReleaseForeground,
  'extensionIcon.sponsorForeground': extensionIcon.sponsorForeground,
};
