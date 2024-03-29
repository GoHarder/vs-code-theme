// -------------------------------------------------------------------
// Symbol Icons colors
// The theme colors for symbol icons that appears in the Outline view,
// breadcrumb navigation, and suggest widget:
// -------------------------------------------------------------------

import { tokens } from '../colors.js';
import { icons } from '../syntax/index.js';

const symbolIcon = {
  // The foreground color for array symbols. {default: #cccccc}
  arrayForeground: icons.symbol.array || tokens.onSurfaceVariant,

  // The foreground color for boolean symbols. {default: #cccccc}
  booleanForeground: icons.symbol.boolean || tokens.onSurfaceVariant,

  // The foreground color for class symbols. {default: #ee9d28}
  classForeground: icons.symbol.class || tokens.onSurfaceVariant,

  // The foreground color for color symbols. {default: #cccccc}
  colorForeground: icons.symbol.color || tokens.onSurfaceVariant,

  // The foreground color for constant symbols. {default: #cccccc}
  constantForeground: icons.symbol.constant || tokens.onSurfaceVariant,

  // The foreground color for constructor symbols. {default: #b180d7}
  constructorForeground: icons.symbol.constructor || tokens.onSurfaceVariant,

  // The foreground color for enumerator symbols. {default: #ee9d28}
  enumeratorForeground: icons.symbol.enumerator || tokens.onSurfaceVariant,

  // The foreground color for enumerator member symbols. {default: #75beff}
  enumeratorMemberForeground: icons.symbol.enumeratorMember || tokens.onSurfaceVariant,

  // The foreground color for event symbols. {default: #ee9d28}
  eventForeground: icons.symbol.event || tokens.onSurfaceVariant,

  // The foreground color for field symbols. {default: #75beff}
  fieldForeground: icons.symbol.field || tokens.onSurfaceVariant,

  // The foreground color for file symbols. {default: #cccccc}
  fileForeground: icons.symbol.file || tokens.onSurfaceVariant,

  // The foreground color for folder symbols. {default: #cccccc}
  folderForeground: icons.symbol.folder || tokens.onSurfaceVariant,

  // The foreground color for function symbols. {default: #b180d7}
  functionForeground: icons.symbol.function || tokens.onSurfaceVariant,

  // The foreground color for interface symbols. {default: #75beff}
  interfaceForeground: icons.symbol.interface || tokens.onSurfaceVariant,

  // The foreground color for key symbols. {default: #cccccc}
  keyForeground: icons.symbol.key || tokens.onSurfaceVariant,

  // The foreground color for keyword symbols. {default: #cccccc}
  keywordForeground: icons.symbol.keyword || tokens.onSurfaceVariant,

  // The foreground color for method symbols. {default: #b180d7}
  methodForeground: icons.symbol.method || tokens.onSurfaceVariant,

  // The foreground color for module symbols. {default: #cccccc}
  moduleForeground: icons.symbol.module || tokens.onSurfaceVariant,

  // The foreground color for namespace symbols. {default: #cccccc}
  namespaceForeground: icons.symbol.namespace || tokens.onSurfaceVariant,

  // The foreground color for null symbols. {default: #cccccc}
  nullForeground: icons.symbol.null || tokens.onSurfaceVariant,

  // The foreground color for number symbols. {default: #cccccc}
  numberForeground: icons.symbol.number || tokens.onSurfaceVariant,

  // The foreground color for object symbols. {default: #cccccc}
  objectForeground: icons.symbol.object || tokens.onSurfaceVariant,

  // The foreground color for operator symbols. {default: #cccccc}
  operatorForeground: icons.symbol.operator || tokens.onSurfaceVariant,

  // The foreground color for package symbols. {default: #cccccc}
  packageForeground: icons.symbol.package || tokens.onSurfaceVariant,

  // The foreground color for property symbols. {default: #cccccc}
  propertyForeground: icons.symbol.property || tokens.onSurfaceVariant,

  // The foreground color for reference symbols. {default: #cccccc}
  referenceForeground: icons.symbol.reference || tokens.onSurfaceVariant,

  // The foreground color for snippet symbols. {default: #cccccc}
  snippetForeground: icons.symbol.snippet || tokens.onSurfaceVariant,

  // The foreground color for string symbols. {default: #cccccc}
  stringForeground: icons.symbol.string || tokens.onSurfaceVariant,

  // The foreground color for struct symbols. {default: #cccccc}
  structForeground: icons.symbol.struct || tokens.onSurfaceVariant,

  // The foreground color for text symbols. {default: #cccccc}
  textForeground: icons.symbol.text || tokens.onSurfaceVariant,

  // The foreground color for type parameter symbols. {default: #cccccc}
  typeParameterForeground: icons.symbol.typeParameter || tokens.onSurfaceVariant,

  // The foreground color for unit symbols. {default: #cccccc}
  unitForeground: icons.symbol.unit || tokens.onSurfaceVariant,

  // The foreground color for variable symbols. {default: #75beff}
  variableForeground: icons.symbol.variable || tokens.onSurfaceVariant,
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
