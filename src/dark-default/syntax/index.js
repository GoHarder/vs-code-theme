import { syntax, tokens } from '../colors/interface.js';

export default [
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
    scope: 'entity.name.tag.css',
    settings: {
      foreground: syntax.css_tag,
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
      foreground: '#569CD6',
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      fontStyle: 'bold',
      foreground: '#569CD6',
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
      foreground: syntax.string,
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
      foreground: syntax.comment,
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
      foreground: '#569CD6',
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
      foreground: '#569CD6',
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
      foreground: syntax.keyword_operator,
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
    scope: ['keyword.control', 'source.cpp keyword.operator.new', 'keyword.operator.delete', 'keyword.other.using', 'keyword.other.operator', 'entity.name.operator'],
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
      foreground: '#569CD6',
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
      foreground: '#C8C8C8',
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
      foreground: '#B267E6',
    },
  },
];
