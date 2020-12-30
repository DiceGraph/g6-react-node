import React, { CSSProperties } from 'react';
import { GroupProps } from '../Group';
import { CommonShapeProps } from './common';

export interface TextStyle extends CommonShapeProps {
  /**
   * @description The x of the text depend on align and baseline.
   */
  x?: number;
  /**
   * @description The y of the text depend on align and baseline.
   */
  y?: number;
  /**
   * @description text align way, affect relative position of x
   */
  textAlign: 'center' | 'end' | 'left' | 'right' | 'start';
   /**
   * @description text baseline, affect relative position of y
   */
  textBaseline: 'top' | 'middle' | 'bottom' | 'alphabetic' | 'hanging';
  fontStyle: CSSProperties['fontSize'],
  fontWeight: CSSProperties['fontWeight'],
  fontVariant: CSSProperties['fontVariant'],
  fontSize: CSSProperties['fontSize'],
  fontFamily: CSSProperties['fontFamily'],
  lineHeight: CSSProperties['lineHeight'],
}

interface TextProps extends GroupProps {
  /**
   * @description style of shape
   */
  style: TextStyle;
}

const Text: React.FC<TextProps> = props => {
  const { children, ...rest } = props;

  return (
    <div
      data-attr={{
        ...rest,
        type: 'text',
      }}
    >
      {children}
    </div>
  );
};

export default Text;
