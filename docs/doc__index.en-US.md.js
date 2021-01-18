(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [24],
  {
    SiKz: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('xwgP'),
        r = t.n(a),
        o = t('u3DP'),
        c = t('n3/x'),
        l = t('KL01'),
        i = r.a.memo(t('Rsk4').default['doc-demo'].component);
      n['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h1',
                { id: 'register-node-using-react' },
                r.a.createElement(
                  o['AnchorLink'],
                  {
                    to: '#register-node-using-react',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                'Register Node Using React',
              ),
              r.a.createElement(
                'p',
                null,
                'How about building your G6 node using React Component with correct type inference.',
              ),
            ),
            r.a.createElement(
              c['default'],
              t('Rsk4').default['doc-demo'].previewerProps,
              r.a.createElement(i, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(l['a'], {
                code:
                  "import {\n  Group,\n  Rect,\n  Text,\n  Circle,\n  Image,\n  createNodeFromReact,\n} from 'g6-react-node';\n\nconst ReactNode = ({ cfg = {} }) => {\n  const { description, meta = {}, label = 'label' } = cfg;\n  return (\n    <Group>\n      <Rect>\n        <Rect\n          style={{\n            width: 150,\n            height: 20,\n            fill: cfg.color,\n            radius: [6, 6, 0, 0],\n            cursor: 'move',\n            stroke: cfg.color,\n          }}\n          draggable=\"true\"\n        >\n          <Text\n            style={{\n              marginTop: 2,\n              marginLeft: 75,\n              textAlign: 'center',\n              fontWeight: 'bold',\n              fill: '#fff',\n            }}\n          >\n            {label}\n          </Text>\n        </Rect>\n        <Rect\n          style={{\n            width: 150,\n            height: 55,\n            stroke: cfg.color,\n            fill: '#ffffff',\n            radius: [0, 0, 6, 6],\n          }}\n        >\n          <Text style={{ marginTop: 5, fill: '#333', marginLeft: 4 }}>\n            \u63cf\u8ff0: {description}\n          </Text>\n          <Text style={{ marginTop: 10, fill: '#333', marginLeft: 4 }}>\n            \u521b\u5efa\u8005: {meta.creatorName}\n          </Text>\n        </Rect>\n      </Rect>\n      <Circle\n        style={{\n          stroke: cfg.color,\n          r: 10,\n          fill: '#fff',\n          marginLeft: 75,\n          cursor: 'pointer',\n        }}\n        name=\"circle\"\n      >\n        <Image\n          style={{\n            img:\n              'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',\n            width: 12,\n            height: 12,\n            marginLeft: 69,\n            marginTop: -5,\n          }}\n        />\n      </Circle>\n    </Group>\n  );\n};\n\nG6.registerNode('yourNode', createNodeFromReact(ReactNode));\n",
                lang: 'jsx',
              }),
            ),
          ),
        );
      };
    },
  },
]);
