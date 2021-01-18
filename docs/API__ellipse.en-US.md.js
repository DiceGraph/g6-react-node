(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    dcQy: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('xwgP'),
        n = a.n(l),
        r = a('u3DP'),
        i = a('koa0'),
        c = a('n3/x'),
        m = n.a.memo(a('Rsk4').default['ellipse-demo'].component);
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              'div',
              { className: 'markdown' },
              n.a.createElement(
                'h1',
                { id: 'ellipse-style' },
                n.a.createElement(
                  r['AnchorLink'],
                  { to: '#ellipse-style', 'aria-hidden': 'true', tabIndex: -1 },
                  n.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                'Ellipse Style',
              ),
            ),
            n.a.createElement(
              c['default'],
              a('Rsk4').default['ellipse-demo'].previewerProps,
              n.a.createElement(m, null),
            ),
            n.a.createElement(
              'div',
              { className: 'markdown' },
              n.a.createElement(
                'p',
                null,
                n.a.createElement(
                  'h2',
                  { id: 'api' },
                  n.a.createElement(
                    r['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    n.a.createElement('span', {
                      className: ['icon', 'icon-link'],
                    }),
                  ),
                  'API',
                ),
                n.a.createElement(i['a'], {
                  src: './EllipseStyle.tsx',
                  identifier: 'EllipseStyle',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
    koa0: function(e, t, a) {
      'use strict';
      var l = a('xwgP'),
        n = a.n(l),
        r = a('u3DP'),
        i = {
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
          a = e.export,
          c = Object(r['useApiData'])(t),
          m = Object(l['useContext'])(r['context']),
          d = m.locale,
          u = /^zh|cn$/i.test(d) ? i['zh-CN'] : i['en-US'];
        return n.a.createElement(
          n.a.Fragment,
          null,
          c &&
            n.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, u.name),
                  n.a.createElement('th', null, u.description),
                  n.a.createElement('th', null, u.type),
                  n.a.createElement('th', null, u.default),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                c[a].map(e =>
                  n.a.createElement(
                    'tr',
                    { key: e.identifier },
                    n.a.createElement('td', null, e.identifier),
                    n.a.createElement('td', null, e.description || '--'),
                    n.a.createElement(
                      'td',
                      null,
                      n.a.createElement('code', null, e.type),
                    ),
                    n.a.createElement(
                      'td',
                      null,
                      n.a.createElement(
                        'code',
                        null,
                        e.default || (e.required && u.required) || '--',
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
