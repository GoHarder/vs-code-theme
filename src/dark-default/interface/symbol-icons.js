// -------------------------------------------------------------------
// Symbol Icons colors
// The theme colors for symbol icons that appears in the Outline view,
// breadcrumb navigation, and suggest widget:
// -------------------------------------------------------------------

import chroma from 'chroma-js';
import { terminal, tokens } from '../colors/interface.js';

const symbolIcon = {
  // The foreground color for array symbols. {default: #cccccc}
  arrayForeground: undefined, // TODO: symbolIcon.arrayForeground

  // The foreground color for boolean symbols. {default: #cccccc}
  booleanForeground: undefined, // TODO: symbolIcon.booleanForeground

  // The foreground color for class symbols. {default: #ee9d28}
  classForeground: terminal.yellow,

  // The foreground color for color symbols. {default: #cccccc}
  colorForeground: undefined, // TODO: symbolIcon.colorForeground

  // The foreground color for constant symbols. {default: #cccccc}
  constantForeground: undefined, // TODO: symbolIcon.constantForeground

  // The foreground color for constructor symbols. {default: #b180d7}
  constructorForeground: terminal.magenta,

  // The foreground color for enumerator symbols. {default: #ee9d28}
  enumeratorForeground: terminal.yellow,

  // The foreground color for enumerator member symbols. {default: #75beff}
  enumeratorMemberForeground: terminal.blue,

  // The foreground color for event symbols. {default: #ee9d28}
  eventForeground: terminal.yellow,

  // The foreground color for field symbols. {default: #75beff}
  fieldForeground: terminal.blue,

  // The foreground color for file symbols. {default: #cccccc}
  fileForeground: undefined, // TODO: symbolIcon.fileForeground

  // The foreground color for folder symbols. {default: #cccccc}
  folderForeground: undefined, // TODO: symbolIcon.folderForeground

  // The foreground color for function symbols. {default: #b180d7}
  functionForeground: terminal.magenta,

  // The foreground color for interface symbols. {default: #75beff}
  interfaceForeground: terminal.blue,

  // The foreground color for key symbols. {default: #cccccc}
  keyForeground: undefined, // TODO: symbolIcon.keyForeground

  // The foreground color for keyword symbols. {default: #cccccc}
  keywordForeground: undefined, // TODO: symbolIcon.keywordForeground

  // The foreground color for method symbols. {default: #b180d7}
  methodForeground: terminal.magenta,

  // The foreground color for module symbols. {default: #cccccc}
  moduleForeground: undefined, // TODO: symbolIcon.moduleForeground

  // The foreground color for namespace symbols. {default: #cccccc}
  namespaceForeground: undefined, // TODO: symbolIcon.namespaceForeground

  // The foreground color for null symbols. {default: #cccccc}
  nullForeground: undefined, // TODO: symbolIcon.nullForeground

  // The foreground color for number symbols. {default: #cccccc}
  numberForeground: undefined, // TODO: symbolIcon.numberForeground

  // The foreground color for object symbols. {default: #cccccc}
  objectForeground: undefined, // TODO: symbolIcon.objectForeground

  // The foreground color for operator symbols. {default: #cccccc}
  operatorForeground: undefined, // TODO: symbolIcon.operatorForeground

  // The foreground color for package symbols. {default: #cccccc}
  packageForeground: undefined, // TODO: symbolIcon.packageForeground

  // The foreground color for property symbols. {default: #cccccc}
  propertyForeground: undefined, // TODO: symbolIcon.propertyForeground

  // The foreground color for reference symbols. {default: #cccccc}
  referenceForeground: undefined, // TODO: symbolIcon.referenceForeground

  // The foreground color for snippet symbols. {default: #cccccc}
  snippetForeground: undefined, // TODO: symbolIcon.snippetForeground

  // The foreground color for string symbols. {default: #cccccc}
  stringForeground: undefined, // TODO: symbolIcon.stringForeground

  // The foreground color for struct symbols. {default: #cccccc}
  structForeground: undefined, // TODO: symbolIcon.structForeground

  // The foreground color for text symbols. {default: #cccccc}
  textForeground: undefined, // TODO: symbolIcon.textForeground

  // The foreground color for type parameter symbols. {default: #cccccc}
  typeParameterForeground: undefined, // TODO: symbolIcon.typeParameterForeground

  // The foreground color for unit symbols. {default: #cccccc}
  unitForeground: undefined, // TODO: symbolIcon.unitForeground

  // The foreground color for variable symbols. {default: #75beff}
  variableForeground: terminal.blue,
};

export default {
  'symbolIcon.arrayForeground': symbolIcon.arrayForeground,
  'symbolIcon.booleanForeground': symbolIcon.booleanForeground,
  'symbolIcon.classForeground': symbolIcon.classForeground,
  'symbolIcon.colorForeground': symbolIcon.colorForeground,
  'symbolIcon.constantForeground': symbolIcon.constantForeground,
  'symbolIcon.constructorForeground': symbolIcon.constructorForeground,
  'symbolIcon.enumeratorForeground': symbolIcon.enumeratorForeground,
  'symbolIcon.enumeratorMemberForeground': symbolIcon.enumeratorMemberForeground,
  'symbolIcon.eventForeground': symbolIcon.eventForeground,
  'symbolIcon.fieldForeground': symbolIcon.fieldForeground,
  'symbolIcon.fileForeground': symbolIcon.fileForeground,
  'symbolIcon.folderForeground': symbolIcon.folderForeground,
  'symbolIcon.functionForeground': symbolIcon.functionForeground,
  'symbolIcon.interfaceForeground': symbolIcon.interfaceForeground,
  'symbolIcon.keyForeground': symbolIcon.keyForeground,
  'symbolIcon.keywordForeground': symbolIcon.keywordForeground,
  'symbolIcon.methodForeground': symbolIcon.methodForeground,
  'symbolIcon.moduleForeground': symbolIcon.moduleForeground,
  'symbolIcon.namespaceForeground': symbolIcon.namespaceForeground,
  'symbolIcon.nullForeground': symbolIcon.nullForeground,
  'symbolIcon.numberForeground': symbolIcon.numberForeground,
  'symbolIcon.objectForeground': symbolIcon.objectForeground,
  'symbolIcon.operatorForeground': symbolIcon.operatorForeground,
  'symbolIcon.packageForeground': symbolIcon.packageForeground,
  'symbolIcon.propertyForeground': symbolIcon.propertyForeground,
  'symbolIcon.referenceForeground': symbolIcon.referenceForeground,
  'symbolIcon.snippetForeground': symbolIcon.snippetForeground,
  'symbolIcon.stringForeground': symbolIcon.stringForeground,
  'symbolIcon.structForeground': symbolIcon.structForeground,
  'symbolIcon.textForeground': symbolIcon.textForeground,
  'symbolIcon.typeParameterForeground': symbolIcon.typeParameterForeground,
  'symbolIcon.unitForeground': symbolIcon.unitForeground,
  'symbolIcon.variableForeground': symbolIcon.variableForeground,
};
