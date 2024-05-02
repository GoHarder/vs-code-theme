import chroma from 'chroma-js';
import { tokens } from '../colors.js';

const commentsView = {
  // Icon color for resolved comments. {default: #cccccc80}
  resolvedIcon: undefined, // TODO: commentsView.resolvedIcon

  // Icon color for unresolved comments. {default: #007fd4}
  unresolvedIcon: undefined, // TODO: commentsView.unresolvedIcon
};

export default {
  'commentsView.resolvedIcon': commentsView.resolvedIcon,
  'commentsView.unresolvedIcon': commentsView.unresolvedIcon,
};
