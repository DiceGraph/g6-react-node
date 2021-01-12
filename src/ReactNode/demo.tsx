import React, { useEffect } from 'react';
import G6 from '@antv/g6';

export const G6MiniDemo = ({
  nodeType,
  count = 1,
  height = 200,
}: {
  nodeType: string;
  count: number;
  height: number;
}) => {
  useEffect(() => {
    const data = {
      nodes: 'e'
        .repeat(count)
        .split('')
        .map((e, i) => ({
          description: 'ant_type_name_...',
          label: 'Type / ReferType',
          color: '#7262fd',
          meta: {
            creatorName: 'a_creator',
          },
          id:
            'node' +
            i +
            Math.random()
              .toString(16)
              .slice(-4),
          type: nodeType,
        })),
      edges: [],
    };

    const width = document.getElementById('container')?.clientWidth || 800;

    const graph = new G6.Graph({
      container: 'container',
      width,
      height,
      fitCenter: true,
      modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas'],
      },
      layout: {
        type: 'dagre',
      },
    });
    const time = new Date();
    graph.data(data);
    graph.render();
    console.log(
      'Render time:',
      (Number(new Date()) - Number(time)) / 1000,
      's',
    );
  }, [count, nodeType]);

  return <div id="container"></div>;
};
