// --------------------------------------------------------------------
// Notification Colors
// Notification toasts slide up from the bottom-right of the workbench.
// Once opened in the Notification Center, they are displayed in a list
// with a header.
// --------------------------------------------------------------------

import { tokens } from '../colors/interface.js';

const notificationCenter = {
  // Notification Center border color. {default: null}
  border: undefined, // TODO: notificationCenter.border
};

const notificationCenterHeader = {
  // Notification Center header foreground color. {default: null}
  foreground: tokens.onSurface,

  // Notification Center header background color. {default: #303031}
  background: tokens.surfaceContainer,
};

const notificationToast = {
  // Notification toast border color. {default: null}
  border: undefined, // TODO: notificationToast.border
};

const notifications = {
  // Notification foreground color.
  foreground: tokens.onSurfaceVariant,

  // Notification background color.
  background: tokens.surfaceContainerLow,

  // Notification border color separating from other notifications in the
  // Notification Center. {default: #303031}
  border: tokens.outlineVariant,
};

const notificationLink = {
  // Notification links foreground color. {default: #3794ff}
  foreground: undefined, // TODO: notificationLink.foreground
};

const notificationsErrorIcon = {
  // The color used for the notification error icon. {default: #f14c4c}
  foreground: undefined, // Done
};

const notificationsWarningIcon = {
  // The color used for the notification warning icon. {default: #cca700}
  foreground: undefined, // Done
};

const notificationsInfoIcon = {
  // The color used for the notification info icon. {default: #3794ff}
  foreground: undefined, // Done
};

export default {
  'notificationCenter.border': notificationCenter.border,
  'notificationCenterHeader.foreground': notificationCenterHeader.foreground,
  'notificationCenterHeader.background': notificationCenterHeader.background,
  'notificationToast.border': notificationToast.border,
  'notifications.foreground': notifications.foreground,
  'notifications.background': notifications.background,
  'notifications.border': notifications.border,
  'notificationLink.foreground': notificationLink.foreground,
  'notificationsErrorIcon.foreground': notificationsErrorIcon.foreground,
  'notificationsWarningIcon.foreground': notificationsWarningIcon.foreground,
  'notificationsInfoIcon.foreground': notificationsInfoIcon.foreground,
};
