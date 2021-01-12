import React, { ReactElement } from 'react';
import G6, { Graph } from '@antv/g6';
import { ModelConfig } from '@antv/g6';
import getShapeFromReact from '@/Layout/getDataFromReactNode';
import getPositionUsingYoga, {
  LayoutedNode,
} from '@/Layout/getPositionsUsingYoga';

/**
 * 对比前后两个最终计算出来的node，并对比出最小改动,
 * 动作： 'add' 添加节点 ｜ ’delete‘ 删除节点 ｜ ’change‘ 改变节点attrs ｜ 'restructure' 重构节点
 * @param nowTarget
 * @param formerTarget
 */
export function compareTwoTarget(
  nowTarget: LayoutedNode,
  formerTarget?: LayoutedNode,
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

export const registerNodeReact = (el: ReactElement) => {
  const result = getShapeFromReact(el);

  const target = getPositionUsingYoga(result);

  return target;
};

export function createNodeFromReact(
  Component: React.FC<{ cfg: ModelConfig }>,
  graph?: Graph,
) {
  const structures: { [key: string]: LayoutedNode[] } = {};
  const compileXML = (cfg: ModelConfig) =>
    registerNodeReact(<Component cfg={cfg} />);

  if (graph) {
    graph.on('node:click', evt => {});
  }

  return {
    draw(cfg: ModelConfig, fatherGroup: any) {
      const resultTarget = compileXML(cfg || {});
      let keyshape = fatherGroup;
      const renderTarget = (target: LayoutedNode, group: any) => {
        let g = group;
        const { attrs = {}, boundaryBox, type, children, props } = target;
        if (target.type !== 'group') {
          const shape = group.addShape(target.type, {
            attrs,
            origin: {
              boundaryBox,
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
