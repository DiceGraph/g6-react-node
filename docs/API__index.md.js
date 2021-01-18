(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
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
          u = Object(n['useContext'])(l['context']),
          d = u.locale,
          o = /^zh|cn$/i.test(d) ? c['zh-CN'] : c['en-US'];
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
                  r.a.createElement('th', null, o.name),
                  r.a.createElement('th', null, o.description),
                  r.a.createElement('th', null, o.type),
                  r.a.createElement('th', null, o.default),
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
                        e.default || (e.required && o.required) || '--',
                      ),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    tHKL: function(e, t, a) {
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
              { id: '\u56fe\u5f62\u5171\u6709\u5c5e\u6027-\u4e0e-group\u7ec4' },
              r.a.createElement(
                l['AnchorLink'],
                {
                  to:
                    '#\u56fe\u5f62\u5171\u6709\u5c5e\u6027-\u4e0e-group\u7ec4',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                r.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u56fe\u5f62\u5171\u6709\u5c5e\u6027 \u4e0e Group(\u7ec4)',
            ),
            r.a.createElement(
              'p',
              null,
              '\u6211\u4eec\u5efa\u8bae\u6bcf\u4e00\u4e2a\u5355\u5143\u7684\u56fe\u5f62\uff0c\u90fd\u5e94\u8be5\u6709\u5e8f\u7684\u5b58\u653e\u5728\u4e00\u4e2a Group \u91cc\uff0c\u4e00\u4e2a\u8282\u70b9\u7ec4\u4ef6\uff0c\u5e94\u8be5\u88ab Group \u5305\u88f9',
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
  },
]);
