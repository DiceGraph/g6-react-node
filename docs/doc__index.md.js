(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [25],
  {
    '7Uvp': function(n, e, t) {
      'use strict';
      t.r(e);
      var a = t('xwgP'),
        r = t.n(a),
        c = t('u3DP'),
        o = t('n3/x'),
        l = t('KL01'),
        i = r.a.memo(t('Rsk4').default['doc-demo'].component);
      e['default'] = function() {
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
                { id: '\u7528-react-\u5b9a\u4e49\u8282\u70b9' },
                r.a.createElement(
                  c['AnchorLink'],
                  {
                    to: '#\u7528-react-\u5b9a\u4e49\u8282\u70b9',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                '\u7528 React \u5b9a\u4e49\u8282\u70b9',
              ),
              r.a.createElement(
                'p',
                null,
                '\u76f4\u63a5\u7528 React \u7ec4\u4ef6\u5b9a\u4e49\u4f60\u7684 G6 \u7ec4\u4ef6\uff0c\u81ea\u5e26\u7c7b\u578b\u63d0\u793a\u3002',
              ),
            ),
            r.a.createElement(
              o['default'],
              t('Rsk4').default['doc-demo'].previewerProps,
              r.a.createElement(i, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(l['a'], {
                code:
                  "import {\n  Group,\n  Rect,\n  Text,\n  Circle,\n  Image,\n  createNodeFromReact,\n} from 'g6-react-node';\n\nconst ReactNode = ({ cfg = {} }) => {\n  const { description, meta = {}, label = 'label' } = cfg;\n  return (\n    <Group>\n      <Rect>\n        <Rect\n          style={{\n            width: 150,\n            height: 20,\n            fill: cfg.color,\n            radius: [6, 6, 0, 0],\n            cursor: 'move',\n            stroke: cfg.color,\n            justyfyContent: 'center',\n          }}\n          draggable=\"true\"\n        >\n          <Text\n            style={{\n              margin: [4, 5],\n              fontWeight: 'bold',\n              fill: '#fff',\n            }}\n          >\n            {label}\n          </Text>\n        </Rect>\n        <Rect\n          style={{\n            width: 150,\n            height: 55,\n            stroke: cfg.color,\n            fill: '#ffffff',\n            radius: [0, 0, 6, 6],\n          }}\n        >\n          <Text style={{ marginTop: 5, fill: '#333', margin: [8, 4] }}>\n            \u63cf\u8ff0: {description}\n          </Text>\n          <Text style={{ marginTop: 10, fill: '#333', margin: [6, 4] }}>\n            \u521b\u5efa\u8005: {meta.creatorName}\n          </Text>\n        </Rect>\n      </Rect>\n      <Circle\n        style={{\n          stroke: cfg.color,\n          r: 10,\n          fill: '#fff',\n          cursor: 'pointer',\n          margin: [0, 'auto'],\n        }}\n        name=\"circle\"\n      >\n        <Image\n          style={{\n            img:\n              'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',\n            width: 12,\n            height: 12,\n            margin: [4, 'auto'],\n          }}\n        />\n      </Circle>\n    </Group>\n  );\n};\n\nG6.registerNode('yourNode', createNodeFromReact(ReactNode));\n",
                lang: 'jsx',
              }),
            ),
          ),
        );
      };
    },
  },
]);
