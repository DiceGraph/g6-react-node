import React from 'react';

export interface GroupProps {
  /**
   * @description The unique id of this group
   */
  id?: string;
  /**
   * @description The name of the shape which can be not unique.
   */
  name?: string;
  /**
   * @description Whether the group is visible
   */
  visible?: boolean;
  /**
   * @description Whether the group is capturable
   */
  capture?: boolean;
  /**
   * @description Whether the group is allowed to response dragstart, drag, and dragend events.
   */
  draggable?: boolean;
  /**
   * @description The visual layer index of the group
   */
  zIndex?: number;
}

const Group: React.FC<GroupProps> = props => {
  const { children, ...rest } = props;
  return (
    <div
      data-attr={{
        ...rest,
        type: 'group',
      }}
    >
      {children}
    </div>
  );
};

export default Group;
