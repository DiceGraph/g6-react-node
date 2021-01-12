import Yoga, { Node, YogaNode } from 'yoga-layout';
import { RawNode } from './getDataFromReactNode';
import getSizeOfShape from './getShapeSize';
import {
  DisplayMap,
  FlexDirectionMap,
  FlexWrapMap,
  JustifyContentMap,
  LayoutAlignMap,
} from './LayoutEnums';

const getFourFromNumOrArr = (target: string | number | (string | number)[]) => {
  if (target instanceof Array) {
    switch (target.length) {
      case 1:
        const m = target[0];
        return [m, m, m, m];
      case 2:
        const [tb, lr] = target;
        return [tb, lr, tb, lr];
      case 3:
        const [t, lar, b] = target;
        return [t, lar, b, lar];
      case 4:
        return target;
      default:
        return [0, 0, 0, 0];
    }
  } else {
    return [target, target, target, target];
  }
};

const constructYogaNode = (node: RawNode) => {
  const yogaNode = Node.create();
  const style = node.attrs;
  if (style.position === 'absolute') {
    yogaNode.setWidth(0);
    yogaNode.setHeight(0);
    return yogaNode;
  }
  if (style.alignContent) {
    yogaNode.setAlignContent(LayoutAlignMap[style.alignContent]);
  }
  if (style.alignItems) {
    yogaNode.setAlignItems(LayoutAlignMap[style.alignItems]);
  }
  if (style.alignSelf) {
    yogaNode.setAlignSelf(LayoutAlignMap[style.alignSelf]);
  }
  if (style.display) {
    yogaNode.setDisplay(DisplayMap[style.display]);
  } else {
    yogaNode.setDisplay(DisplayMap['flex']);
  }
  if (style.flex) {
    yogaNode.setFlex(style.flex);
  }
  if (style.flexBasis) {
    yogaNode.setFlexBasis(style.flexBasis);
  }
  if (style.flexGrow) {
    yogaNode.setFlexGrow(style.flexGrow);
  }
  if (style.flexShrink) {
    yogaNode.setFlexShrink(style.flexShrink);
  }
  if (style.flexDirection) {
    yogaNode.setFlexDirection(FlexDirectionMap[style.flexDirection]);
  }
  if (style.flexWrap) {
    yogaNode.setFlexWrap(FlexWrapMap[style.flexWrap]);
  }
  if (style.justifyContent) {
    yogaNode.setJustifyContent(JustifyContentMap[style.justifyContent]);
  }
  if (style.maxHeight) {
    yogaNode.setMaxHeight(style.maxHeight);
  }
  if (style.minHeight) {
    yogaNode.setMinHeight(style.minHeight);
  }
  if (style.maxWidth) {
    yogaNode.setMaxWidth(style.maxWidth);
  }
  if (style.minWidth) {
    yogaNode.setMinWidth(style.minWidth);
  }
  if (style.height) {
    if (style.height === 'auto') {
      yogaNode.setHeightAuto();
    } else {
      yogaNode.setHeight(style.height);
    }
  }
  if (style.width) {
    if (style.width === 'auto') {
      yogaNode.setWidthAuto();
    } else {
      yogaNode.setWidth(style.width);
    }
  }
  if (style.margin) {
    const marginArray = getFourFromNumOrArr(style.margin);

    if (marginArray[0] === 'auto') {
      yogaNode.setMarginAuto(Yoga.EDGE_TOP);
    } else {
      yogaNode.setMargin(Yoga.EDGE_TOP, marginArray[0]);
    }

    if (marginArray[1] === 'auto') {
      yogaNode.setMarginAuto(Yoga.EDGE_RIGHT);
    } else {
      yogaNode.setMargin(Yoga.EDGE_RIGHT, marginArray[1]);
    }

    if (marginArray[2] === 'auto') {
      yogaNode.setMarginAuto(Yoga.EDGE_BOTTOM);
    } else {
      yogaNode.setMargin(Yoga.EDGE_BOTTOM, marginArray[2]);
    }

    if (marginArray[3] === 'auto') {
      yogaNode.setMarginAuto(Yoga.EDGE_LEFT);
    } else {
      yogaNode.setMargin(Yoga.EDGE_LEFT, marginArray[3]);
    }
  }

  if (style.padding) {
    const paddingArray = getFourFromNumOrArr(style.padding);
    yogaNode.setPadding(Yoga.EDGE_TOP, paddingArray[0]);
    yogaNode.setPadding(Yoga.EDGE_RIGHT, paddingArray[1]);
    yogaNode.setPadding(Yoga.EDGE_BOTTOM, paddingArray[2]);
    yogaNode.setPadding(Yoga.EDGE_LEFT, paddingArray[3]);
  }

  return yogaNode;
};

export interface LayoutedNode extends RawNode {
  boundaryBox: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  children: LayoutedNode[];
}

const getPositionUsingYoga = (root: RawNode): LayoutedNode => {
  const basicContainer = Node.create();
  const constructNodes = (node: RawNode, isRoot?: boolean) => {
    const size = getSizeOfShape(node.type, node.attrs);
    if (!node.attrs.width) {
      node.attrs.width = size.width || 0;
    }
    if (!node.attrs.height) {
      node.attrs.height = size.height || 0;
    }
    const yogaNode = constructYogaNode(node);
    const children: (RawNode & { container: YogaNode })[] = [];

    for (let i = 0; i < node.children.length; i += 1) {
      children[i] = constructNodes(node.children[i]);
      yogaNode.insertChild(children[i].container, i);
    }

    if (isRoot) {
      basicContainer.insertChild(yogaNode, 0);
    }

    return {
      ...node,
      container: yogaNode,
      children,
    };
  };

  const caculateNodes = (
    node: RawNode & { container?: YogaNode },
    parentBoundaryBox: {
      width: number;
      height: number;
      x: number;
      y: number;
    },
  ): LayoutedNode => {
    const boundaryBox = {
      width: Number(node.attrs.width) || 0,
      height: Number(node.attrs.height) || 0,
      x: 0,
      y: 0,
    };
    const { container, ...restNode } = node;

    if (restNode.attrs.position === 'absolute') {
      boundaryBox.x = restNode.attrs.x;
      boundaryBox.y = restNode.attrs.y;
    } else if (container) {
      const layout = container.getComputedLayout();
      boundaryBox.width = layout.width;
      boundaryBox.height = layout.height;
      boundaryBox.x = layout.left + parentBoundaryBox.x;
      boundaryBox.y = layout.top + parentBoundaryBox.y;
      if (['circle', 'ellipse'].includes(restNode.type)) {
        boundaryBox.x += boundaryBox.width / 2;
        boundaryBox.y += boundaryBox.height / 2;
      }
      if (restNode.type === 'text') {
        boundaryBox.y += boundaryBox.height;
      }
    }

    return {
      ...restNode,
      attrs: {
        ...restNode.attrs,
        ...boundaryBox,
      },
      children: restNode.children?.map(e => caculateNodes(e, boundaryBox)),
      boundaryBox,
    };
  };

  // init container
  basicContainer.setWidthAuto();
  basicContainer.setHeightAuto();
  const newNodes = constructNodes(root, true);
  basicContainer.calculateLayout();

  return caculateNodes(newNodes, {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
};

export default getPositionUsingYoga;
