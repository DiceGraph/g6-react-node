(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    '5/94': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('xwgP'),
        r = a.n(n),
        l = a('u3DP'),
        c = a('koa0');
      t['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h1',
              { id: 'group--common' },
              r.a.createElement(
                l['AnchorLink'],
                { to: '#group--common', 'aria-hidden': 'true', tabIndex: -1 },
                r.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Group & Common',
            ),
            r.a.createElement(
              'p',
              null,
              "Every component should be wrapped in a Group component, it's a way to group shape.",
            ),
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
                src: '../ReactNode/Group.tsx',
                identifier: 'Group',
                export: 'default',
              }),
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
          o = Object(n['useContext'])(l['context']),
          u = o.locale,
          m = /^zh|cn$/i.test(u) ? c['zh-CN'] : c['en-US'];
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
                  r.a.createElement('th', null, m.name),
                  r.a.createElement('th', null, m.description),
                  r.a.createElement('th', null, m.type),
                  r.a.createElement('th', null, m.default),
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
