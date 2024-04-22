import chroma from 'chroma-js';
import { tokens } from '../colors.js';

const welcomePage = {
  // Background color for the Welcome page. {default: null}
  background: undefined, // Done

  progress: {
    // Background color for the Welcome page progress bars.
    // {default: #3c3c3c}
    background: tokens.primaryContainer,

    // Foreground color for the Welcome page progress bars.
    // {default: #3794ff}
    foreground: tokens.primary,
  },

  //  Background color for the tiles on the Get Started page.
  // {default: #252526}
  tileBackground: tokens.surfaceContainerLow,

  // Hover background color for the tiles on the Get Started.
  // {default: #2c2c2d}
  tileHoverBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // Border color for the tiles on the Get Started page.
  // {default: #ffffff1a}
  tileBorder: tokens.outlineVariant,
};

const walkThrough = {
  // Background color for the embedded editors on the Interactive Playground.
  // {default: #00000066}
  embeddedEditorBackground: tokens.surfaceContainerLow,

  // Foreground color of the heading of each walkthrough step.
  // {default: #ffffff}
  stepTitle: { foreground: undefined }, // Done
};

export default {
  'welcomePage.background': welcomePage.background,
  'welcomePage.progress.background': welcomePage.progress.background,
  'welcomePage.progress.foreground': welcomePage.progress.foreground,
  'welcomePage.tileBackground': welcomePage.tileBackground,
  'welcomePage.tileHoverBackground': welcomePage.tileHoverBackground,
  'welcomePage.tileBorder': welcomePage.tileBorder,
  'walkThrough.embeddedEditorBackground': walkThrough.embeddedEditorBackground,
  'walkthrough.stepTitle.foreground': walkThrough.stepTitle.foreground,
};
