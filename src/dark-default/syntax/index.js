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
