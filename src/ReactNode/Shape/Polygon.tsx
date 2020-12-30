import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface PolygonStyle extends CommonShapeProps {
  /**
   * @description The x of the center of the polygon.
   */
  x?: number;
  /**
   * @description The y of the center of the polygon.
   */
  y?: number;
  /**
   * @description The points of the polygon
   */
  points: [x: number, y: number][];
}

interface PolygonProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: PolygonStyle;
}

const Polygon: React.FC<PolygonProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'polygon',
      }}
    >
      {children}
    </div>
  );
};

export default Polygon;
