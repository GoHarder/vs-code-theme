import chroma from 'chroma-js';

import { ansi, file } from './index.js';

/**
 * @typedef {'black0' | 'black1' | 'black2' | 'black3'} Black
 * @typedef {'white0' | 'white1' | 'white2'} White
 * @typedef {'blue0' | 'blue1Alt' | 'blue1'} Blue
 * @typedef {'cyan0Alt' | 'cyan0' | 'cyan1'} Cyan
 * @typedef {'redAlt' | 'red1'} Red
 * @typedef {'orangeAlt' | 'orange'} Orange
 * @typedef {'yellowAlt' | 'yellow'} Yellow
 * @typedef {'greenAlt' | 'green'} Green
 * @typedef {'magentaAlt' | 'magenta'} Magenta
 * @typedef {Black | White | Blue | Cyan | Red | Orange | Yellow | Green | Magenta} Syntax
 */

/** @type {Record<Syntax, import('../../../schemas/color-tokens.js').ColorTones>} */
const tokens = file.syntax.reduce((obj, color) => {
  const { name, tones } = color;

  obj[name] = tones;

  return obj;
}, {});

// TODO:
/** Comments. */
const comment = {
  settings: {
    foreground: '#ff0000',
  },
  /** Line comments, we specialize further so that the type of comment start character(s) can be extracted from the scope. */
  line: {
    settings: {
      foreground: '#ff0000',
    },
    /** // comment */
    doubleSlash: {
      settings: {
        foreground: '#ff0000',
      },
    },
    /** -- comment */
    doubleDash: {
      settings: {
        foreground: '#ff0000',
      },
    },
    /** # comment */
    numberSign: {
      settings: {
        foreground: '#ff0000',
      },
    },
    /** % comment */
    percentage: {
      settings: {
        foreground: '#ff0000',
      },
    },
    /** Other types of line comments. */
    character: {
      settings: {
        foreground: '#ff0000',
      },
    },
  },
  /** Multi-line comments like /* … *\/ and <!-- … -->. */
  block: {
    settings: {
      foreground: '#ff0000',
    },
    /** Embedded documentation. */
    documentation: {
      settings: {
        foreground: '#ff0000',
      },
    },
  },
};

// NOTE: done for now.
/** Various forms of constants. */
const constant = {
  settings: {
    foreground: '#ff0000',
  },
  /** Those which represent numbers, e.g. 42, 1.3f, 0x4AB1U. */
  numeric: {
    settings: {
      foreground: tokens.magentaAlt._60, //#b48ead NOTE: Change.
    },
  },
  /** Those which represent characters, e.g. &lt;, \e, \031. */
  character: {
    settings: {
      foreground: tokens.yellowAlt._80, //#ebcb8b
    },
    /** Escape sequences like \e would be constant.character.escape. */
    escape: {
      settings: {
        foreground: tokens.yellowAlt._80, //#ebcb8b
      },
    },
  },
  /** Constants (generally) provided by the language which are “special” like true, false, nil, YES, NO, etc. */
  language: {
    settings: {
      foreground: tokens.blue1._60, //#81a1c1
    },
  },
  /** Other constants, e.g. colors in CSS. */
  other: {
    settings: {
      foreground: tokens.magentaAlt._60, //#b48ead NOTE: Change.
    },
  },
};

// NOTE: done for now.
/**
 * An entity refers to a larger part of the document, for example a chapter, class, function, or tag.
 * We do not scope the entire entity as entity.* (we use meta.* for that).
 * But we do use entity.* for the “placeholders” in the larger entity, e.g.
 * if the entity is a chapter, we would use entity.name.section for the chapter title.
 */
const entity = {
  settings: {
    foreground: '#ff0000',
  },
  /** We are naming the larger entity. */
  name: {
    settings: {
      foreground: tokens.cyan0Alt._80, //#88c0d0
    },
    /** The name of a function. */
    function: {
      settings: {
        foreground: tokens.cyan0Alt._80, //#88c0d0
      },
    },
    /** The name of a type declaration or class. */
    type: {
      settings: {
        foreground: tokens.cyan1._70, //#8fbcbb
      },
    },
    /** A tag name. */
    tag: {
      settings: {
        foreground: tokens.blue1._60, //#81a1c1
      },
    },
    /** The name is the name of a section/heading. */
    section: {
      settings: {
        foreground: tokens.cyan0Alt._80, //#88c0d0
        fontStyle: 'bold',
      },
    },
  },
  /** Other entities. */
  other: {
    settings: {
      foreground: '#ff0000',
    },
    /** The super class/base class name. */
    inheritedClass: {
      settings: {
        foreground: tokens.cyan1._70, //#8fbcbb
        fontStyle: 'italic',
      },
    },
    /** The name of an attribute (mainly in tags). */
    attributeName: {
      settings: {
        foreground: tokens.cyan1._70, //#8fbcbb
      },
    },
  },
};

// TODO:
/** stuff which is “invalid”. */
const invalid = {
  settings: {
    foreground: '#ff0000',
  },
  /** illegal, e.g. an ampersand or lower-than character in HTML (which is not part of an entity/tag). */
  illegal: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** for deprecated stuff e.g. using an API function which is deprecated or using styling with strict HTML. */
  deprecated: {
    settings: {
      foreground: '#ff0000',
    },
  },
};

// NOTE: done for now.
/** Keywords (when these do not fall into the other groups). */
const keyword = {
  settings: {
    foreground: tokens.blue1._60, //#81a1c1 NOTE: change.
  },
  /** mainly related to flow control like continue, while, return, etc. */
  control: {
    settings: {
      foreground: tokens.blue1._60, //#81a1c1 NOTE: change.
    },
  },
  /** operators can either be textual (e.g. or) or be characters. */
  operator: {
    settings: {
      foreground: tokens.blue1._60, //#81a1c1
    },
  },
  /** other keywords. */
  other: {
    settings: {
      foreground: tokens.blue1._60, //#81a1c1
    },
  },
};

// TODO:
/** This is for markup languages and generally applies to larger subsets of the text. */
const markup = {
  settings: {
    foreground: '#ff0000',
  },
  /** Underlined text. */
  underline: {
    settings: {
      foreground: '#ff0000',
    },
    /**
     * this is for links, as a convenience this is derived from markup.underline so that if there is no theme rule which specifically targets
     * markup.underline.link then it will inherit the underline style.
     */
    link: {
      settings: {
        foreground: '#ff0000',
      },
    },
  },
  /** Bold text. */
  bold: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** Heading text. */
  heading: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** Italic text. */
  italic: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** List items. */
  list: {
    settings: {
      foreground: '#ff0000',
    },
    /** Numbered list items. */
    numbered: {
      settings: {
        foreground: '#ff0000',
      },
    },
    /** Unnumbered list items. */
    unnumbered: {
      settings: {
        foreground: '#ff0000',
      },
    },
  },
  /** Quoted (sometimes block quoted) text. */
  quote: {
    settings: {
      foreground: '#ff0000',
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
const meta = {};

// NOTE: done for now.
/** things relating to “storage”. */
const storage = {
  settings: {
    foreground: tokens.blue1._60, //#81a1c1 NOTE: change.
  },
  /** the type of something, class, function, int, var, etc. */
  type: {
    settings: {
      foreground: tokens.blue1._60, //#81a1c1 NOTE: change.
    },
  },
  /** a storage modifier like static, final, abstract, etc. */
  modifier: {
    settings: {
      foreground: tokens.blue1._60, //#81a1c1 NOTE: change.
    },
  },
};

// TODO:
/** Strings. */
const string = {
  settings: {
    foreground: '#a3be8c',
  },
  /** Quoted strings. */
  quoted: {
    settings: {
      foreground: '#ff0000',
    },
    /** single quoted strings: 'foo'. */
    single: {
      settings: {
        foreground: '#a3be8c',
      },
    },
    /** double quoted strings: "foo". */
    double: {
      settings: {
        foreground: '#a3be8c',
      },
    },
    /** triple quoted strings: """Python""". */
    triple: {
      settings: {
        foreground: '#00ff00',
      },
    },
    /** other types of quoting: $'shell', %s{...}. */
    other: {
      settings: {
        foreground: '#0000ff',
      },
    },
  },
  /** For things like here-docs and here-strings. */
  unquoted: {
    settings: {
      foreground: '#a3be8c',
    },
  },
  /** Strings which are “evaluated”: `date`, $(pwd). */
  interpolated: {
    settings: {
      foreground: '#ffff00',
    },
  },
  /** Regular expressions: /(\w+)/. */
  regexp: {
    settings: {
      foreground: ansi.red._60,
    },
  },
  /** Other types of strings (should rarely be used). */
  other: {
    settings: {
      foreground: '#88c0d0',
    },
  },
};

// TODO:
/** Things provided by a framework or library should be below support. */
const support = {
  settings: {
    foreground: '#ff0000',
  },
  /**
   * Functions provided by the framework/library.
   * For example NSLog in Objective-C is support.function.
   */
  function: {
    settings: {
      foreground: tokens.cyan0Alt._80, //#88c0d0
    },
  },
  /** When the framework/library provides classes. */
  class: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /**
   * Types provided by the framework/library, this is probably only used
   * for languages derived from C, which has typedef (and struct).
   * Most other languages would introduce new types as classes.
   */
  type: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** Constants (magic values) provided by the framework/library. */
  constant: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /**
   * Variables provided by the framework/library.
   * For example NSApp in AppKit.
   */
  variable: {
    settings: {
      foreground: '#ff0000',
    },
  },
  /** The above should be exhaustive, but for everything else use support.other. */
  other: {
    settings: {
      foreground: '#ff0000',
    },
  },
};

// NOTE: done for now.
/** Variables. Not all languages allow easy identification (and thus markup) of these. */
const variable = {
  settings: {
    foreground: '#ff0000', // NOTE: need color.
  },
  /** When the variable is declared as the parameter. */
  parameter: {
    settings: {
      foreground: '#d8dee9', // white0
    },
  },
  /** Reserved language variables like this, super, self, etc. */
  language: {
    settings: {
      foreground: '#81a1c1',
    },
  },
  /** Other variables, like $some_variables. */
  other: {
    settings: {
      foreground: '#d8dee9',
    },
  },
};

export const standard = {
  comment,
  constant,
  entity,
  invalid,
  keyword,
  markup,
  meta,
  storage,
  string,
  support,
  variable,
};
