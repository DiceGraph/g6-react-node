import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface CircleStyle extends CommonShapeProps {
  /**
   * @description.en-US The radius of the circle.
   * @description.zh-CN 圆的半径
   */
  r: number;
}

interface CircleProps extends GroupProps {
  /**
   * @description.en-US style of shape
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
