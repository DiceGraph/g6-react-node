import React from 'react';
import { GroupProps } from '../Group';
import { Arrow, CommonShapeProps, GPath } from './common';

export interface PathStyle extends CommonShapeProps {
  /**
   * @description The x of the center of the path.
   */
  path: GPath[],
  /**
   * @description Show the arrow on the start of the path.
   */
  startArrow?: Arrow,
  /**
   * @description Show the arrow on the end of the path.
   */
  endArrow?: Arrow,
  /**
   * @description The hitting area of the path. Enlarge the hitting area by enlarging its value.
   */
  lineAppendWidth?: number,
  /**
   * @description The style of two ends of the path. Default miter
   */
  lineCap?: 'bevel' | 'round' | 'miter',
  /**
   * @description The style of the intersection of two path. Default miter
   */
  lineJoin?: 'bevel' | 'round' | 'miter',
  /**
   * @description The maximum miter length.
   */
  miterLimit?: number,
}

interface PathProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: PathStyle;
}

const Path: React.FC<PathProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'path',
      }}
    >
      {children}
    </div>
  );
};

export default Path;
