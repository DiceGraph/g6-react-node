(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    XQs4: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('xwgP'),
        l = n.n(a),
        r = n('u3DP'),
        c = n('koa0'),
        i = n('KL01');
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h1',
              { id: '\u4e8b\u4ef6\uff08event\uff09\u5c5e\u6027' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4e8b\u4ef6\uff08event\uff09\u5c5e\u6027',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4e8b\u4ef6\uff08Event\uff09\u5c5e\u6027',
            ),
            l.a.createElement(
              'p',
              null,
              '\u6bcf\u4e00\u4e2a\u5f62\u72b6\u90fd\u4f1a\u6709\u5355\u72ec\u7684\u4e8b\u4ef6\u54cd\u5e94\uff0c\u4ed6\u4eec\u4e4b\u95f4\u4e0d\u5b58\u5728\u5192\u6ce1\u89e6\u53d1\u903b\u8f91\uff1b',
            ),
            l.a.createElement(i['a'], {
              code:
                'type ShapeEventListner = (\n  event: IG6GraphEvent,\n  node: INode | null,\n  shape: IShape,\n  graph: Graph,\n) => void;\n',
              lang: 'typescript',
            }),
            l.a.createElement(
              'p',
              null,
              l.a.createElement(
                'h2',
                { id: 'api' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                'API',
              ),
              l.a.createElement(c['a'], {
                src: './Event.tsx',
                identifier: 'Event',
                export: 'default',
              }),
            ),
          ),
        );
      };
    },
    koa0: function(e, t, n) {
      'use strict';
      var a = n('xwgP'),
        l = n.n(a),
        r = n('u3DP'),
        c = {
          'zh-CN': {
            name: '\u5c5e\u6027\u540d',
            description: '\u63cf\u8ff0',
            type: '\u7c7b\u578b',
            default: '\u9ed8\u8ba4\u503c',
            required: '(\u5fc5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      t['a'] = e => {
        var t = e.identifier,
          n = e.export,
          i = Object(r['useApiData'])(t),
          u = Object(a['useContext'])(r['context']),
          d = u.locale,
          m = /^zh|cn$/i.test(d) ? c['zh-CN'] : c['en-US'];
        return l.a.createElement(
          l.a.Fragment,
          null,
          i &&
            l.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, m.name),
                  l.a.createElement('th', null, m.description),
                  l.a.createElement('th', null, m.type),
                  l.a.createElement('th', null, m.default),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                i[n].map(e =>
                  l.a.createElement(
                    'tr',
                    { key: e.identifier },
                    l.a.createElement('td', null, e.identifier),
                    l.a.createElement('td', null, e.description || '--'),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, e.type),
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement(
                        'code',
                        null,
                        e.default || (e.required && m.required) || '--',
                      ),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
  },
]);
