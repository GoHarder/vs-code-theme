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
import notification from './notification.js';
import banner from './banner.js';
import extension from './extension.js';
import quickPicker from './quick-picker.js';
import keybindingLabel from './keybinding-label.js';
import keyboardShortcutTable from './keyboard-shortcut-table.js';
import integratedTerminal from './integrated-terminal.js';
import debug from './debug.js';
import testing from './testing.js';
import welcomePage from './welcome-page.js';
import git from './git.js';
import settingsEditor from './settings-editor.js';
import breadcrumbs from './breadcrumbs.js';
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
  editorGroupsAndTabs, // NOTE: Bookmark
  editor,
  diffEditor,
  chat,
  inlineChat,
  editorWidget,
  peekView,
  mergeConflicts,
  panel,
  statusBar,
  titleBar, // DONE
  menuBar, // DONE
  commandCenter, // DONE
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
