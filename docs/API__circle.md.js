(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    'H2T/': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('xwgP'),
        l = a.n(n),
        r = a('u3DP'),
        c = a('koa0'),
        i = a('n3/x'),
        m = l.a.memo(a('Rsk4').default['circle-demo'].component);
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
                { id: '\u5706-circle-\u6837\u5f0f\u5c5e\u6027' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#\u5706-circle-\u6837\u5f0f\u5c5e\u6027',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                '\u5706 (Circle) \u6837\u5f0f\u5c5e\u6027',
              ),
            ),
            l.a.createElement(
              i['default'],
              a('Rsk4').default['circle-demo'].previewerProps,
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
                l.a.createElement(c['a'], {
                  src: './CircleStyle.tsx',
                  identifier: 'CircleStyle',
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
          m = Object(n['useContext'])(r['context']),
          u = m.locale,
          d = /^zh|cn$/i.test(u) ? c['zh-CN'] : c['en-US'];
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
                  l.a.createElement('th', null, d.name),
                  l.a.createElement('th', null, d.description),
                  l.a.createElement('th', null, d.type),
                  l.a.createElement('th', null, d.default),
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
