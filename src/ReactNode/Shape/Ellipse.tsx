import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface EllipseStyle extends CommonShapeProps {
  /**
   * @description.en-US The horizontal raidus of the ellipse.
   * @description.zh-CN 椭圆的水平半径
   */
  rx: number;
  /**
   * @description.en-US The vertical raidus of the ellipse.
   * @description.zh-CN 椭圆的纵向半径
   */
  ry: number;
}

interface EllipseProps extends GroupProps {
  /**
   * @description.en-US style of shape
   */
  style: EllipseStyle;
}

const Ellipse: React.FC<EllipseProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'ellipse',
      }}
    >
      {children}
    </div>
  );
};

export default Ellipse;
