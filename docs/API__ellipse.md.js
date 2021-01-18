(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    FIsr: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('xwgP'),
        l = a.n(n),
        r = a('u3DP'),
        i = a('koa0'),
        c = a('n3/x'),
        m = l.a.memo(a('Rsk4').default['ellipse-demo'].component);
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
                { id: '\u692d\u5706-ellipse-\u6837\u5f0f\u5c5e\u6027' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u692d\u5706-ellipse-\u6837\u5f0f\u5c5e\u6027',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                '\u692d\u5706 (Ellipse) \u6837\u5f0f\u5c5e\u6027',
              ),
            ),
            l.a.createElement(
              c['default'],
              a('Rsk4').default['ellipse-demo'].previewerProps,
              l.a.createElement(m, null),
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
                l.a.createElement(i['a'], {
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
      var n = a('xwgP'),
        l = a.n(n),
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
          m = Object(n['useContext'])(r['context']),
          u = m.locale,
          d = /^zh|cn$/i.test(u) ? i['zh-CN'] : i['en-US'];
        return l.a.createElement(
          l.a.Fragment,
          null,
          c &&
            l.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, d.name),
                  l.a.createElement('th', null, d.description),
                  l.a.createElement('th', null, d.type),
                  l.a.createElement('th', null, d.default),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                c[a].map(e =>
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
