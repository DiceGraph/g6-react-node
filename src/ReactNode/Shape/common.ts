import { CSSProperties } from 'react';

export interface CommonShapeProps {
  /**
   * @description the color used to fill the shape, support rgb(a)/hex/gradient
   */
  fill?: string;
  /**
   * @description the color used to stroke the border of shape, support rgb(a)/hex/gradient
   */
  stroke?: string;
  /**
   * @descrition width of the stroke line
   */
  lineWidth?: string;
  /**
   * @description The lineDash of the stroke. If its type is Number[], the elements in the array are the lengths of the lineDash.
   */
  lineDash?: number | number[];
  /**
   * @description The color of the shadow.
   */
  shadowColor?: string;
  /**
   * @description The blur level for shadow.
   */
  shadowBlur?: number;
  /**
   * @description The horizontal offset of the shadow.
   */
  shadowOffsetX?: number;
  /**
   * @description The vertical offset of the shadow.
   */
  shadowOffsetY?: number;
  /**
   * @description The filling opacity (alpha value) of the shape. The priority is higher than opacity.
   */
  fillOpacity?: number;
  /**
   * @description The stroke opacity (alpha value) of the shape. The priority is higher than opacity.
   */
  strokeOpacity?: number;
  /**
   * @description The opacity (alpha value) of the shape.
   */
  opacity?: number;
  /**
   * @description Cursor when hover on it
   */
  cursor?: CSSProperties['cursor'];
  /**
   * @description left margin of shape
   */
  marginLeft?: number,
  /**
   * @description top margin of shape
   */
  marginTop?: number,
  /**
   * @description make next shape follow inline
   */
  next?: 'inline'
}

export type GPath =
  | ['Z']
  | ['H' | 'h' | 'V' | 'v' | 'T' | 't', number]
  | ['M' | 'm' | 'L' | 'l', number, number]
  | ['S' | 's' | 'Q' | 'q', number, number, number, number]
  | ['C' | 'c', number, number, number, number, number, number]
  | ['A' | 'a', number, number, number, number, number, number, number];

export type Arrow = boolean | {
  /**
   * SVG path string of arrow
   */
  path: string,
  /**
   * @description offset distance of the arrow
   */
  d: number
}
