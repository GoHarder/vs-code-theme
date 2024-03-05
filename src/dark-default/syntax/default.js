import { tokens, ansi } from '../colors/interface.js';

// #808080 ansi.white._60
// #c8c8c8 ansi.white._70
// #d4d4d4 ansi.white._80
// #d16969 ansi.red._60
// #ce9178 ansi.orange._70
// #d7ba7d ansi.yellow._70
// #dcdcaa ansi.yellow._80
// #6a9955 ansi.green._50
// #b5cea8 ansi.green._80
// #4ec9b0 ansi.cyan._80
// #000080
// #569cd6 ansi.blue._80
// #4fc1ff ansi.blue._90
// #9cdcfe ansi.white._90
// #b267e6 ansi.magenta._60
// #c586c0 ansi.magenta._70
// #646695 ansi.magenta._50

export default [
  {
    scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
    settings: {
      // foreground: '#D4D4D4',
      foreground: ansi.white._80,
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
      // foreground: '#000080',
      foreground: ansi.blue._5,
    },
  },
  {
    scope: 'comment',
    settings: {
      // foreground: '#6A9955',
      foreground: ansi.white._60,
    },
  },
  {
    scope: 'constant.language',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: ['constant.numeric', 'variable.other.enummember', 'keyword.operator.plus.exponent', 'keyword.operator.minus.exponent'],
    settings: {
      // foreground: '#B5CEA8',
      foreground: ansi.green._80,
    },
  },
  {
    scope: 'constant.regexp',
    settings: {
      // foreground: '#646695',
      foreground: ansi.magenta._50,
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: ['entity.name.tag.css', 'entity.name.tag.less'],
    settings: {
      // foreground: '#D7BA7D',
      foreground: ansi.yellow._70,
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      // foreground: '#9CDCFE',
      foreground: ansi.white._90,
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
      // foreground: '#D7BA7D',
      foreground: ansi.yellow._70,
    },
  },
  {
    scope: 'invalid',
    settings: {
      // foreground: '#F44747',
      foreground: tokens.errorFixed,
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
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
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
      // foreground: '#B5CEA8',
      foreground: ansi.green._80,
    },
  },
  {
    scope: 'markup.deleted',
    settings: {
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
    },
  },
  {
    scope: 'markup.changed',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'punctuation.definition.quote.begin.markdown',
    settings: {
      // foreground: '#6A9955',
      foreground: ansi.green._60,
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      // foreground: '#6796E6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'markup.inline.raw',
    settings: {
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
    },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: {
      // foreground: '#808080',
      foreground: ansi.white._60,
    },
  },
  {
    scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'meta.preprocessor.string',
    settings: {
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
    },
  },
  {
    scope: 'meta.preprocessor.numeric',
    settings: {
      // foreground: '#B5CEA8',
      foreground: ansi.green._80,
    },
  },
  {
    scope: 'meta.structure.dictionary.key.python',
    settings: {
      // foreground: '#9CDCFE',
      foreground: ansi.white._90,
    },
  },
  {
    scope: 'meta.diff.header',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'storage',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'storage.type',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: ['storage.modifier', 'keyword.operator.noexcept'],
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: ['string', 'meta.embedded.assembly'],
    settings: {
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
    },
  },
  {
    scope: 'string.tag',
    settings: {
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
    },
  },
  {
    scope: 'string.value',
    settings: {
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
    },
  },
  {
    scope: 'string.regexp',
    settings: {
      // foreground: '#D16969',
      foreground: ansi.red._60,
    },
  },
  {
    scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end', 'punctuation.section.embedded'],
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: ['meta.template.expression'],
    settings: {
      // foreground: '#D4D4D4',
      foreground: ansi.white._80,
    },
  },
  {
    scope: ['support.type.vendored.property-name', 'support.type.property-name', 'source.css variable', 'source.coffee.embedded'],
    settings: {
      // foreground: '#9CDCFE',
      foreground: ansi.white._90,
    },
  },
  {
    scope: 'keyword',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'keyword.control',
    settings: {
      // foreground: '#569CD6'
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      // foreground: '#D4D4D4',
      foreground: ansi.white._80,
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
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'keyword.other.unit',
    settings: {
      // foreground: '#B5CEA8',
      foreground: ansi.green._80,
    },
  },
  {
    scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'support.function.git-rebase',
    settings: {
      // foreground: '#9CDCFE',
      foreground: ansi.white._90,
    },
  },
  {
    scope: 'constant.sha.git-rebase',
    settings: {
      // foreground: '#B5CEA8',
      foreground: ansi.green._80,
    },
  },
  {
    scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
    settings: {
      // foreground: '#D4D4D4',
      foreground: ansi.white._80,
    },
  },
  {
    scope: 'variable.language',
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: ['entity.name.function', 'support.function', 'support.constant.handlebars', 'source.powershell variable.other.member', 'entity.name.operator.custom-literal'],
    settings: {
      // foreground: '#DCDCAA',
      foreground: ansi.yellow._80,
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
      // foreground: '#4EC9B0',
      foreground: ansi.cyan._80,
    },
  },
  {
    scope: ['meta.type.cast.expr', 'meta.type.new.expr', 'support.constant.math', 'support.constant.dom', 'support.constant.json', 'entity.other.inherited-class'],
    settings: {
      // foreground: '#4EC9B0',
      foreground: ansi.cyan._80,
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
      // foreground: '#C586C0',
      foreground: ansi.magenta._70,
    },
  },
  {
    scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable', 'constant.other.placeholder'],
    settings: {
      // foreground: '#9CDCFE',
      foreground: ansi.white._90,
    },
  },
  {
    scope: ['variable.other.constant', 'variable.other.enummember'],
    settings: {
      // foreground: '#4FC1FF',
      foreground: ansi.blue._90,
    },
  },
  {
    scope: ['meta.object-literal.key'],
    settings: {
      // foreground: '#9CDCFE',
      foreground: ansi.white._90,
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
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
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
      // foreground: '#CE9178',
      foreground: ansi.orange._70,
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
      // foreground: '#D16969',
      foreground: ansi.red._60,
    },
  },
  {
    scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
    settings: {
      // foreground: '#DCDCAA',
      foreground: ansi.yellow._80,
    },
  },
  {
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      // foreground: '#D7BA7D',
      foreground: ansi.yellow._70,
    },
  },
  {
    scope: ['constant.character', 'constant.other.option'],
    settings: {
      // foreground: '#569CD6',
      foreground: ansi.blue._80,
    },
  },
  {
    scope: 'constant.character.escape',
    settings: {
      // foreground: '#D7BA7D',
      foreground: ansi.yellow._70,
    },
  },
  {
    scope: 'entity.name.label',
    settings: {
      // foreground: '#C8C8C8',
      foreground: ansi.white._70,
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
      // foreground: '#6796E6',
      foreground: tokens.info,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      // foreground: '#CD9731',
      foreground: tokens.warning,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      // foreground: '#F44747',
      foreground: tokens.errorFixed,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      // foreground: '#B267E6',
      foreground: ansi.magenta._70,
    },
  },
];
