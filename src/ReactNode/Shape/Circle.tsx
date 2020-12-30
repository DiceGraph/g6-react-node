import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface CircleStyle extends CommonShapeProps {
  /**
   * @description The x of the center of the circle.
   */
  x?: number;
  /**
   * @description The y of the center of the circle.
   */
  y?: number;
  /**
   * @description The radius of the circle.
   */
  r: number;
}

interface CircleProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: CircleStyle;
}

const Circle: React.FC<CircleProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'circle',
      }}
    >
      {children}
    </div>
  );
};

export default Circle;
