(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    koa0: function(e, t, a) {
      'use strict';
      var n = a('xwgP'),
        l = a.n(n),
        r = a('u3DP'),
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
          a = e.export,
          i = Object(r['useApiData'])(t),
          o = Object(n['useContext'])(r['context']),
          m = o.locale,
          u = /^zh|cn$/i.test(m) ? c['zh-CN'] : c['en-US'];
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
                  l.a.createElement('th', null, u.name),
                  l.a.createElement('th', null, u.description),
                  l.a.createElement('th', null, u.type),
                  l.a.createElement('th', null, u.default),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                i[a].map(e =>
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
    ttng: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('xwgP'),
        l = a.n(n),
        r = a('u3DP'),
        c = a('koa0'),
        i = a('n3/x'),
        o = l.a.memo(a('Rsk4').default['polygon-demo'].component);
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h1',
                { id: 'polygon-style' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#polygon-style', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                'Polygon Style',
              ),
            ),
            l.a.createElement(
              i['default'],
              a('Rsk4').default['polygon-demo'].previewerProps,
              l.a.createElement(o, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
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
                  src: './PolygonStyle.tsx',
                  identifier: 'PolygonStyle',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);
