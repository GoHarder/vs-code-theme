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
// import peek from 'tm-themes/themes/nord.json' assert { type: 'json' };
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
import peek from 'tm-themes/themes/vitesse-dark.json' assert { type: 'json' };

import textMate from './text-mate.js';

import comment from './comment.js';
import constant from './constant.js';
import entity from './entity.js';
import string from './string.js';
import token from './token.js';
import def from './default.js';

import { syntax, tokens } from '../colors/interface.js';

const root = [
  {
    scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
    settings: {
      foreground: '#D4D4D4',
    },
  },
  {
    scope: 'emphasis',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: 'strong',
    settings: {
      fontStyle: 'bold',
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
    scope: 'keyword.other.dotenv',
    settings: {
      foreground: '#FF000000',
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: '#6796E6',
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: '#CD9731',
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: '#F44747',
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: '#B267E6',
    },
  },
];

const current = [
  {
    scope: 'emphasis',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: 'strong',
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.underline',
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: 'markup.strikethrough',
    settings: {
      fontStyle: 'strikethrough',
    },
  },
  {
    scope: 'markup.italic',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown'],
    settings: {
      foreground: syntax.keyword_operator,
    },
  },
  {
    scope: 'header',
    settings: {
      foreground: syntax.header,
    },
  },
  {
    scope: 'comment',
    settings: {
      foreground: syntax.comment,
    },
  },
  {
    scope: 'constant.language',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: ['constant.numeric', 'variable.other.enummember', 'keyword.operator.plus.exponent', 'keyword.operator.minus.exponent'],
    settings: {
      foreground: syntax.constant_numeric,
    },
  },
  {
    scope: 'constant.regexp',
    settings: {
      foreground: syntax.variable_other,
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'entity.name.tag.css',
    settings: {
      foreground: syntax.css_tag,
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    scope: [
      'entity.other.attribute-name.class.css',
      'entity.other.attribute-name.class.mixin.css',
      'entity.other.attribute-name.id.css',
      'entity.other.attribute-name.parent-selector.css',
      'entity.other.attribute-name.pseudo-class.css',
      'entity.other.attribute-name.pseudo-element.css',
      'source.css.less entity.other.attribute-name.id',
      'entity.other.attribute-name.scss',
    ],
    settings: {
      foreground: syntax.css_tag,
    },
  },
  {
    scope: 'invalid',
    settings: {
      foreground: tokens.errorFixed,
    },
  },
  {
    scope: 'markup.bold',
    settings: {
      fontStyle: 'bold',
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      fontStyle: 'bold',
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'markup.inserted',
    settings: {
      foreground: syntax.constant_numeric,
    },
  },
  {
    scope: 'markup.deleted',
    settings: {
      foreground: syntax.string,
    },
  },
  {
    scope: 'markup.changed',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'punctuation.definition.quote.begin.markdown',
    settings: {
      foreground: syntax.comment,
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: syntax.variable_other,
    },
  },
  {
    scope: 'markup.inline.raw',
    settings: {
      foreground: syntax.string,
    },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: syntax.tag,
    },
  },
  {
    scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'meta.preprocessor.string',
    settings: {
      foreground: syntax.string,
    },
  },
  {
    scope: 'meta.preprocessor.numeric',
    settings: {
      foreground: syntax.constant_numeric,
    },
  },
  {
    scope: 'meta.structure.dictionary.key.python',
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    scope: 'meta.diff.header',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'storage',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'storage.type',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: ['storage.modifier', 'keyword.operator.noexcept'],
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: ['string', 'meta.embedded.assembly'],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    scope: 'string.tag',
    settings: {
      foreground: syntax.string,
    },
  },
  {
    scope: 'string.value',
    settings: {
      foreground: syntax.string,
    },
  },
  {
    scope: 'string.regexp',
    settings: {
      foreground: syntax.regex,
    },
  },
  {
    scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end', 'punctuation.section.embedded'],
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: ['meta.template.expression'],
    settings: {
      foreground: syntax.keyword_operator,
    },
  },
  {
    scope: ['support.type.vendored.property-name', 'support.type.property-name', 'variable.css', 'variable.scss', 'variable.other.less', 'source.coffee.embedded'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'keyword.control',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      foreground: syntax.keyword_operator,
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
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'keyword.other.unit',
    settings: {
      foreground: syntax.function,
    },
  },
  {
    scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'support.function.git-rebase',
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    scope: 'constant.sha.git-rebase',
    settings: {
      foreground: syntax.constant_numeric,
    },
  },
  {
    scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
    settings: {
      foreground: syntax.keyword_operator,
    },
  },
  {
    scope: 'variable.language',
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: ['entity.name.function', 'support.function', 'support.constant.handlebars', 'source.powershell variable.other.member', 'entity.name.operator.custom-literal'],
    settings: {
      foreground: syntax.function,
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
      foreground: syntax.class,
    },
  },
  {
    scope: ['meta.type.cast.expr', 'meta.type.new.expr', 'support.constant.math', 'support.constant.dom', 'support.constant.json', 'entity.other.inherited-class'],
    settings: {
      foreground: syntax.class,
    },
  },
  {
    scope: ['keyword.control', 'source.cpp keyword.operator.new', 'keyword.operator.delete', 'keyword.other.using', 'keyword.other.operator', 'entity.name.operator'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable', 'constant.other.placeholder'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    scope: ['variable.other.constant', 'variable.other.enummember'],
    settings: {
      foreground: syntax.variable_other,
    },
  },
  {
    scope: ['meta.object-literal.key'],
    settings: {
      foreground: syntax.variable,
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
      foreground: syntax.string,
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
      foreground: syntax.string,
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
      foreground: syntax.regex,
    },
  },
  {
    scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
    settings: {
      foreground: syntax.function,
    },
  },
  {
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: syntax.css_tag,
    },
  },
  {
    scope: ['constant.character', 'constant.other.option'],
    settings: {
      foreground: syntax.constant_language,
    },
  },
  {
    scope: 'constant.character.escape',
    settings: {
      foreground: syntax.css_tag,
    },
  },
  {
    scope: 'entity.name.label',
    settings: {
      foreground: syntax.label,
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: tokens.info,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: tokens.warning,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: tokens.errorFixed,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: syntax.debug_token,
    },
  },
];

const copy = [
  {
    scope: 'emphasis',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: 'strong',
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: 'comment',
    settings: {
      foreground: '#616E88',
    },
  },
  {
    scope: 'constant.character',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'constant.character.escape',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'constant.language',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'constant.numeric',
    settings: {
      foreground: '#B48EAD',
    },
  },
  {
    scope: 'constant.regexp',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: ['entity.name.class', 'entity.name.type.class'],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'entity.name.function',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: '#8FBCBB',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'invalid.deprecated',
    settings: {
      foreground: '#D8DEE9',
      background: '#EBCB8B',
    },
  },
  {
    scope: 'invalid.illegal',
    settings: {
      foreground: '#D8DEE9',
      background: '#BF616A',
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'keyword.other.new',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'markup.bold',
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.changed',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'markup.deleted',
    settings: {
      foreground: '#BF616A',
    },
  },
  {
    scope: 'markup.inserted',
    settings: {
      foreground: '#A3BE8C',
    },
  },
  {
    scope: 'meta.preprocessor',
    settings: {
      foreground: '#5E81AC',
    },
  },
  {
    scope: 'punctuation',
    settings: {
      foreground: '#ECEFF4',
    },
  },
  {
    scope: ['punctuation.definition.method-parameters', 'punctuation.definition.function-parameters', 'punctuation.definition.parameters'],
    settings: {
      foreground: '#ECEFF4',
    },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['punctuation.definition.comment', 'punctuation.end.definition.comment', 'punctuation.start.definition.comment'],
    settings: {
      foreground: '#616E88',
    },
  },
  {
    scope: 'punctuation.section',
    settings: {
      foreground: '#ECEFF4',
    },
  },
  {
    scope: ['punctuation.section.embedded.begin', 'punctuation.section.embedded.end'],
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'punctuation.terminator',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'punctuation.definition.variable',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'storage',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'string',
    settings: {
      foreground: '#A3BE8C',
    },
  },
  {
    scope: 'string.regexp',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'support.class',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'support.constant',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'support.function',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'support.function.construct',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'support.type',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'support.type.exception',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: '#B48EAD',
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: '#BF616A',
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'variable.other',
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: 'variable.language',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'variable.parameter',
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: 'punctuation.separator.pointer-access.c',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['source.c meta.preprocessor.include', 'source.c string.quoted.other.lt-gt.include'],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: [
      'source.cpp keyword.control.directive.conditional',
      'source.cpp punctuation.definition.directive',
      'source.c keyword.control.directive.conditional',
      'source.c punctuation.definition.directive',
    ],
    settings: {
      foreground: '#5E81AC',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'source.css constant.other.color.rgb-value',
    settings: {
      foreground: '#B48EAD',
    },
  },
  {
    scope: 'source.css meta.property-value',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: ['source.css keyword.control.at-rule.media', 'source.css keyword.control.at-rule.media punctuation.definition.keyword'],
    settings: {
      foreground: '#D08770',
    },
  },
  {
    scope: 'source.css punctuation.definition.keyword',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'source.css support.type.property-name',
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: 'source.diff meta.diff.range.context',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.diff meta.diff.header.from-file',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.diff punctuation.definition.from-file',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.diff punctuation.definition.range',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.diff punctuation.definition.separator',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'entity.name.type.module.elixir',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'variable.other.readwrite.module.elixir',
    settings: {
      foreground: '#D8DEE9',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'constant.other.symbol.elixir',
    settings: {
      foreground: '#D8DEE9',
      fontStyle: 'bold',
    },
  },
  {
    scope: 'variable.other.constant.elixir',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.go constant.other.placeholder.go',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'source.java comment.block.documentation.javadoc punctuation.definition.entity.html',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'source.java constant.other',
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: 'source.java keyword.other.documentation',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java keyword.other.documentation.author.javadoc',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: ['source.java keyword.other.documentation.directive', 'source.java keyword.other.documentation.custom'],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java keyword.other.documentation.see.javadoc',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java meta.method-call meta.method',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: ['source.java meta.tag.template.link.javadoc', 'source.java string.other.link.title.javadoc'],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java meta.tag.template.value.javadoc',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'source.java punctuation.definition.keyword.javadoc',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: ['source.java punctuation.definition.tag.begin.javadoc', 'source.java punctuation.definition.tag.end.javadoc'],
    settings: {
      foreground: '#616E88',
    },
  },
  {
    scope: 'source.java storage.modifier.import',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java storage.modifier.package',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java storage.type',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java storage.type.annotation',
    settings: {
      foreground: '#D08770',
    },
  },
  {
    scope: 'source.java storage.type.generic',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'source.java storage.type.primitive',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['source.js punctuation.decorator', 'source.js meta.decorator variable.other.readwrite', 'source.js meta.decorator entity.name.function'],
    settings: {
      foreground: '#D08770',
    },
  },
  {
    scope: 'source.js meta.object-literal.key',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'source.js storage.type.class.jsdoc',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: [
      'source.js string.quoted.template punctuation.quasi.element.begin',
      'source.js string.quoted.template punctuation.quasi.element.end',
      'source.js string.template punctuation.definition.template-expression',
    ],
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'source.js string.quoted.template meta.method-call.with-arguments',
    settings: {
      foreground: '#ECEFF4',
    },
  },
  {
    scope: ['source.js string.template meta.template.expression support.variable.property', 'source.js string.template meta.template.expression variable.other.object'],
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: 'source.js support.type.primitive',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'source.js variable.other.object',
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: 'source.js variable.other.readwrite.alias',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: [
      'source.js meta.embedded.line meta.brace.square',
      'source.js meta.embedded.line meta.brace.round',
      'source.js string.quoted.template meta.brace.square',
      'source.js string.quoted.template meta.brace.round',
    ],
    settings: {
      foreground: '#ECEFF4',
    },
  },
  {
    scope: 'text.html.basic constant.character.entity.html',
    settings: {
      foreground: '#EBCB8B',
    },
  },
  {
    scope: 'text.html.basic constant.other.inline-data',
    settings: {
      foreground: '#D08770',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'text.html.basic meta.tag.sgml.doctype',
    settings: {
      foreground: '#5E81AC',
    },
  },
  {
    scope: 'text.html.basic punctuation.definition.entity',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'source.properties entity.name.section.group-title.ini',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'source.properties punctuation.separator.key-value.ini',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['text.html.markdown markup.fenced_code.block', 'text.html.markdown markup.fenced_code.block punctuation.definition'],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: ['text.html.markdown markup.inline.raw', 'text.html.markdown markup.inline.raw punctuation.definition.raw'],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'text.html.markdown markup.italic',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: 'text.html.markdown markup.underline.link',
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: 'text.html.markdown beginning.punctuation.definition.list',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'text.html.markdown beginning.punctuation.definition.quote',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'text.html.markdown markup.quote',
    settings: {
      foreground: '#616E88',
    },
  },
  {
    scope: 'text.html.markdown constant.character.math.tex',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['text.html.markdown punctuation.definition.math.begin', 'text.html.markdown punctuation.definition.math.end'],
    settings: {
      foreground: '#5E81AC',
    },
  },
  {
    scope: 'text.html.markdown punctuation.definition.function.math.tex',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'text.html.markdown punctuation.math.operator.latex',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'text.html.markdown punctuation.definition.heading',
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['text.html.markdown punctuation.definition.constant', 'text.html.markdown punctuation.definition.string'],
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['text.html.markdown constant.other.reference.link', 'text.html.markdown string.other.link.description', 'text.html.markdown string.other.link.title'],
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'source.perl punctuation.definition.variable',
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: ['source.php meta.function-call', 'source.php meta.function-call.object'],
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: ['source.python entity.name.function.decorator', 'source.python meta.function.decorator support.type'],
    settings: {
      foreground: '#D08770',
    },
  },
  {
    scope: 'source.python meta.function-call.generic',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: 'source.python support.type',
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: ['source.python variable.parameter.function.language'],
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: ['source.python meta.function.parameters variable.parameter.function.language.special.self'],
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: ['source.css.scss punctuation.definition.interpolation.begin.bracket.curly', 'source.css.scss punctuation.definition.interpolation.end.bracket.curly'],
    settings: {
      foreground: '#81A1C1',
    },
  },
  {
    scope: 'source.css.scss variable.interpolation',
    settings: {
      foreground: '#D8DEE9',
      fontStyle: 'italic',
    },
  },
  {
    scope: [
      'source.ts punctuation.decorator',
      'source.ts meta.decorator variable.other.readwrite',
      'source.ts meta.decorator entity.name.function',
      'source.tsx punctuation.decorator',
      'source.tsx meta.decorator variable.other.readwrite',
      'source.tsx meta.decorator entity.name.function',
    ],
    settings: {
      foreground: '#D08770',
    },
  },
  {
    scope: ['source.ts meta.object-literal.key', 'source.tsx meta.object-literal.key'],
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: ['source.ts meta.object-literal.key entity.name.function', 'source.tsx meta.object-literal.key entity.name.function'],
    settings: {
      foreground: '#88C0D0',
    },
  },
  {
    scope: [
      'source.ts support.class',
      'source.ts support.type',
      'source.ts entity.name.type',
      'source.ts entity.name.class',
      'source.tsx support.class',
      'source.tsx support.type',
      'source.tsx entity.name.type',
      'source.tsx entity.name.class',
    ],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: [
      'source.ts support.constant.math',
      'source.ts support.constant.dom',
      'source.ts support.constant.json',
      'source.tsx support.constant.math',
      'source.tsx support.constant.dom',
      'source.tsx support.constant.json',
    ],
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: ['source.ts support.variable', 'source.tsx support.variable'],
    settings: {
      foreground: '#D8DEE9',
    },
  },
  {
    scope: [
      'source.ts meta.embedded.line meta.brace.square',
      'source.ts meta.embedded.line meta.brace.round',
      'source.tsx meta.embedded.line meta.brace.square',
      'source.tsx meta.embedded.line meta.brace.round',
    ],
    settings: {
      foreground: '#ECEFF4',
    },
  },
  {
    scope: 'text.xml entity.name.tag.namespace',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'text.xml keyword.other.doctype',
    settings: {
      foreground: '#5E81AC',
    },
  },
  {
    scope: 'text.xml meta.tag.preprocessor entity.name.tag',
    settings: {
      foreground: '#5E81AC',
    },
  },
  {
    scope: ['text.xml string.unquoted.cdata', 'text.xml string.unquoted.cdata punctuation.definition.string'],
    settings: {
      foreground: '#D08770',
      fontStyle: 'italic',
    },
  },
  {
    scope: 'source.yaml entity.name.tag',
    settings: {
      foreground: '#8FBCBB',
    },
  },
  {
    scope: 'keyword.other.dotenv',
    settings: {
      foreground: '#FF000000',
    },
  },
];

const settings = [...comment, ...constant, ...entity, ...string, ...token];

export default def;
// export default root;
// export default settings;
// export default current;
// export default peek.tokenColors;
