// @ts-check

import { tokens, editor, syntax } from '../colors.js';

// NOTE: this sections behaves as expected.
/** Comments. */
const comment = {
  settings: {
    foreground: editor.foreground0,
  },
  /** Line comments, we specialize further so that the type of comment start character(s) can be extracted from the scope. */
  line: {
    settings: {
      foreground: undefined,
    },
    /** // comment */
    doubleSlash: {
      settings: {
        foreground: undefined,
      },
    },
    /** -- comment */
    doubleDash: {
      settings: {
        foreground: undefined,
      },
    },
    /** # comment */
    numberSign: {
      settings: {
        foreground: undefined,
      },
    },
    /** % comment */
    percentage: {
      settings: {
        foreground: undefined,
      },
    },
    /** Other types of line comments. */
    character: {
      settings: {
        foreground: undefined,
      },
    },
  },
  /** Multi-line comments like /* … *\/ and <!-- … -->. */
  block: {
    settings: {
      foreground: undefined,
    },
    /** Embedded documentation. */
    documentation: {
      settings: {
        foreground: undefined,
      },
    },
  },
};

/** Various forms of constants. */
const constant = {
  settings: {
    foreground: '#ff0000', // TODO: select color
  },
  /**
   * Those which represent numbers, e.g. 42, 1.3f, 0x4AB1U.
   * - css/scss numbers
   * - json numbers
   * - nginx numbers
   * - bash numbers
   * - js/ts numbers
   */
  numeric: {
    settings: {
      foreground: syntax.yellow0._80, // #b48ead
    },
  },
  /**
   * Those which represent characters, e.g. &lt;, \e, \031.
   * - html unicode
   * - nginx punctuation
   */
  character: {
    settings: {
      foreground: syntax.yellow0._80, //#ebcb8b
    },
    /**
     * Escape sequences like \e would be constant.character.escape.
     * - bash escape sequences
     */
    escape: {
      settings: {
        foreground: syntax.yellow0._80, //#ebcb8b
      },
    },
  },
  /**
   * Constants (generally) provided by the language which are “special” like true, false, nil, YES, NO, etc.
   * - json boolean
   * -nginx properties
   * -bash boolean
   * -js/ts null infinity boolean
   */
  language: {
    settings: {
      foreground: syntax.blue0._70, // #81a1c1
    },
  },
  /**
   * Other constants, e.g. colors in CSS.
   * - css/scss colors
   * - bash command arguments
   */
  other: {
    settings: {
      foreground: syntax.yellow0._80, // #b48ead
    },
  },
};

/**
 * An entity refers to a larger part of the document, for example a chapter, class, function, or tag.
 * We do not scope the entire entity as entity.* (we use meta.* for that).
 * But we do use entity.* for the “placeholders” in the larger entity, e.g.
 * if the entity is a chapter, we would use entity.name.section for the chapter title.
 */
const entity = {
  settings: {
    foreground: '#ff0000', // TODO: select color
  },
  /**
   * We are naming the larger entity.
   * - bash commands
   */
  name: {
    settings: {
      foreground: syntax.cyan0._80, // #88c0d0
    },
    /**
     * The name of a function.
     * - bash functions
     * - js functions
     * - sass functions
     */
    function: {
      settings: {
        foreground: syntax.cyan0._80, // #88c0d0
      },
    },
    /**
     * The name of a type declaration or class.
     * - js classes
     * - svelte events
     */
    type: {
      settings: {
        foreground: syntax.teal0._70, // #8fbcbb
      },
    },
    /**
     * A tag name.
     * - css tags
     * - html tags
     */
    tag: {
      settings: {
        foreground: syntax.blue0._70, // #81a1c1
      },
    },
    /**
     * The name is the name of a section/heading.
     * - markdown headings
     */
    section: {
      settings: {
        foreground: syntax.cyan0._80, // #88c0d0
        fontStyle: 'bold',
      },
    },
  },
  /** Other entities. */
  other: {
    settings: {
      foreground: '#ff0000', // TODO: select color
    },
    /**
     * The super class/base class name.
     * - js/ts super classes
     */
    'inherited-class': {
      settings: {
        foreground: syntax.teal0._70, // #8fbcbb
        fontStyle: 'italic',
      },
    },
    /**
     * The name of an attribute (mainly in tags).
     * - css classes
     * - html attributes
     */
    'attribute-name': {
      settings: {
        foreground: syntax.teal0._70, // #8fbcbb
      },
    },
  },
};

/** stuff which is “invalid”. */
const invalid = {
  settings: {
    foreground: tokens.errorFixed, // TODO: select color
  },
  /** illegal, e.g. an ampersand or lower-than character in HTML (which is not part of an entity/tag). */
  illegal: {
    settings: {
      foreground: undefined, // TODO: select color
    },
  },
  /** for deprecated stuff e.g. using an API function which is deprecated or using styling with strict HTML. */
  deprecated: {
    settings: {
      foreground: undefined, // TODO: select color
    },
  },
};

/**
 * Keywords (when these do not fall into the other groups).
 * - js/ts generator function dots
 */
const keyword = {
  settings: {
    foreground: syntax.yellow0._80, // #81a1c1
  },
  /**
   * Mainly related to flow control like continue, while, return, etc.
   * - scss imports and mixins
   * - bash keywords
   * - js/ts keywords
   */
  control: {
    settings: {
      // foreground: syntax.blue0._70, // #81a1c1
      foreground: syntax.magenta0._70,
    },
  },
  /**
   * Operators can either be textual (e.g. or) or be characters.
   * - bash pipes
   * - js/ts symbols
   */
  operator: {
    settings: {
      foreground: editor.foreground1,
    },
    new: {
      settings: {
        foreground: syntax.blue0._70, // #81a1c1
      },
    },
  },
  /**
   * Other keywords.
   * css/scss number units
   * docker keywords
   */
  other: {
    settings: {
      foreground: syntax.blue0._70, // #81a1c1
    },
  },
};

/**
 * This is for markup languages and generally applies to larger subsets of the text.
 * - markdown code blocks
 */
const markup = {
  settings: {
    foreground: syntax.teal0._70, // #8fbcbb
  },
  /** Underlined text. */
  underline: {
    settings: {
      foreground: editor.foreground2,
      fontStyle: 'underline',
    },
    /**
     * this is for links, as a convenience this is derived from markup.underline so that if there is no theme rule which specifically targets
     * markup.underline.link then it will inherit the underline style.
     */
    link: {
      settings: {
        foreground: editor.foreground2,
        fontStyle: 'underline',
      },
    },
  },
  /** Bold text. */
  bold: {
    settings: {
      foreground: editor.foreground2,
      fontStyle: 'bold',
    },
  },
  /**
   * Heading text.
   * NOTE: same as entity.section
   */
  heading: {
    settings: {
      foreground: syntax.cyan0._80, // #88c0d0
      fontStyle: 'bold',
    },
  },
  /** Italic text. */
  italic: {
    settings: {
      foreground: editor.foreground2, // TODO: select color
      fontStyle: 'italic',
    },
  },
  /** List items. */
  list: {
    settings: {
      foreground: editor.foreground2,
    },
    /** Numbered list items. */
    numbered: {
      settings: {
        foreground: editor.foreground2,
      },
    },
    /** Unnumbered list items. */
    unnumbered: {
      settings: {
        foreground: editor.foreground2,
      },
    },
  },
  /** Quoted (sometimes block quoted) text. */
  quote: {
    settings: {
      foreground: editor.foreground2,
      fontStyle: 'italic',
    },
  },
  /** Text which is verbatim, e.g. code listings. Normally spell checking is disabled for markup.raw. */
  raw: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** Other markup constructs. */
  other: {
    settings: {
      foreground: '#ff0000',
    },
  },
};

/**
 * The meta scope is generally used to markup larger parts of the document.
 * For example the entire line which declares a function would be meta.function,
 * meta.function and the subsets would be storage.type, entity.name.function,
 * variable.parameter etc. and only the latter would be styled.
 * Sometimes the meta part of the scope will be used only to limit the more
 * general element that is styled, most of the time meta scopes are however used
 * in scope selectors for activation of bundle items.
 * For example in Objective-C there is a meta scope for the interface declaration
 * of a class and the implementation, allowing the same meta-tab-triggers to
 * expand differently, depending on context.
 */
const meta = {
  'object-literal': {
    key: {
      settings: {
        foreground: syntax.teal0._70, // #8fbcbb
      },
    },
  },
  'property-value': {
    settings: {
      foreground: syntax.cyan0._80, // #88c0d0
    },
  },
};

/** Things relating to “storage”. */
const storage = {
  settings: {
    foreground: syntax.blue0._70, // #81a1c1
  },
  /**
   * The type of something, class, function, int, var, etc.
   * - bash functions
   * - js/ts functions const let var
   */
  type: {
    settings: {
      foreground: syntax.blue0._70, // #81a1c1
    },
  },
  /**
   * A storage modifier like static, final, abstract, etc.
   * - bash export
   * - js/ts export async static arrow functions
   */
  modifier: {
    settings: {
      foreground: syntax.blue0._70, // #81a1c1
    },
  },
};

/**
 * Strings.
 * - js/ts es6 strings
 * - json property names
 */
const string = {
  settings: {
    foreground: syntax.green0._80, // #a3be8c,
  },
  /**
   * Quoted strings.
   * - nginx strings
   * - bash oddball strings
   */
  quoted: {
    settings: {
      foreground: undefined,
    },
    /**
     * single quoted strings: 'foo'.
     * - js/ts strings
     * - css/scss strings
     */
    single: {
      settings: {
        foreground: undefined,
      },
    },
    /**
     * double quoted strings: "foo".
     * - html attribute values
     * - dockerfile strings
     * - json strings
     */
    double: {
      settings: {
        foreground: undefined,
      },
    },
    /** triple quoted strings: """Python""". */
    triple: {
      settings: {
        foreground: undefined,
      },
    },
    /** other types of quoting: $'shell', %s{...}. */
    other: {
      settings: {
        foreground: undefined,
      },
    },
  },
  /**
   * For things like here-docs and here-strings.
   * - bash unquoted strings
   */
  unquoted: {
    settings: {
      foreground: undefined,
    },
  },
  /**
   * Strings which are “evaluated”: `date`, $(pwd).
   * - bash sub shell commands
   */
  interpolated: {
    settings: {
      foreground: undefined,
    },
  },
  /** Regular expressions: /(\w+)/. */
  regexp: {
    settings: {
      foreground: syntax.red0._60, //#ebcb8b
    },
  },
  /**
   * Other types of strings (should rarely be used).
   * - markdown link text and images and filled checkboxes
   * - html cdata values
   */
  other: {
    settings: {
      foreground: syntax.cyan0._80, // #88c0d0
    },
  },
};

/** Things provided by a framework or library should be below support. */
const support = {
  settings: {
    foreground: '#ff0000',
  },
  /**
   * Functions provided by the framework/library.
   * For example NSLog in Objective-C is support.function.
   * - css/scss functions
   * - bash commands functions
   */
  function: {
    settings: {
      foreground: syntax.cyan0._80, // #88c0d0
    },
  },
  /**
   * When the framework/library provides classes.
   * - svelte classes
   * - js/ts classes
   */
  class: {
    settings: {
      foreground: syntax.teal0._70, // #8fbcbb
    },
  },
  /**
   * Types provided by the framework/library, this is probably only used
   * for languages derived from C, which has typedef (and struct).
   * Most other languages would introduce new types as classes.
   * - css/scss properties
   * - json properties
   * - ts primitive types
   */
  type: {
    settings: {
      foreground: editor.foreground2,
    },
    primitive: {
      settings: {
        foreground: syntax.teal0._70, // #8fbcbb
      },
    },
  },
  /**
   * Constants (magic values) provided by the framework/library.
   * - css/scss bold serif italic
   */
  constant: {
    settings: {
      foreground: syntax.blue0._70, // #81a1c1
    },
  },
  /**
   * Variables provided by the framework/library.
   * For example NSApp in AppKit.
   * - js/ts variables array.length
   */
  variable: {
    settings: {
      foreground: editor.foreground2,
    },
  },
  /** The above should be exhaustive, but for everything else use support.other. */
  other: {
    settings: {
      foreground: '#ff0000',
    },
  },
};

/**
 * Variables. Not all languages allow easy identification (and thus markup) of these.
 * - scss variables
 * - ts interface properties
 */
const variable = {
  settings: {
    foreground: editor.foreground2,
  },
  /**
   * When the variable is declared as the parameter.
   * - js/ts parameters
   * - bash $ variables
   */
  parameter: {
    settings: {
      foreground: editor.foreground2,
    },
  },
  /**
   * Reserved language variables like this, super, self, etc.
   * - js/ts this, super, self
   * - bash web variables
   */
  language: {
    settings: {
      foreground: syntax.blue0._70, // #81a1c1
    },
  },
  /**
   * Other variables, like $some_variables.
   * - js/ts variables
   * - bash variables
   */
  other: {
    settings: {
      foreground: editor.foreground2,
    },
  },
};

/**
 * Recursively builds a list of rules based on the input object and scope.
 * @param {object} obj - the input object
 * @param {string} scope - the scope for the rules
 */
const buildRules = (obj, scope) => {
  let list = [];

  for (const key in obj) {
    if (key === 'settings') {
      if (!obj[key].foreground) continue;
      list.push({ scope, settings: obj[key] });
    } else {
      const newScope = `${scope}.${key}`;
      list = list.concat(buildRules(obj[key], newScope));
    }
  }
  return list;
};

const markupAdd = [
  {
    scope: ['markup.bold markup.italic', 'markup.italic markup.bold'],
    settings: {
      fontStyle: 'italic bold',
    },
  },
];

const rules = [
  ...buildRules(comment, 'comment'),
  ...buildRules(constant, 'constant'),
  ...buildRules(entity, 'entity'),
  ...buildRules(invalid, 'invalid'),
  ...buildRules(keyword, 'keyword'),
  ...buildRules(markup, 'markup'),
  ...markupAdd,
  ...buildRules(meta, 'meta'),
  ...buildRules(storage, 'storage'),
  ...buildRules(string, 'string'),
  ...buildRules(support, 'support'),
  ...buildRules(variable, 'variable'),
];

export default rules;
