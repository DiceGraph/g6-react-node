import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface EllipseStyle extends CommonShapeProps {
  /**
   * @description The x of the center of the Ellipse.
   */
  x?: number;
  /**
   * @description The y of the center of the Ellipse.
   */
  y?: number;
  /**
   * @description The horizontal raidus of the ellipse.
   */
  rx: number;
  /**
   * @description The vertical raidus of the ellipse.
   */
  ry: number;
}

interface EllipseProps extends GroupProps {
  /**
   * @description style of shape
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
