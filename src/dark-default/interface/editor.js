// ---------------------------------------------------------------------
// Editor Colors
// The most prominent editor colors are the token colors used for syntax
// highlighting and are based on the language grammar installed. These
// colors are defined by the Color Theme but can also be customized with
// the editor.tokenColorCustomizations setting. See Customizing a Color
// Theme for details on updating a Color Theme and the available token
// types. All other editor colors are listed here.
// ---------------------------------------------------------------------

import chroma from 'chroma-js';
import { tokens } from '../colors/interface.js';

const editor = {
  // Editor background color. {default: #1e1e1e}
  background: tokens.surface,

  // Editor default foreground color. {default: #bbbbbb}
  foreground: tokens.onSurfaceVariant,

  // ----------------------------------------------------------------------
  // Selection colors are visible when selecting one or more characters. In
  // addition to the selection also all regions with the same content are
  // highlighted.
  // ----------------------------------------------------------------------
  // NOTE: Example image available.

  // Color of the editor selection. {default: #264f78}
  selectionBackground: tokens.infoContainer,

  // Color of the selected text for high contrast. {default: null}
  selectionForeground: undefined, // Done

  // Color of the selection in an inactive editor. The color must not be
  // opaque so as not to hide underlying decorations. {default: #264f7880}
  inactiveSelectionBackground: undefined, // Done

  // Color for regions with the same content as the selection. The color
  // must not be opaque so as not to hide underlying decorations.
  // {default: #1d3b5a99}
  selectionHighlightBackground: '#00000000',

  // Border color for regions with the same content as the selection.
  // {default: null}
  selectionHighlightBorder: tokens.infoContainer,

  // --------------------------------------------------------------------
  // Word highlight colors are visible when the cursor is inside a symbol
  // or a word. Depending on the language support available for the file
  // type, all matching references and declarations are highlighted and
  // read and write accesses get different colors. If document symbol
  // language support is not available, this falls back to word
  // highlighting occurrences.
  // --------------------------------------------------------------------
  // NOTE: Example image available.

  // NOTE: The background colors must not be opaque so as not to hide
  // underlying decorations.

  // Background color of a symbol during read-access, for example when
  // reading a variable. {default: #575757b8}
  wordHighlightBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Border color of a symbol during read-access, for example when reading
  // a variable. {default: null}
  wordHighlightBorder: chroma(tokens.onSurface).alpha(0.6).hex(),

  // Background color of a symbol during write-access, for example when
  // writing to a variable. {default: #004972b8}
  wordHighlightStrongBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Border color of a symbol during write-access, for example when writing
  // to a variable. {default: null}
  wordHighlightStrongBorder: tokens.info,

  // Background color of a textual occurrence for a symbol.
  // {default: #575757b8}
  wordHighlightTextBackground: undefined, // Done

  // Border color of a textual occurrence for a symbol. {default: null}
  wordHighlightTextBorder: undefined, // Done

  // -----------------------------------------------------------------
  // Find colors depend on the current find string in the find/replace
  // dialog.
  // -----------------------------------------------------------------
  // NOTE: Example image available.

  // Color of the current search match. {default: #515c6a}
  findMatchBackground: chroma(tokens.onSurface).alpha(0.08).hex(),

  // Border color of the current search match. {default: null}
  findMatchBorder: chroma(tokens.onSurface).alpha(0.6).hex(),

  // Color of the other search matches. The color must not be opaque so as
  // not to hide underlying decorations. {default: #ea5c0055}
  findMatchHighlightBackground: chroma(tokens.good).alpha(0.2).hex(),

  // Border color of the other search matches. {default: null}
  findMatchHighlightBorder: chroma(tokens.good).alpha(0.6).hex(),

  // Color the range limiting the search (Enable 'Find in Selection' in the
  // find widget). The color must not be opaque so as not to hide underlying
  // decorations. {default: #3a3d4166}
  findRangeHighlightBackground: chroma(tokens.onSurfaceVariant).alpha(0.08).hex(),

  // Border color the range limiting the search (Enable 'Find in Selection'
  // in the find widget). {default: null}
  findRangeHighlightBorder: undefined, // Done

  // -------------------------------------------------------------------
  // The hover highlight is shown behind the symbol for which a hover is
  // shown.
  // -------------------------------------------------------------------
  // NOTE: Example image available.

  // Highlight below the word for which a hover is shown. The color must
  // not be opaque so as not to hide underlying decorations.
  // {default: #264f7840}
  hoverHighlightBackground: chroma(tokens.onSurface).alpha(0.1).hex(),

  // ---------------------------------------------------------------------
  // The current line is typically shown as either background highlight or
  // a border (not both).
  // ---------------------------------------------------------------------
  // NOTE: Example image available.

  // Background color for the highlight of line at the cursor position.
  // {default: null}
  lineHighlightBackground: undefined, // Done

  // Background color for the border around the line at the cursor position.
  // {default: #282828}
  lineHighlightBorder: tokens.surfaceContainerHigh,

  // --------------------------------------------------------------
  // The range highlight is visible when selecting a search result.
  // --------------------------------------------------------------
  // NOTE: Example image available.

  // Background color of highlighted ranges, used by Quick Open, Symbol in
  // File and Find features. The color must not be opaque so as not to hide
  // underlying decorations. {default: #ffffff0b}
  rangeHighlightBackground: chroma(tokens.onSurfaceVariant).alpha(0.08).hex(),

  // Background color of the border around highlighted ranges.
  // {default: null}
  rangeHighlightBorder: undefined, // Done

  // -----------------------------------------------------------------
  // The symbol highlight is visible when navigating to a symbol via a
  // command such as Go to Definition.
  // -----------------------------------------------------------------

  // Background color of highlighted symbol. The color must not be opaque so
  // as not to hide underlying decorations. {default: #ea5c0055}
  symbolHighlightBackground: undefined, // TODO: editor.symbolHighlightBackground

  // Background color of the border around highlighted symbols.
  // {default: null}
  symbolHighlightBorder: undefined, // TODO: editor.symbolHighlightBorder

  // -----------------------------------------------------------------

  // Background color when the editor is in linked editing mode.
  // {default: #ff00004d}
  linkedEditingBackground: undefined, // TODO: editor.linkedEditingBackground

  // Background color for folded ranges. The color must not be opaque so as
  // not to hide underlying decorations. {default: #264f784d}
  foldBackground: chroma(tokens.onSurfaceVariant).alpha(0.05).hex(),
};

const editorLineNumber = {
  // Color of editor line numbers. {default: #858585}
  foreground: chroma(tokens.onSurfaceVariant).alpha(0.5).hex(),

  // Color of the active editor line number. {default: #c6c6c6}
  activeForeground: tokens.onSurfaceVariant,

  // Color of the final editor line when editor.renderFinalNewline is set
  // to dimmed. {default: null}
  dimmedForeground: chroma(tokens.onSurfaceVariant).alpha(0.3).hex(),
};

const editorCursor = {
  // The background color of the editor cursor. Allows customizing the
  // color of a character overlapped by a block cursor. {default: null}
  background: undefined, // Done

  // Color of the editor cursor. {default: #aeafad}
  foreground: tokens.warning,
};

const search = {
  // ---------------------------------------------------------------------
  // Search colors are used in the search viewlet's global search results.
  // ---------------------------------------------------------------------
  // NOTE: Example image available.

  // Color of the text in the search viewlet's completion message. For
  // example, this color is used in the text that says "{x} results in {y}
  // files". {default: #cccccca6}
  resultsInfoForeground: tokens.onSurfaceVariant,
};

const searchEditor = {
  // ----------------------------------------------------------------------
  // Search Editor colors highlight results in a Search Editor. This can be
  // configured separately from other find matches in order to better
  // differentiate between different classes of match in the same editor.
  // ----------------------------------------------------------------------
  // NOTE: Example image available.

  // Color of the editor's results. {default: #ea5c0038}
  findMatchBackground: undefined, // Done

  // Border color of the editor's results. {default: null}
  findMatchBorder: undefined, // Done

  // Search editor text input box border. {default: null}
  textInputBorder: undefined, // Done
};

const editorUnicodeHighlight = {
  // --------------------------------
  // The color for unicode highlights
  // --------------------------------

  // Border color used to highlight unicode characters. {default: #bd9b03}
  border: tokens.warning,

  // Background color used to highlight unicode characters.
  // {default: #bd9b0326}
  background: chroma(tokens.warning).alpha(0.08).hex(),
};

const editorLink = {
  // --------------------------------------------------
  // The link color is visible when clicking on a link.
  // --------------------------------------------------
  // NOTE: Example image available.

  // Color of active links. {default: #4e94ce}
  activeForeground: tokens.primary,
};

const editorWhitespace = {
  // ----------------------------------------------------------------
  // To see the editor white spaces, enable Toggle Render Whitespace.
  // ----------------------------------------------------------------

  // Color of whitespace characters in the editor. {default: #e3e4e229}
  foreground: chroma(tokens.onSurfaceVariant).alpha(0.3).hex(),
};

const editorInlayHint = {
  // -------------------------------------------------------------------
  // To see the editor inline hints, set "editor.inlineSuggest.enabled":
  // true.
  // -------------------------------------------------------------------

  // Background color of inline hints. {default: #4d4d4d40},
  background: undefined,

  // Foreground color of inline hints. {default: #cccccc},
  foreground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),

  // Foreground color of inline hints for types {default: #cccccc},
  typeForeground: undefined, // Done

  // Background color of inline hints for types {default: #4d4d4d40},
  typeBackground: undefined, // Done

  // Foreground color of inline hints for parameters {default: #cccccc},
  parameterForeground: undefined, // Done

  // Background color of inline hints for parameters {default: #4d4d4d40},
  parameterBackground: undefined, // Done
};

const editorRuler = {
  // ----------------------------------------------------------------
  // To see editor rulers, define their location with "editor.rulers"
  // ----------------------------------------------------------------

  // Color of the editor rulers. {default: #5a5a5a}
  foreground: undefined, // Done
};

const editorCodeLens = {
  // ------------------------------
  // CodeLens
  // ------------------------------
  // NOTE: Example image available.

  // Foreground color of an editor CodeLens. {default: #999999}
  foreground: chroma(tokens.primary).alpha(0.7).hex(),
};

const editorLightBulb = {
  // The color used for the lightbulb actions icon. {default: #ffcc00}
  foreground: tokens.warning,
};

const editorLightBulbAutoFix = {
  // The color used for the lightbulb auto fix actions icon.
  // {default: #75beff}
  foreground: tokens.info,
};

const editorBracketMatch = {
  // ------------------------------
  // Bracket Matches
  // ------------------------------
  // NOTE: Example image available.

  // Background color behind matching brackets. {default: #0064001a}
  background: tokens.surfaceContainerLowest,

  // Color for matching brackets boxes. {default: #888888}
  border: chroma(tokens.onSurfaceVariant).alpha(0.6).hex(),
};

const editorBracketHighlight = {
  // NOTE: Requires enabling bracket pair colorization

  // Foreground color of brackets (1). {default: #ffd700}
  foreground1: '#00000000',

  // Foreground color of brackets (2). {default: #da70d6}
  foreground2: '#00000000',

  // Foreground color of brackets (3). {default: #179fff}
  foreground3: '#00000000',

  // Foreground color of brackets (4). {default: #00000000}
  foreground4: '#00000000', // Done

  // Foreground color of brackets (5). {default: #00000000}
  foreground5: '#00000000', // Done

  // Foreground color of brackets (6). {default: #00000000}
  foreground6: '#00000000', // Done

  // Foreground color of unexpected brackets. {default: #ff1212cc}
  unexpectedBracket: { foreground: tokens.errorFixed },
};

const editorBracketPairGuide = {
  // NOTE: Requires enabling bracket pair guides.

  // Background color of active bracket pair guides (1).
  // {default: #00000000}
  activeBackground1: chroma(tokens.onSurfaceVariant).alpha(0.3).hex(),

  // Background color of active bracket pair guides (2).
  // {default: #00000000}
  activeBackground2: undefined, // Done

  // Background color of active bracket pair guides (3).
  // {default: #00000000}
  activeBackground3: undefined, // Done

  // Background color of active bracket pair guides (4).
  // {default: #00000000}
  activeBackground4: undefined, // Done

  // Background color of active bracket pair guides (5).
  // {default: #00000000}
  activeBackground5: undefined, // Done

  // Background color of active bracket pair guides (6).
  // {default: #00000000}
  activeBackground6: undefined, // Done

  // Background color of inactive bracket pair guides (1).
  // {default: #00000000}
  background1: chroma(tokens.onSurfaceVariant).alpha(0.08).hex(),

  // Background color of inactive bracket pair guides (2).
  // {default: #00000000}
  background2: undefined, // Done

  // Background color of inactive bracket pair guides (3).
  // {default: #00000000}
  background3: undefined, // Done

  // Background color of inactive bracket pair guides (4).
  // {default: #00000000}
  background4: undefined, // Done

  // Background color of inactive bracket pair guides (5).
  // {default: #00000000}
  background5: undefined, // Done

  // Background color of inactive bracket pair guides (6).
  // {default: #00000000}
  background6: undefined, // Done
};

const editorOverviewRuler = {
  // ---------------------------------------------------------------------
  // Overview Ruler
  // This ruler is located beneath the scroll bar on the right edge of the
  // editor and gives an overview of the decorations in the editor.
  // ---------------------------------------------------------------------

  // Background color of the editor overview ruler. Only used when the
  // minimap is enabled and placed on the right side of the editor.
  background: tokens.surfaceContainerLow,

  // Color of the overview ruler border. {default: #7f7f7f4d}
  border: tokens.outlineVariant, // Done

  // Overview ruler marker color for find matches. The color must not be
  // opaque so as not to hide underlying decorations. {default: #d186167e}
  findMatchForeground: chroma(tokens.good).alpha(0.7).hex(),

  // Overview ruler marker color for highlighted ranges, like by the Quick
  // Open, Symbol in File and Find features. The color must not be opaque
  // so as not to hide underlying decorations. {default: #007acc99}
  rangeHighlightForeground: undefined, // TODO: editorOverviewRuler.rangeHighlightForeground

  // Overview ruler marker color for selection highlights. The color must
  // not be opaque so as not to hide underlying decorations.
  // {default: #a0a0a0cc}
  selectionHighlightForeground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),

  // Overview ruler marker color for symbol highlights. The color must not
  // be opaque so as not to hide underlying decorations.
  // {default: #a0a0a0cc}
  wordHighlightForeground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),

  // Overview ruler marker color for write-access symbol highlights. The
  // color must not be opaque so as not to hide underlying decorations.
  // {default: #c0a0c0cc}
  wordHighlightStrongForeground: chroma(tokens.info).alpha(0.7).hex(),

  // Overview ruler marker color of a textual occurrence for a symbol. The
  // color must not be opaque so as not to hide underlying decorations.
  // {default: #a0a0a0cc}
  wordHighlightTextForeground: undefined,

  // Overview ruler marker color for modified content. {default: #1b81a899}
  modifiedForeground: undefined, // Done

  // Overview ruler marker color for added content. {default: #487e0299}
  addedForeground: undefined, // Done

  // Overview ruler marker color for deleted content. {default: #f14c4c99}
  deletedForeground: undefined, // Done

  // Overview ruler marker color for errors. {default: #ff1212b3}
  errorForeground: tokens.errorFixed,

  // Overview ruler marker color for warnings. {default: #cca700}
  warningForeground: tokens.warning,

  // Overview ruler marker color for infos. {default: #3794ff}
  infoForeground: tokens.info,

  // Overview ruler marker color for matching brackets. {default: #a0a0a0}
  bracketMatchForeground: tokens.onSurfaceVariant,
};

const editorError = {
  // Foreground color of error squiggles in the editor. {default: #f14c4c}
  foreground: tokens.errorFixed, // Done

  // Border color of error boxes in the editor. {default: null}
  border: undefined, // Done

  // Background color of error text in the editor. The color must not be
  // opaque so as not to hide underlying decorations. {default: null}
  background: chroma(tokens.errorContainer).alpha(0.2).hex(),
};

const editorWarning = {
  // Foreground color of warning squiggles in the editor.
  // {default: #cca700}
  foreground: tokens.warning,

  // Border color of warning boxes in the editor. {default: null}
  border: undefined, // Done

  // Background color of warning text in the editor. The color must not be
  // opaque so as not to hide underlying decorations. {default: null}
  background: chroma(tokens.warning).alpha(0.08).hex(),
};

const editorInfo = {
  // Foreground color of info squiggles in the editor. {default: #3794ff}
  foreground: tokens.info,

  // Border color of info boxes in the editor. {default: null}
  border: undefined, // Done

  // Background color of info text in the editor. The color must not be
  // opaque so as not to hide underlying decorations. {default: null}
  background: chroma(tokens.info).alpha(0.08).hex(),
};

const editorHint = {
  // Foreground color of hints in the editor. {default: #eeeeeeb3}
  foreground: undefined, // TODO: editorHint.foreground

  // Border color of hint boxes in the editor. {default: null}
  border: undefined, // TODO: editorHint.border
};

const problemsErrorIcon = {
  // The color used for the problems error icon. {default: #f14c4c}
  foreground: undefined, // Done
};

const problemsWarningIcon = {
  // The color used for the problems warning icon. {default: #cca700}
  foreground: undefined, // Done
};

const problemsInfoIcon = {
  // The color used for the problems info icon. {default: #3794ff}
  foreground: undefined, // Done
};

const editorUnnecessaryCode = {
  // ------------------
  // Unused Source Code
  // ------------------

  // Border color of unnecessary (unused) source code in the editor.
  // {default: null}
  border: undefined, // Done

  // Opacity of unnecessary (unused) source code in the editor. For example,
  // "#000000c0" will render the code with 75% opacity. For high contrast
  // themes, use the "editorUnnecessaryCode.border" theme color to underline
  // unnecessary code instead of fading it out. {default: #000000aa}
  opacity: undefined, // Done
};

const editorGutter = {
  // -----------------------------------------------------------
  // The gutter contains the glyph margins and the line numbers.
  // -----------------------------------------------------------

  // Background color of the editor gutter. The gutter contains the glyph
  // margins and the line numbers. {default: #1e1e1e}
  background: undefined, // Done

  // Color of the folding control in the editor gutter. {default: #c5c5c5}
  foldingControlForeground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),

  // Editor gutter background color for lines that are modified.
  // {default: #1b81a8}
  modifiedBackground: chroma(tokens.info).alpha(0.7).hex(),

  // Editor gutter background color for lines that are added.
  // {default: #487e02}
  addedBackground: chroma(tokens.good).alpha(0.7).hex(),

  // Editor gutter background color for lines that are deleted.
  // {default: #f14c4c}
  deletedBackground: chroma(tokens.errorFixed).alpha(0.7).hex(),

  // Editor gutter decoration color for commenting ranges. {default: #37373d}
  commentRangeForeground: undefined, // TODO: editorGutter.commentRangeForeground

  // Editor gutter decoration color for commenting glyphs. {default: #bbbbbb}
  commentGlyphForeground: undefined, // TODO: editorGutter.commentGlyphForeground

  // Editor gutter decoration color for commenting glyphs for unresolved comment
  // threads. {default: #bbbbbb}
  commentUnresolvedGlyphForeground: undefined, // TODO: editorGutter.commentUnresolvedGlyphForeground
};

const editorCommentsWidget = {
  // --------------------------------------------------------------------
  // The editor comments widget can be seen when reviewing pull requests.
  // --------------------------------------------------------------------

  // Color of borders and arrow for resolved comments. {default: #cccccc80}
  resolvedBorder: undefined, // TODO: editorCommentsWidget.resolvedBorder

  // Color of borders and arrow for unresolved comments. {default: #007fd4}
  unresolvedBorder: undefined, // TODO: editorCommentsWidget.unresolvedBorder

  // Color of background for comment ranges. {default: #007fd41a}
  rangeBackground: undefined, // TODO: editorCommentsWidget.rangeBackground

  // Color of border for comment ranges. {default: #007fd466}
  rangeBorder: undefined, // TODO: editorCommentsWidget.rangeBorder

  // Color of background for currently selected or hovered comment range.
  // {default: #007fd41a}
  rangeActiveBackground: undefined, // TODO: editorCommentsWidget.rangeActiveBackground

  // Color of border for currently selected or hovered comment range.
  // {default: #007fd466}
  rangeActiveBorder: undefined, // TODO: editorCommentsWidget.rangeActiveBorder
};

export default {
  'editor.background': editor.background,
  'editor.foreground': editor.foreground,
  'editorLineNumber.foreground': editorLineNumber.foreground,
  'editorLineNumber.activeForeground': editorLineNumber.activeForeground,
  'editorLineNumber.dimmedForeground': editorLineNumber.dimmedForeground,
  'editorCursor.background': editorCursor.background,
  'editorCursor.foreground': editorCursor.foreground,
  'editor.selectionBackground': editor.selectionBackground,
  'editor.selectionForeground': editor.selectionForeground,
  'editor.inactiveSelectionBackground': editor.inactiveSelectionBackground,
  'editor.selectionHighlightBackground': editor.selectionHighlightBackground,
  'editor.selectionHighlightBorder': editor.selectionHighlightBorder,
  'editor.wordHighlightBackground': editor.wordHighlightBackground,
  'editor.wordHighlightBorder': editor.wordHighlightBorder,
  'editor.wordHighlightStrongBackground': editor.wordHighlightStrongBackground,
  'editor.wordHighlightStrongBorder': editor.wordHighlightStrongBorder,
  'editor.wordHighlightTextBackground': editor.wordHighlightTextBackground,
  'editor.wordHighlightTextBorder': editor.wordHighlightTextBorder,
  'editor.findMatchBackground': editor.findMatchBackground,
  'editor.findMatchHighlightBackground': editor.findMatchHighlightBackground,
  'editor.findRangeHighlightBackground': editor.findRangeHighlightBackground,
  'editor.findMatchBorder': editor.findMatchBorder,
  'editor.findMatchHighlightBorder': editor.findMatchHighlightBorder,
  'editor.findRangeHighlightBorder': editor.findRangeHighlightBorder,
  'search.resultsInfoForeground': search.resultsInfoForeground,
  'searchEditor.findMatchBackground': searchEditor.findMatchBackground,
  'searchEditor.findMatchBorder': searchEditor.findMatchBorder,
  'searchEditor.textInputBorder': searchEditor.textInputBorder,
  'editor.hoverHighlightBackground': editor.hoverHighlightBackground,
  'editor.lineHighlightBackground': editor.lineHighlightBackground,
  'editor.lineHighlightBorder': editor.lineHighlightBorder,
  'editorUnicodeHighlight.border': editorUnicodeHighlight.border,
  'editorUnicodeHighlight.background': editorUnicodeHighlight.background,
  'editorLink.activeForeground': editorLink.activeForeground,
  'editor.rangeHighlightBackground': editor.rangeHighlightBackground,
  'editor.rangeHighlightBorder': editor.rangeHighlightBorder,
  'editor.symbolHighlightBackground': editor.symbolHighlightBackground,
  'editor.symbolHighlightBorder': editor.symbolHighlightBorder,
  'editorWhitespace.foreground': editorWhitespace.foreground,
  'editorInlayHint.background': editorInlayHint.background,
  'editorInlayHint.foreground': editorInlayHint.foreground,
  'editorInlayHint.typeForeground': editorInlayHint.typeForeground,
  'editorInlayHint.typeBackground': editorInlayHint.typeBackground,
  'editorInlayHint.parameterForeground': editorInlayHint.parameterForeground,
  'editorInlayHint.parameterBackground': editorInlayHint.parameterBackground,
  'editorRuler.foreground': editorRuler.foreground,
  'editor.linkedEditingBackground': editor.linkedEditingBackground,
  'editorCodeLens.foreground': editorCodeLens.foreground,
  'editorLightBulb.foreground': editorLightBulb.foreground,
  'editorLightBulbAutoFix.foreground': editorLightBulbAutoFix.foreground,
  'editorBracketMatch.background': editorBracketMatch.background,
  'editorBracketMatch.border': editorBracketMatch.border,
  'editorBracketHighlight.foreground1': editorBracketHighlight.foreground1,
  'editorBracketHighlight.foreground2': editorBracketHighlight.foreground2,
  'editorBracketHighlight.foreground3': editorBracketHighlight.foreground3,
  'editorBracketHighlight.foreground4': editorBracketHighlight.foreground4,
  'editorBracketHighlight.foreground5': editorBracketHighlight.foreground5,
  'editorBracketHighlight.foreground6': editorBracketHighlight.foreground6,
  'editorBracketHighlight.unexpectedBracket.foreground': editorBracketHighlight.unexpectedBracket.foreground,
  'editorBracketPairGuide.activeBackground1': editorBracketPairGuide.activeBackground1,
  'editorBracketPairGuide.activeBackground2': editorBracketPairGuide.activeBackground2,
  'editorBracketPairGuide.activeBackground3': editorBracketPairGuide.activeBackground3,
  'editorBracketPairGuide.activeBackground4': editorBracketPairGuide.activeBackground4,
  'editorBracketPairGuide.activeBackground5': editorBracketPairGuide.activeBackground5,
  'editorBracketPairGuide.activeBackground6': editorBracketPairGuide.activeBackground6,
  'editorBracketPairGuide.background1': editorBracketPairGuide.background1,
  'editorBracketPairGuide.background2': editorBracketPairGuide.background2,
  'editorBracketPairGuide.background3': editorBracketPairGuide.background3,
  'editorBracketPairGuide.background4': editorBracketPairGuide.background4,
  'editorBracketPairGuide.background5': editorBracketPairGuide.background5,
  'editorBracketPairGuide.background6': editorBracketPairGuide.background6,
  'editor.foldBackground': editor.foldBackground,
  'editorOverviewRuler.background': editorOverviewRuler.background,
  'editorOverviewRuler.border': editorOverviewRuler.border,
  'editorOverviewRuler.findMatchForeground': editorOverviewRuler.findMatchForeground,
  'editorOverviewRuler.rangeHighlightForeground': editorOverviewRuler.rangeHighlightForeground,
  'editorOverviewRuler.selectionHighlightForeground': editorOverviewRuler.selectionHighlightForeground,
  'editorOverviewRuler.wordHighlightForeground': editorOverviewRuler.wordHighlightForeground,
  'editorOverviewRuler.wordHighlightStrongForeground': editorOverviewRuler.wordHighlightStrongForeground,
  'editorOverviewRuler.wordHighlightTextForeground': editorOverviewRuler.wordHighlightTextForeground,
  'editorOverviewRuler.modifiedForeground': editorOverviewRuler.modifiedForeground,
  'editorOverviewRuler.addedForeground': editorOverviewRuler.addedForeground,
  'editorOverviewRuler.deletedForeground': editorOverviewRuler.deletedForeground,
  'editorOverviewRuler.errorForeground': editorOverviewRuler.errorForeground,
  'editorOverviewRuler.warningForeground': editorOverviewRuler.warningForeground,
  'editorOverviewRuler.infoForeground': editorOverviewRuler.infoForeground,
  'editorOverviewRuler.bracketMatchForeground': editorOverviewRuler.bracketMatchForeground,
  'editorError.foreground': editorError.foreground,
  'editorError.border': editorError.border,
  'editorError.background': editorError.background,
  'editorWarning.foreground': editorWarning.foreground,
  'editorWarning.border': editorWarning.border,
  'editorWarning.background': editorWarning.background,
  'editorInfo.foreground': editorInfo.foreground,
  'editorInfo.border': editorInfo.border,
  'editorInfo.background': editorInfo.background,
  'editorHint.foreground': editorHint.foreground,
  'editorHint.border': editorHint.border,
  'problemsErrorIcon.foreground': problemsErrorIcon.foreground,
  'problemsWarningIcon.foreground': problemsWarningIcon.foreground,
  'problemsInfoIcon.foreground': problemsInfoIcon.foreground,
  'editorUnnecessaryCode.border': editorUnnecessaryCode.border,
  'editorUnnecessaryCode.opacity': editorUnnecessaryCode.opacity,
  'editorGutter.background': editorGutter.background,
  'editorGutter.modifiedBackground': editorGutter.modifiedBackground,
  'editorGutter.addedBackground': editorGutter.addedBackground,
  'editorGutter.deletedBackground': editorGutter.deletedBackground,
  'editorGutter.commentRangeForeground': editorGutter.commentRangeForeground,
  'editorGutter.commentGlyphForeground': editorGutter.commentGlyphForeground,
  'editorGutter.commentUnresolvedGlyphForeground': editorGutter.commentUnresolvedGlyphForeground,
  'editorGutter.foldingControlForeground': editorGutter.foldingControlForeground,
  'editorCommentsWidget.resolvedBorder': editorCommentsWidget.resolvedBorder,
  'editorCommentsWidget.unresolvedBorder': editorCommentsWidget.unresolvedBorder,
  'editorCommentsWidget.rangeBackground': editorCommentsWidget.rangeBackground,
  'editorCommentsWidget.rangeBorder': editorCommentsWidget.rangeBorder,
  'editorCommentsWidget.rangeActiveBackground': editorCommentsWidget.rangeActiveBackground,
  'editorCommentsWidget.rangeActiveBorder': editorCommentsWidget.rangeActiveBorder,
};
