import React from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface ImageStyle extends CommonShapeProps {
  /**
   * @description The x of the left top  of the image.
   */
  x?: number;
  /**
   * @description The y of the left top of the image.
   */
  y?: number;
  /**
   * @description The width of the image.
   */
  width?: number;
  /**
   * @description The height of the image.
   */
  height?: number;
  /**
   * @description The img source of the image.
   */
  img: string | ImageData | CanvasImageData;
}

interface ImageProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: ImageStyle;
}

const Image: React.FC<ImageProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'image',
      }}
    >
      {children}
    </div>
  );
};

export default Image;
