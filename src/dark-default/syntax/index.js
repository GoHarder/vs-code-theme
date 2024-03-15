// import peek from 'tm-themes/themes/andromeeda.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/aurora-x.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/ayu-dark.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/catppuccin-frappe.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/catppuccin-macchiato.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/catppuccin-mocha.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/dark-plus.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/dracula.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/dracula-soft.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/github-dark.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/github-dark-dimmed.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/material-theme.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/material-theme-darker.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/material-theme-ocean.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/material-theme-palenight.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/min-dark.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/monokai.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/night-owl.json' assert { type: 'json' };
import peek from 'tm-themes/themes/nord.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/one-dark-pro.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/poimandres.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/red.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/rose-pine.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/rose-pine-moon.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/slack-dark.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/solarized-dark.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/synthwave-84.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/tokyo-night.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/vesper.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/vitesse-black.json' assert { type: 'json' };
// import peek from 'tm-themes/themes/vitesse-dark.json' assert { type: 'json' };

import textMate from './text-mate.js';
import tokens from './token.js';

import { scopes as def, icons as defIco } from './default.js';
import { editor } from '../colors.js';

const root = [
  {
    scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
    settings: {
      foreground: '#D4D4D4',
    },
  },
  {
    scope: 'header',
    settings: {
      foreground: '#000080',
    },
  },
  {
    scope: 'comment',
    settings: {
      foreground: '#6A9955',
    },
  },
  {
    scope: 'constant.language',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: ['constant.numeric', 'variable.other.enummember', 'keyword.operator.plus.exponent', 'keyword.operator.minus.exponent'],
    settings: {
      foreground: '#B5CEA8',
    },
  },
  {
    scope: 'constant.regexp',
    settings: {
      foreground: '#646695',
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: ['entity.name.tag.css', 'entity.name.tag.less'],
    settings: {
      foreground: '#D7BA7D',
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: '#9CDCFE',
    },
  },
  {
    scope: [
      'entity.other.attribute-name.class.css',
      'source.css entity.other.attribute-name.class',
      'entity.other.attribute-name.id.css',
      'entity.other.attribute-name.parent-selector.css',
      'entity.other.attribute-name.parent.less',
      'source.css entity.other.attribute-name.pseudo-class',
      'entity.other.attribute-name.pseudo-element.css',
      'source.css.less entity.other.attribute-name.id',
      'entity.other.attribute-name.scss',
    ],
    settings: {
      foreground: '#D7BA7D',
    },
  },
  {
    scope: 'invalid',
    settings: {
      foreground: '#F44747',
    },
  },
  {
    scope: 'markup.underline',
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: 'markup.bold',
    settings: {
      foreground: '#569CD6',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      foreground: '#569CD6',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.italic',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: 'markup.strikethrough',
    settings: {
      fontStyle: 'strikethrough',
    },
  },
  {
    scope: 'markup.inserted',
    settings: {
      foreground: '#B5CEA8',
    },
  },
  {
    scope: 'markup.deleted',
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: 'markup.changed',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'punctuation.definition.quote.begin.markdown',
    settings: {
      foreground: '#6A9955',
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: '#6796E6',
    },
  },
  {
    scope: 'markup.inline.raw',
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: '#808080',
    },
  },
  {
    scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'meta.preprocessor.string',
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: 'meta.preprocessor.numeric',
    settings: {
      foreground: '#B5CEA8',
    },
  },
  {
    scope: 'meta.structure.dictionary.key.python',
    settings: {
      foreground: '#9CDCFE',
    },
  },
  {
    scope: 'meta.diff.header',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'storage',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'storage.type',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: ['storage.modifier', 'keyword.operator.noexcept'],
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: ['string', 'meta.embedded.assembly'],
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: 'string.tag',
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: 'string.value',
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: 'string.regexp',
    settings: {
      foreground: '#D16969',
    },
  },
  {
    scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end', 'punctuation.section.embedded'],
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: ['meta.template.expression'],
    settings: {
      foreground: '#D4D4D4',
    },
  },
  {
    scope: ['support.type.vendored.property-name', 'support.type.property-name', 'source.css variable', 'source.coffee.embedded'],
    settings: {
      foreground: '#9CDCFE',
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'keyword.control',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      foreground: '#D4D4D4',
    },
  },
  {
    scope: [
      'keyword.operator.new',
      'keyword.operator.expression',
      'keyword.operator.cast',
      'keyword.operator.sizeof',
      'keyword.operator.alignof',
      'keyword.operator.typeid',
      'keyword.operator.alignas',
      'keyword.operator.instanceof',
      'keyword.operator.logical.python',
      'keyword.operator.wordlike',
    ],
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'keyword.other.unit',
    settings: {
      foreground: '#B5CEA8',
    },
  },
  {
    scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'support.function.git-rebase',
    settings: {
      foreground: '#9CDCFE',
    },
  },
  {
    scope: 'constant.sha.git-rebase',
    settings: {
      foreground: '#B5CEA8',
    },
  },
  {
    scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
    settings: {
      foreground: '#D4D4D4',
    },
  },
  {
    scope: 'variable.language',
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: ['entity.name.function', 'support.function', 'support.constant.handlebars', 'source.powershell variable.other.member', 'entity.name.operator.custom-literal'],
    settings: {
      foreground: '#DCDCAA',
    },
  },
  {
    scope: [
      'support.class',
      'support.type',
      'entity.name.type',
      'entity.name.namespace',
      'entity.other.attribute',
      'entity.name.scope-resolution',
      'entity.name.class',
      'storage.type.numeric.go',
      'storage.type.byte.go',
      'storage.type.boolean.go',
      'storage.type.string.go',
      'storage.type.uintptr.go',
      'storage.type.error.go',
      'storage.type.rune.go',
      'storage.type.cs',
      'storage.type.generic.cs',
      'storage.type.modifier.cs',
      'storage.type.variable.cs',
      'storage.type.annotation.java',
      'storage.type.generic.java',
      'storage.type.java',
      'storage.type.object.array.java',
      'storage.type.primitive.array.java',
      'storage.type.primitive.java',
      'storage.type.token.java',
      'storage.type.groovy',
      'storage.type.annotation.groovy',
      'storage.type.parameters.groovy',
      'storage.type.generic.groovy',
      'storage.type.object.array.groovy',
      'storage.type.primitive.array.groovy',
      'storage.type.primitive.groovy',
    ],
    settings: {
      foreground: '#4EC9B0',
    },
  },
  {
    scope: ['meta.type.cast.expr', 'meta.type.new.expr', 'support.constant.math', 'support.constant.dom', 'support.constant.json', 'entity.other.inherited-class'],
    settings: {
      foreground: '#4EC9B0',
    },
  },
  {
    scope: [
      'keyword.control',
      'source.cpp keyword.operator.new',
      'keyword.operator.delete',
      'keyword.other.using',
      'keyword.other.directive.using',
      'keyword.other.operator',
      'entity.name.operator',
    ],
    settings: {
      foreground: '#C586C0',
    },
  },
  {
    scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable', 'constant.other.placeholder'],
    settings: {
      foreground: '#9CDCFE',
    },
  },
  {
    scope: ['variable.other.constant', 'variable.other.enummember'],
    settings: {
      foreground: '#4FC1FF',
    },
  },
  {
    scope: ['meta.object-literal.key'],
    settings: {
      foreground: '#9CDCFE',
    },
  },
  {
    scope: [
      'support.constant.property-value',
      'support.constant.font-name',
      'support.constant.media-type',
      'support.constant.media',
      'constant.other.color.rgb-value',
      'constant.other.rgb-value',
      'support.constant.color',
    ],
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: [
      'punctuation.definition.group.regexp',
      'punctuation.definition.group.assertion.regexp',
      'punctuation.definition.character-class.regexp',
      'punctuation.character.set.begin.regexp',
      'punctuation.character.set.end.regexp',
      'keyword.operator.negation.regexp',
      'support.other.parenthesis.regexp',
    ],
    settings: {
      foreground: '#CE9178',
    },
  },
  {
    scope: [
      'constant.character.character-class.regexp',
      'constant.other.character-class.set.regexp',
      'constant.other.character-class.regexp',
      'constant.character.set.regexp',
    ],
    settings: {
      foreground: '#D16969',
    },
  },
  {
    scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
    settings: {
      foreground: '#DCDCAA',
    },
  },
  {
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: '#D7BA7D',
    },
  },
  {
    scope: ['constant.character', 'constant.other.option'],
    settings: {
      foreground: '#569CD6',
    },
  },
  {
    scope: 'constant.character.escape',
    settings: {
      foreground: '#D7BA7D',
    },
  },
  {
    scope: 'entity.name.label',
    settings: {
      foreground: '#C8C8C8',
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: '#B267E6',
    },
  },
];

const settings = [
  // {
  //   scope: 'punctuation',
  //   settings: {
  //     foreground: editor.foreground1,
  //     fontStyle: '',
  //   },
  // },
  {
    scope: 'comment punctuation',
    settings: {
      foreground: editor.foreground0,
      fontStyle: '',
    },
  },
  ...textMate,
  ...tokens,
];

export const icons = defIco;

export const tokenColors = def;
// export const tokenColors= root;
// export const tokenColors= settings;
// export const tokenColors= peek.tokenColors;
