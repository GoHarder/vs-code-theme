import chroma from 'chroma-js';
import { tokens } from '../colors.js';

const gitDecoration = {
  // NOTE: Used for file labels and the SCM viewlet.

  // Color for added Git resources. {default: #81b88b}
  addedResourceForeground: chroma(tokens.good).alpha(0.7).hex(),

  // Color for renamed or copied Git resources. {default: #73c991}
  renamedResourceForeground: tokens.good,

  // Color for untracked Git resources. {default: #73c991}
  untrackedResourceForeground: tokens.good,

  // Color for conflicting Git resources. {default: #e4676b}
  conflictingResourceForeground: tokens.altErrorFixed,

  // Color for deleted Git resources. {default: #c74e39}
  deletedResourceForeground: tokens.altErrorFixed,

  // Color for staged deletions git decorations. {default: #c74e39}
  stageDeletedResourceForeground: chroma(tokens.altErrorFixed).alpha(0.7).hex(),

  // Color for modified Git resources. {default: #e2c08d}
  modifiedResourceForeground: tokens.altWarning,

  // Color for staged modifications git decorations. {default: #e2c08d}
  stageModifiedResourceForeground: chroma(tokens.altWarning).alpha(0.7).hex(),

  // Color for ignored Git resources. {default: #8c8c8c}
  ignoredResourceForeground: chroma(tokens.onSurfaceVariant).alpha(0.7).hex(),

  // Color for submodule resources. {default: #8db9e2}
  submoduleResourceForeground: tokens.info,
};

export default {
  'gitDecoration.addedResourceForeground': gitDecoration.addedResourceForeground,
  'gitDecoration.modifiedResourceForeground': gitDecoration.modifiedResourceForeground,
  'gitDecoration.deletedResourceForeground': gitDecoration.deletedResourceForeground,
  'gitDecoration.renamedResourceForeground': gitDecoration.renamedResourceForeground,
  'gitDecoration.stageModifiedResourceForeground': gitDecoration.stageModifiedResourceForeground,
  'gitDecoration.stageDeletedResourceForeground': gitDecoration.stageDeletedResourceForeground,
  'gitDecoration.untrackedResourceForeground': gitDecoration.untrackedResourceForeground,
  'gitDecoration.ignoredResourceForeground': gitDecoration.ignoredResourceForeground,
  'gitDecoration.conflictingResourceForeground': gitDecoration.conflictingResourceForeground,
  'gitDecoration.submoduleResourceForeground': gitDecoration.submoduleResourceForeground,
};
