import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface RectStyle extends CommonShapeProps {
  /**
   * @description The x of the left top of the rect.
   */
  x?: number;
  /**
   * @description The y of the left top of the rect.
   */
  y?: number;
  /**
   * @description The radius of the rect corner.
   */
  r?: number | number[];
  /**
   * @description The width of the rect.
   */
  width?: number,
  /**
   * @description The height of the rect.
   */
  height?: number,
}

interface RectProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: RectStyle;
}

const Rect: React.FC<RectProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'rect',
      }}
    >
      {children}
    </div>
  );
};

export default Rect;
