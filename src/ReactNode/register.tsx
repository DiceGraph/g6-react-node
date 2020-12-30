import React, { ReactElement } from 'react';
import G6, { Graph } from '@antv/g6';
import { G6Event, ModelConfig, NodeConfig } from '@antv/g6/lib/types';
import Group from './Group';

const getTextSize = G6.Util.getTextSize;
interface NodeInstructure {
  type: string;
  attrs: { [key: string]: any };
  children: NodeInstructure[];
  props: { [key: string]: any };
  bbox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

/**
 * 根据偏移量和内部节点最终的bounding box来得出该shape最终的bbox
 */
export function getBBox(
  node: NodeInstructure,
  offset: { x: number; y: number },
  chilrenBBox: { width: number; height: number },
) {
  const { attrs = {} } = node;
  const bbox = {
    x: offset.x || 0,
    y: offset.y || 0,
    width: chilrenBBox.width || 0,
    height: chilrenBBox.height || 0,
  };

  let shapeHeight, shapeWidth;
  switch (node.type) {
    case 'maker':
    case 'circle':
      if (attrs.r) {
        shapeWidth = 2 * attrs.r;
        shapeHeight = 2 * attrs.r;
      }
      break;
    case 'text':
      if (attrs.text) {
        shapeWidth = getTextSize(attrs.text, attrs.fontSize || 12)[0];
        shapeHeight = 16;
        bbox.y += shapeHeight;
        bbox.height = shapeHeight;
        bbox.width = shapeWidth;
        node.attrs = {
          fontSize: 12,
          fill: '#000',
          ...attrs,
        };
      }
      break;
    default:
      if (attrs.width) {
        shapeWidth = attrs.width;
      }
      if (attrs.height) {
        shapeHeight = attrs.height;
      }
  }
  if (shapeHeight >= 0) {
    bbox.height = shapeHeight;
  }
  if (shapeWidth >= 0) {
    bbox.width = shapeWidth;
  }

  if (attrs.marginTop) {
    bbox.y += attrs.marginTop;
  }

  if (attrs.marginLeft) {
    bbox.x += attrs.marginLeft;
  }

  return bbox;
}

/**
 * 把从xml计算出的结构填上位置信息，补全attrs
 * @param target
 * @param lastOffset
 */
export function generateTarget(
  target: NodeInstructure,
  lastOffset = { x: 0, y: 0 },
) {
  const defaultBbox = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  if (target.children?.length) {
    const { attrs = {} } = target;
    const { marginTop } = attrs;
    const offset = { ...lastOffset };

    if (marginTop) {
      offset.y += marginTop;
    }

    for (let index = 0; index < target.children.length; index += 1) {
      target.children[index].attrs.key = `${attrs.key || 'root'} -${index} `;
      const node = generateTarget(target.children[index], { ...offset });
      if (node.bbox) {
        const { bbox } = node;
        if (node.attrs.next === 'inline') {
          offset.x += bbox.width;
        } else {
          offset.x = lastOffset.x;
          offset.y += bbox.height;
        }
        if (bbox.width + bbox.x > defaultBbox.width) {
          defaultBbox.width = bbox.width + bbox.x;
        }
        if (bbox.height + bbox.y > defaultBbox.height) {
          defaultBbox.height = bbox.height + bbox.y;
        }
      }
    }
  }

  target.bbox = getBBox(target, lastOffset, defaultBbox);

  target.attrs = {
    ...target.attrs,
    ...target.bbox,
  };

  return target;
}

/**
 * 对比前后两个最终计算出来的node，并对比出最小改动,
 * 动作： 'add' 添加节点 ｜ ’delete‘ 删除节点 ｜ ’change‘ 改变节点attrs ｜ 'restructure' 重构节点
 * @param nowTarget
 * @param formerTarget
 */
export function compareTwoTarget(
  nowTarget: NodeInstructure,
  formerTarget?: NodeInstructure,
): { [key: string]: any } {
  const { type } = nowTarget || {};
  const { key } = formerTarget?.attrs || {};

  if (key && nowTarget) {
    nowTarget.attrs.key = key;
  }

  if (!nowTarget && formerTarget) {
    return {
      action: 'delete',
      val: formerTarget,
      type,
      key,
    };
  }
  if (nowTarget && !formerTarget) {
    return {
      action: 'add',
      val: nowTarget,
      type,
    };
  }
  if (!nowTarget && !formerTarget) {
    return {
      action: 'same',
      type,
    };
  }

  if (!formerTarget) {
    return {};
  }

  const children = [];

  if (nowTarget.children?.length > 0 || formerTarget.children?.length > 0) {
    const length = Math.max(
      nowTarget.children?.length,
      formerTarget.children?.length,
    );
    const formerChilren = formerTarget.children || [];
    const nowChilren = nowTarget.children || [];

    for (let index = 0; index < length; index += 1) {
      children.push(compareTwoTarget(nowChilren[index], formerChilren[index]));
    }
  }

  const formerKeys = Object.keys(formerTarget.attrs);
  const nowKeys = Object.keys(nowTarget.attrs);

  if (formerTarget.type !== nowTarget.type) {
    return {
      action: 'restructure',
      nowTarget,
      formerTarget,
      key,
      children,
    };
  }

  if (
    formerKeys
      .filter(e => e !== 'children')
      .some(
        e =>
          nowTarget.attrs[e] !== formerTarget.attrs[e] || !nowKeys.includes(e),
      )
  ) {
    return {
      action: 'change',
      val: nowTarget,
      children,
      type,
      key,
    };
  }

  return {
    action: 'same',
    children,
    type,
    key,
  };
}

const getShapeFromReact = (REl: ReactElement): NodeInstructure => {
  if (typeof REl === 'string') {
    return REl;
  }

  if (typeof REl.type === 'string') {
    const data = REl.props['data-attr'] || {};
    const { style: attrs = {}, type, ...props } = data;
    const { children: ochildren } = REl.props;
    if (type === 'text') {
      attrs.text = ochildren.join ? ochildren.join('') : ochildren;
      return {
        type,
        attrs,
        props,
        children: [],
      };
    }
    let children = [];
    if (typeof ochildren === 'object' && ochildren?.length) {
      children = ochildren.filter((e: any) => !!e).map((e: ReactElement) => getShapeFromReact(e));
    } else if (ochildren) {
      children = [getShapeFromReact(ochildren)];
    }

    return {
      type,
      attrs,
      props,
      children,
    };
  } else {
    const Element = REl.type as any;
    try {
      return getShapeFromReact(new Element({ ...REl.props }));
    } catch (e) {
      return getShapeFromReact(Element({ ...REl.props }));
    }
  }
};

export const registerNodeReact = (el: ReactElement) => {
  const result = getShapeFromReact(el);

  return generateTarget(result);
};

export function createNodeFromReact(Component: React.FC<{ cfg: ModelConfig }>, graph?: Graph) {
  const structures: { [key: string]: NodeInstructure[] } = {};
  const compileXML = (cfg: ModelConfig) =>
    registerNodeReact(<Component cfg={cfg} />);

  if (graph) {
    graph.on('node:click', (evt) => {
      
    })
  }

  return {
    draw(cfg: ModelConfig, fatherGroup: any) {
      const resultTarget = compileXML(cfg || {});
      let keyshape = fatherGroup;
      const renderTarget = (target: NodeInstructure, group: any) => {
        let g = group;
        const { attrs = {}, bbox, type, children, props } = target;
        if (target.type !== 'group') {
          const shape = group.addShape(target.type, {
            attrs,
            origin: {
              bbox,
              type,
              children,
            },
            ...props,
          });
          if (target.props.keyshape) {
            keyshape = shape;
          }
        } else {
          g = group.addGroup(props);
        }

        if (target.children) {
          target.children.forEach(n => renderTarget(n, g));
        }
      };

      renderTarget(resultTarget, fatherGroup);

      structures[String(cfg.id)] = [resultTarget];

      return keyshape;
    },
    update(cfg: ModelConfig, node: any) {
      if (!structures[String(cfg.id)]) {
        structures[String(cfg.id)] = [];
      }
      const container = node.getContainer();
      const children = container.get('children');
      const newTarget = compileXML(cfg);
      const lastTarget = structures[String(cfg.id)].pop();
      const diffResult = compareTwoTarget(newTarget, lastTarget);
      const addShape = (shape: any) => {
        if (shape.type !== 'group') {
          container.addShape(shape.type, { attrs: shape.attrs });
        }
        if (shape.children?.length) {
          shape.children.map((e: any) => addShape(e));
        }
      };
      const delShape = (shape: any) => {
        const targetShape = children.find(
          (e: any) => e.attrs.key === shape.attrs.key,
        );
        if (targetShape) {
          container.removeChild(targetShape);
        }
        if (shape.children?.length) {
          shape.children.map((e: any) => delShape(e));
        }
      };
      const updateTarget = (target: any) => {
        const { key } = target;
        if (target.type !== 'group') {
          const targetShape = children.find((e: any) => e.attrs.key === key);
          switch (target.action) {
            case 'change':
              if (targetShape) {
                const originAttr = target.val.keyshape
                  ? node.getOriginStyle()
                  : {};
                targetShape.attr({ ...originAttr, ...target.val.attrs });
              }
              break;
            case 'add':
              addShape(target.val);
              break;
            case 'delete':
              delShape(target.val);
              break;
            case 'restructure':
              delShape(target.formerTarget);
              addShape(target.nowTarget);
              break;
            default:
              break;
          }
        }

        if (target.children) {
          target.children.forEach((n: any) => updateTarget(n));
        }
      };

      updateTarget(diffResult);

      structures[String(cfg.id)].push(newTarget);
    },
    getAnchorPoints() {
      return [
        [0, 0.5],
        [1, 0.5],
        [0.5, 1],
        [0.5, 0],
      ];
    },
  } as any;
}
