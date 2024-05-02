// import { tokens, ansi } from '../colors/interface.js';
import { tokens, syntax } from '../colors.js';

const src = {
  // // Color 0 is only for comments
  // color0: { original: '#6A9955', adjusted: syntax.white0._60 },
  // color1: { original: '#808080', adjusted: syntax.white0._50 }, // #74777c
  // color2: { original: '#c8c8c8', adjusted: syntax.white0._80 }, // #c1c7d2
  // color3: { original: '#d4d4d4', adjusted: syntax.white0._90 }, // #dde3ee
  // color4: { original: '#d16969', adjusted: syntax.red0._60 }, // #d6737c
  // color5: { original: '#ce9178', adjusted: syntax.orange0._60 }, // #c67f68
  // color6: { original: '#d7ba7d', adjusted: syntax.yellow0._80 }, // #e2c383
  // color7: { original: '#dcdcaa', adjusted: syntax.yellow0._90 }, // #ffdf9f
  // color8: { original: '#6a9955', adjusted: syntax.green0._50 }, // #657e52
  // color9: { original: '#b5cea8', adjusted: syntax.green0._80 }, // #b4cf9c
  // color10: { original: '#4ec9b0', adjusted: syntax.cyan0._70 }, // #87b3b2
  // color11: { original: '#000080', adjusted: syntax.blue0._20 }, // #0e334e
  // color12: { original: '#569cd6', adjusted: syntax.blue0._60 }, // #7494b3
  // color13: { original: '#4fc1ff', adjusted: syntax.blue0._70 }, // #8eaecf
  // color14: { original: '#9cdcfe', adjusted: syntax.blue0._80 }, // #a9caeb
  // color15: { original: '#b267e6', adjusted: syntax.magenta0._60 }, // #ab85a4
  // color16: { original: '#c586c0', adjusted: syntax.magenta0._70 }, // #c79fbf
  // color17: { original: '#646695', adjusted: syntax.blue0._50 }, // #5a7a98
  // color18: { original: '#6796E6', adjusted: syntax.blue0._70 }, // #8eaecf
  // color19: { original: '#F44747', adjusted: syntax.red0._50 }, // #b75b645

  color0: { original: '#008000', adjusted: syntax.green0._40 }, // #006d30
  color1: { original: '#000000', adjusted: syntax.black0._0 }, // #000000
  color2: { original: '#000080', adjusted: syntax.blue0._20 }, // #003354
  color10: { original: '#0451A5', adjusted: syntax.blue0._40 }, // #00639c
  color3: { original: '#0000ff', adjusted: syntax.blue0._50 }, // #007cc3
  color4: { original: '#098658', adjusted: syntax.green0._50 }, // #0c8942
  color6: { original: '#800000', adjusted: syntax.red0._25 }, // #7e0003
  color5: { original: '#811f3f', adjusted: syntax.magenta0._25 }, // ##780047
  color9: { original: '#A31515', adjusted: syntax.red0._35 }, // #a70e00
  color7: { original: '#e50000', adjusted: syntax.red0._40 }, // #c00007
  color8: { original: '#CD3131', adjusted: syntax.red0._50 }, // #e6281f
  color11: { original: '#800080', adjusted: syntax.magenta0._35 }, // #9f0b62
};

export const icons = {
  debug: {
    name: src.color10.adjusted,
    value: src.color6.adjusted,
    string: src.color9.adjusted,
    boolean: src.color3.adjusted,
    number: src.color4.adjusted,
  },
  editorInlay: {
    default: tokens.onSurfaceVariant,
    type: src.color3.adjusted,
    parameter: tokens.onSurfaceVariant,
  },
  symbol: {
    array: undefined,
    boolean: src.color3.adjusted, // constant.language
    class: src.color3.adjusted, // entity.name.type
    color: undefined,
    constant: src.color3.adjusted, // constant.language
    constructor: src.color3.adjusted, // storage.type
    enumerator: src.color3.adjusted, // entity.name.type
    enumeratorMember: src.color4.adjusted, // variable.other.enummember
    event: undefined,
    field: src.color6.adjusted, // entity.name.tag
    file: undefined,
    folder: undefined,
    function: src.color3.adjusted, // entity.name.function
    interface: src.color3.adjusted, // entity.name.type
    key: undefined,
    keyword: src.color3.adjusted, // keyword.control
    method: src.color3.adjusted, // entity.name.function
    module: undefined, // found typing in a rust file `io`
    namespace: src.color3.adjusted, // entity.name.type
    null: src.color3.adjusted, // constant.language
    number: src.color4.adjusted, // constant.numeric
    object: undefined,
    operator: src.color1.adjusted, // keyword.operator
    package: undefined,
    property: src.color7.adjusted, // entity.other.attribute-name
    reference: src.color3.adjusted, // variable
    snippet: undefined, // found default is ok
    string: src.color9.adjusted, // string
    struct: src.color3.adjusted, // entity.name.type
    text: undefined,
    typeParameter: src.color3.adjusted, // entity.name.type
    unit: undefined,
    variable: src.color3.adjusted, // variable.language
  },
};

export const scopes = [
  {
    scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'],
    settings: { foreground: src.color1.adjusted },
  },
  {
    scope: 'emphasis',
    settings: { fontStyle: 'italic' },
  },
  {
    scope: 'strong',
    settings: { fontStyle: 'bold' },
  },
  {
    scope: 'meta.diff.header',
    settings: { foreground: src.color2.adjusted },
  },
  {
    scope: 'comment',
    settings: { foreground: src.color0.adjusted },
  },
  {
    scope: 'constant.language',
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: ['constant.numeric', 'variable.other.enummember', 'keyword.operator.plus.exponent', 'keyword.operator.minus.exponent'],
    settings: { foreground: src.color4.adjusted },
  },
  {
    scope: 'constant.regexp',
    settings: { foreground: src.color5.adjusted },
  },
  {
    scope: 'entity.name.tag',
    settings: { foreground: src.color6.adjusted },
  },
  {
    scope: 'entity.name.selector',
    settings: { foreground: src.color6.adjusted },
  },
  {
    scope: 'entity.other.attribute-name',
    settings: { foreground: src.color7.adjusted },
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
    settings: { foreground: src.color6.adjusted },
  },
  {
    scope: 'invalid',
    settings: { foreground: src.color8.adjusted },
  },
  {
    scope: 'markup.underline',
    settings: { fontStyle: 'underline' },
  },
  {
    scope: 'markup.bold',
    settings: { foreground: src.color2.adjusted, fontStyle: 'bold' },
  },
  {
    scope: 'markup.heading',
    settings: { foreground: src.color6.adjusted, fontStyle: 'bold' },
  },
  {
    scope: 'markup.italic',
    settings: { fontStyle: 'italic' },
  },
  {
    scope: 'markup.strikethrough',
    settings: { fontStyle: 'strikethrough' },
  },
  {
    scope: 'markup.inserted',
    settings: { foreground: src.color4.adjusted },
  },
  {
    scope: 'markup.deleted',
    settings: { foreground: src.color9.adjusted },
  },
  {
    scope: 'markup.changed',
    settings: { foreground: src.color10.adjusted },
  },
  {
    scope: ['punctuation.definition.quote.begin.markdown', 'punctuation.definition.list.begin.markdown'],
    settings: { foreground: src.color10.adjusted },
  },
  {
    scope: 'markup.inline.raw',
    settings: { foreground: src.color6.adjusted },
  },
  {
    scope: 'punctuation.definition.tag',
    settings: { foreground: src.color6.adjusted },
  },
  {
    scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'meta.preprocessor.string',
    settings: { foreground: src.color9.adjusted },
  },
  {
    scope: 'meta.preprocessor.numeric',
    settings: { foreground: src.color4.adjusted },
  },
  {
    scope: 'meta.structure.dictionary.key.python',
    settings: { foreground: src.color10.adjusted },
  },
  {
    scope: 'storage',
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'storage.type',
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: ['storage.modifier', 'keyword.operator.noexcept'],
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: ['string', 'meta.embedded.assembly'],
    settings: { foreground: src.color9.adjusted },
  },
  {
    scope: [
      'string.comment.buffered.block.pug',
      'string.quoted.pug',
      'string.interpolated.pug',
      'string.unquoted.plain.in.yaml',
      'string.unquoted.plain.out.yaml',
      'string.unquoted.block.yaml',
      'string.quoted.single.yaml',
      'string.quoted.double.xml',
      'string.quoted.single.xml',
      'string.unquoted.cdata.xml',
      'string.quoted.double.html',
      'string.quoted.single.html',
      'string.unquoted.html',
      'string.quoted.single.handlebars',
      'string.quoted.double.handlebars',
    ],
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'string.regexp',
    settings: { foreground: src.color5.adjusted },
  },
  {
    scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end', 'punctuation.section.embedded'],
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: ['meta.template.expression'],
    settings: { foreground: src.color1.adjusted },
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
    settings: { foreground: src.color10.adjusted },
  },
  {
    scope: ['support.type.vendored.property-name', 'support.type.property-name', 'source.css variable', 'source.coffee.embedded'],
    settings: { foreground: src.color7.adjusted },
  },
  {
    scope: ['support.type.property-name.json'],
    settings: { foreground: src.color10.adjusted },
  },
  {
    scope: 'keyword',
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'keyword.control',
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'keyword.operator',
    settings: { foreground: src.color1.adjusted },
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
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'keyword.other.unit',
    settings: { foreground: src.color4.adjusted },
  },
  {
    scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
    settings: { foreground: src.color6.adjusted },
  },
  {
    scope: 'support.function.git-rebase',
    settings: { foreground: src.color10.adjusted },
  },
  {
    scope: 'constant.sha.git-rebase',
    settings: { foreground: src.color4.adjusted },
  },
  {
    scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'],
    settings: { foreground: src.color1.adjusted },
  },
  {
    scope: 'variable.language',
    settings: { foreground: src.color3.adjusted },
  },
  {
    scope: 'token.info-token',
    settings: { foreground: tokens.info },
  },
  {
    scope: 'token.warn-token',
    settings: { foreground: tokens.warningFixed },
  },
  {
    scope: 'token.error-token',
    settings: { foreground: tokens.error },
  },
  {
    scope: 'token.debug-token',
    settings: { foreground: src.color11.adjusted },
  },
];
