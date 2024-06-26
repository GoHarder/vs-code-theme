/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ColorSourceSchema {
  /**
   * The schema version of the theme.
   */
  $schema: string;
  /**
   * The color settings for the interface.
   */
  interface: {
    primary: InterfaceOptions1;
    secondary?: InterfaceOptions2;
    tertiary?: InterfaceOptions2;
    neutral?: InterfaceOptions1;
  };
  /**
   * The color settings for the syntax highlighting.
   */
  syntax: {
    /**
     * The name of the color.
     */
    name: string;
    /**
     * The color hex.
     */
    value: string;
    /**
     * Whether to blend the color with the primary color.
     */
    blend?: boolean;
  }[];
  /**
   * The color settings for the ANSI terminal.
   */
  ansi: {
    /**
     * The black ANSI terminal color.
     */
    black: string;
    /**
     * The red ANSI terminal color.
     */
    red: string;
    /**
     * The green ANSI terminal color.
     */
    green: string;
    /**
     * The yellow ANSI terminal color.
     */
    yellow: string;
    /**
     * The blue ANSI terminal color.
     */
    blue: string;
    /**
     * The magenta ANSI terminal color.
     */
    magenta: string;
    /**
     * The cyan ANSI terminal color.
     */
    cyan: string;
    /**
     * The white ANSI terminal color.
     */
    white: string;
    /**
     * The orange ANSI terminal color.
     */
    orange?: string;
    /**
     * The bright black ANSI terminal color.
     */
    brightBlack: string;
    /**
     * The bright red ANSI terminal color.
     */
    brightRed: string;
    /**
     * The bright green ANSI terminal color.
     */
    brightGreen: string;
    /**
     * The bright yellow ANSI terminal color.
     */
    brightYellow: string;
    /**
     * The bright blue ANSI terminal color.
     */
    brightBlue: string;
    /**
     * The bright magenta ANSI terminal color.
     */
    brightMagenta: string;
    /**
     * The bright cyan ANSI terminal color.
     */
    brightCyan: string;
    /**
     * The bright white ANSI terminal color.
     */
    brightWhite: string;
    /**
     * The bright orange ANSI terminal color.
     */
    brightOrange?: string;
    [k: string]: unknown;
  };
}
export interface InterfaceOptions1 {
  /**
   * The color hex.
   */
  value: string;
  /**
   * Adjust the color for visual contrast.
   */
  adjustColor?: boolean;
}
export interface InterfaceOptions2 {
  /**
   * The color override of the automatically generated color.
   */
  color?: string;
  /**
   * The hue shift from the primary color.
   */
  hueShift?: number;
  /**
   * The number to divide the primary color's chroma.
   */
  chromaSplit?: number;
}
