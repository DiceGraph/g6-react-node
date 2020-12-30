import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps, GPath } from './common';

export interface MarkerStyle extends CommonShapeProps {
  /**
   * @description The x of the center of the marker.
   */
  x?: number;
  /**
   * @description The y of the center of the marker.
   */
  y?: number;
  /**
   * @description The radius of the marker.
   */
  r: number;
  /**
   * @description Built-in shapes or function return path array;
   */
  symbol:
    | 'circle'
    | 'square'
    | 'diamond'
    | 'triangle'
    | 'triangle-down'
    | ((x: number, y: number, r: number) => GPath[]);
}

interface MarkerProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: MarkerStyle;
}

const Marker: React.FC<MarkerProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'marker',
      }}
    >
      {children}
    </div>
  );
};

export default Marker;
