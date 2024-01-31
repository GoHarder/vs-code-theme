import baseColors from './base-colors.js';
import windowBorder from './window-border.js';
import text from './text.js';
import actionColors from './action-colors.js';
import buttonControl from './button-control.js';
import dropdownControl from './dropdown-control.js';
import inputControl from './input-control.js';
import scrollbarControl from './scrollbar-control.js';
import badge from './badge.js';
import progressbar from './progressbar.js';
import listsAndTrees from './lists-and-trees.js';
import activityBar from './activity-bar.js';
import profiles from './profiles.js';
import sideBar from './side-bar.js';
import minimap from './minimap.js';
import editorGroupsAndTabs from './editor-groups-and-tabs.js';
import editor from './editor.js';
import diffEditor from './diff-editor.js';
import chat from './chat.js';
import inlineChat from './inline-chat.js';
import editorWidget from './editor-widget.js';
import peekView from './peek-view.js';
import mergeConflicts from './merge-conflicts.js';
import panel from './panel.js';
import statusBar from './status-bar.js';
import titleBar from './title-bar.js';
import menuBar from './menu-bar.js';
import commandCenter from './command-center.js';
import notification from './notification.js'; // NOTE: Checked
import banner from './banner.js';
import extension from './extension.js'; // NOTE: Done
import quickPicker from './quick-picker.js';
import keybindingLabel from './keybinding-label.js'; // NOTE: Done
import keyboardShortcutTable from './keyboard-shortcut-table.js'; // NOTE: Done
import integratedTerminal from './integrated-terminal.js'; // NOTE: Done
import debug from './debug.js';
import testing from './testing.js';
import welcomePage from './welcome-page.js'; // NOTE: Done
import sourceControl from './source-control.js'; // NOTE: Done
import git from './git.js'; // NOTE: Done
import settingsEditor from './settings-editor.js'; // NOTE: Done
import breadcrumbs from './breadcrumbs.js'; // NOTE: Done
import snippets from './snippets.js';
import symbolIcons from './symbol-icons.js';
import debugIcons from './debug-icons.js';
import notebook from './notebook.js';
import chart from './chart.js';
import ports from './ports.js';
import commentsView from './comments-view.js';

const rawSections = [
  baseColors,
  windowBorder,
  text,
  actionColors,
  buttonControl,
  dropdownControl,
  inputControl,
  scrollbarControl,
  badge,
  progressbar,
  listsAndTrees,
  activityBar,
  profiles,
  sideBar,
  minimap,
  editorGroupsAndTabs,
  editor,
  diffEditor,
  chat,
  inlineChat,
  editorWidget,
  peekView,
  mergeConflicts,
  panel,
  statusBar,
  titleBar,
  menuBar,
  commandCenter,
  notification,
  banner,
  extension,
  quickPicker,
  keybindingLabel,
  keyboardShortcutTable,
  integratedTerminal,
  debug,
  testing,
  welcomePage,
  sourceControl,
  git,
  settingsEditor,
  breadcrumbs,
  snippets,
  symbolIcons,
  debugIcons,
  notebook,
  chart,
  ports,
  commentsView,
];

const mappedSections = rawSections.map((section) => {
  const output = {};

  for (const key in section) {
    let value = section[key];
    if (value === undefined) continue;

    if (typeof value === 'string') {
      value = value.toLowerCase();
    }

    output[key] = value;
  }

  return output;
});

const mergedSections = mappedSections.reduce((output, section) => {
  output = { ...output, ...section };

  return output;
}, {});

export default mergedSections;
