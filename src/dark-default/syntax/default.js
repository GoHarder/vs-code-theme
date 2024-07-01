// import { tokens, ansi } from '../colors/interface.js';
import { tokens, syntax } from '../colors.js';

const src = {
  // Color 0 is only for comments
  color0: { original: '#6A9955', adjusted: syntax.white0._60 },
  color1: { original: '#808080', adjusted: syntax.white0._50 }, // #74777c
  color2: { original: '#c8c8c8', adjusted: syntax.white0._80 }, // #c1c7d2
  color3: { original: '#d4d4d4', adjusted: syntax.white0._90 }, // #dde3ee
  color4: { original: '#d16969', adjusted: syntax.red0._60 }, // #d6737c
  color5: { original: '#ce9178', adjusted: syntax.orange0._60 }, // #c67f68
  color6: { original: '#d7ba7d', adjusted: syntax.yellow0._80 }, // #e2c383
  color7: { original: '#dcdcaa', adjusted: syntax.yellow0._90 }, // #ffdf9f
  color8: { original: '#6a9955', adjusted: syntax.green0._50 }, // #657e52
  color9: { original: '#b5cea8', adjusted: syntax.green0._80 }, // #b4cf9c
  color10: { original: '#4ec9b0', adjusted: syntax.cyan0._70 }, // #87b3b2
  color11: { original: '#000080', adjusted: syntax.blue0._20 }, // #0e334e
  color12: { original: '#569cd6', adjusted: syntax.blue0._60 }, // #7494b3
  color13: { original: '#4fc1ff', adjusted: syntax.blue0._70 }, // #8eaecf
  color14: { original: '#9cdcfe', adjusted: syntax.blue0._80 }, // #a9caeb
  color15: { original: '#b267e6', adjusted: syntax.magenta0._60 }, // #ab85a4
  color16: { original: '#c586c0', adjusted: syntax.magenta0._70 }, // #c79fbf
  color17: { original: '#646695', adjusted: syntax.blue0._50 }, // #5a7a98
  color18: { original: '#6796E6', adjusted: syntax.blue0._70 }, // #8eaecf
  color19: { original: '#F44747', adjusted: syntax.red0._50 }, // #b75b645
};

export const icons = {
  debug: {
    name: src.color14.adjusted,
    value: src.color1.adjusted,
    string: src.color5.adjusted,
    boolean: src.color12.adjusted,
    number: src.color9.adjusted,
  },
  editorInlay: {
    default: tokens.onSurfaceVariant,
    type: src.color10.adjusted,
    parameter: src.color14.adjusted,
  },
  symbol: {
    array: undefined,
    boolean: src.color12.adjusted, // constant.language
    class: src.color10.adjusted, // entity.name.type
    color: undefined,
    constant: src.color12.adjusted, // constant.language
    constructor: src.color12.adjusted, // storage.type
    enumerator: src.color10.adjusted, // entity.name.type
    enumeratorMember: src.color13.adjusted, // variable.other.enummember
    event: undefined,
    field: src.color12.adjusted, // entity.name.tag
    file: undefined,
    folder: undefined,
    function: src.color7.adjusted, // entity.name.function
    interface: src.color10.adjusted, // entity.name.type
    key: undefined,
    keyword: src.color12.adjusted, // keyword.control
    method: src.color7.adjusted, // entity.name.function
    module: undefined, // found typing in a rust file `io`
    namespace: src.color10.adjusted, // entity.name.type
    null: src.color12.adjusted, // constant.language
    number: src.color9.adjusted, // constant.numeric
    object: undefined,
    operator: src.color3.adjusted, // keyword.operator
    package: undefined,
    property: src.color14.adjusted, // entity.other.attribute-name
    reference: src.color14.adjusted, // variable
    snippet: undefined, // found default is ok
    string: src.color5.adjusted, // string
    struct: src.color10.adjusted, // entity.name.type
    text: undefined,
    typeParameter: src.color10.adjusted, // entity.name.type
    unit: undefined,
    variable: src.color12.adjusted, // variable.language
  },
};

export const scopes = [
  {
    scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
    settings: {
      foreground: src.color3.adjusted,
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
      foreground: src.color11.adjusted,
    },
  },
  {
    scope: 'comment',
    settings: {
      foreground: syntax.white0._60,
    },
  },
  {
    scope: 'constant.language',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: ['constant.numeric', 'variable.other.enummember', 'keyword.operator.plus.exponent', 'keyword.operator.minus.exponent'],
    settings: {
      foreground: src.color9.adjusted,
    },
  },
  {
    scope: 'constant.regexp',
    settings: {
      foreground: src.color17.adjusted,
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: ['entity.name.tag.css', 'entity.name.tag.less'],
    settings: {
      foreground: src.color6.adjusted,
    },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: src.color14.adjusted,
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
      foreground: src.color6.adjusted,
    },
  },
  {
    scope: 'invalid',
    settings: {
      foreground: src.color19.adjusted,
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
      foreground: src.color12.adjusted,
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.heading',
    settings: {
      foreground: src.color12.adjusted,
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
    scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
    settings: {
      fontStyle: 'bold italic',
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
      foreground: src.color9.adjusted,
    },
  },
  {
    scope: 'markup.deleted',
    settings: {
      foreground: src.color5.adjusted,
    },
  },
  {
    scope: 'markup.changed',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'punctuation.definition.quote.begin.markdown',
    settings: {
      foreground: src.color8.adjusted,
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: src.color18.adjusted,
    },
  },
  {
    scope: 'markup.inline.raw',
    settings: {
      foreground: src.color5.adjusted,
    },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: src.color1.adjusted,
    },
  },
  {
    scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'meta.preprocessor.string',
    settings: {
      foreground: src.color5.adjusted,
    },
  },
  {
    scope: 'meta.preprocessor.numeric',
    settings: {
      foreground: src.color9.adjusted,
    },
  },
  {
    scope: 'meta.structure.dictionary.key.python',
    settings: {
      foreground: src.color14.adjusted,
    },
  },
  {
    scope: 'meta.diff.header',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'storage',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'storage.type',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: ['storage.modifier', 'keyword.operator.noexcept'],
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: ['string', 'meta.embedded.assembly'],
    settings: {
      foreground: src.color5.adjusted,
    },
  },
  {
    scope: 'string.tag',
    settings: {
      foreground: src.color5.adjusted,
    },
  },
  {
    scope: 'string.value',
    settings: {
      foreground: src.color5.adjusted,
    },
  },
  {
    scope: 'string.regexp',
    settings: {
      foreground: src.color4.adjusted,
    },
  },
  {
    scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end', 'punctuation.section.embedded'],
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: ['meta.template.expression'],
    settings: {
      foreground: src.color3.adjusted,
    },
  },
  {
    scope: ['support.type.vendored.property-name', 'support.type.property-name', 'source.css variable', 'source.coffee.embedded'],
    settings: {
      foreground: src.color14.adjusted,
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'keyword.control',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'keyword.operator',
    settings: {
      foreground: src.color3.adjusted,
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
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'keyword.other.unit',
    settings: {
      foreground: src.color9.adjusted,
    },
  },
  {
    scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'support.function.git-rebase',
    settings: {
      foreground: src.color14.adjusted,
    },
  },
  {
    scope: 'constant.sha.git-rebase',
    settings: {
      foreground: src.color9.adjusted,
    },
  },
  {
    scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
    settings: {
      foreground: src.color3.adjusted,
    },
  },
  {
    scope: 'variable.language',
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: ['entity.name.function', 'support.function', 'support.constant.handlebars', 'source.powershell variable.other.member', 'entity.name.operator.custom-literal'],
    settings: {
      foreground: src.color7.adjusted,
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
      foreground: src.color10.adjusted,
    },
  },
  {
    scope: ['meta.type.cast.expr', 'meta.type.new.expr', 'support.constant.math', 'support.constant.dom', 'support.constant.json', 'entity.other.inherited-class'],
    settings: {
      foreground: src.color10.adjusted,
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
      foreground: src.color16.adjusted,
    },
  },
  {
    scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable', 'constant.other.placeholder'],
    settings: {
      foreground: src.color14.adjusted,
    },
  },
  {
    scope: ['variable.other.constant', 'variable.other.enummember'],
    settings: {
      foreground: src.color13.adjusted,
    },
  },
  {
    scope: ['meta.object-literal.key'],
    settings: {
      foreground: src.color14.adjusted,
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
      foreground: src.color5.adjusted,
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
      foreground: src.color5.adjusted,
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
      foreground: src.color4.adjusted,
    },
  },
  {
    scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
    settings: {
      foreground: src.color7.adjusted,
    },
  },
  {
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: src.color6.adjusted,
    },
  },
  {
    scope: ['constant.character', 'constant.other.option'],
    settings: {
      foreground: src.color12.adjusted,
    },
  },
  {
    scope: 'constant.character.escape',
    settings: {
      foreground: src.color6.adjusted,
    },
  },
  {
    scope: 'entity.name.label',
    settings: {
      foreground: src.color2.adjusted,
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
      foreground: src.color15.adjusted,
    },
  },
];
