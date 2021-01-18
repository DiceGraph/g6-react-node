(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    BB9R: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('xwgP'),
        r = a.n(n),
        l = a('u3DP'),
        c = a('koa0'),
        i = a('n3/x'),
        m = r.a.memo(a('Rsk4').default['marker-demo'].component);
      t['default'] = function() {
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
                { id: '\u6807\u8bb0-marker-\u6837\u5f0f\u5c5e\u6027' },
                r.a.createElement(
                  l['AnchorLink'],
                  {
                    to: '#\u6807\u8bb0-marker-\u6837\u5f0f\u5c5e\u6027',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  r.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                '\u6807\u8bb0 (Marker) \u6837\u5f0f\u5c5e\u6027',
              ),
            ),
            r.a.createElement(
              i['default'],
              a('Rsk4').default['marker-demo'].previewerProps,
              r.a.createElement(m, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'p',
                null,
                r.a.createElement(
                  'h2',
                  { id: 'api' },
                  r.a.createElement(
                    l['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', {
                      className: ['icon', 'icon-link'],
                    }),
                  ),
                  'API',
                ),
                r.a.createElement(c['a'], {
                  src: './MarkerStyle.tsx',
                  identifier: 'MarkerStyle',
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
      var n = a('xwgP'),
        r = a.n(n),
        l = a('u3DP'),
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
          i = Object(l['useApiData'])(t),
          m = Object(n['useContext'])(l['context']),
          u = m.locale,
          d = /^zh|cn$/i.test(u) ? c['zh-CN'] : c['en-US'];
        return r.a.createElement(
          r.a.Fragment,
          null,
          i &&
            r.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, d.name),
                  r.a.createElement('th', null, d.description),
                  r.a.createElement('th', null, d.type),
                  r.a.createElement('th', null, d.default),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                i[a].map(e =>
                  r.a.createElement(
                    'tr',
                    { key: e.identifier },
                    r.a.createElement('td', null, e.identifier),
                    r.a.createElement('td', null, e.description || '--'),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement('code', null, e.type),
                    ),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement(
                        'code',
                        null,
                        e.default || (e.required && d.required) || '--',
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
