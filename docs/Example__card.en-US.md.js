(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    KRZh: function(e, a, n) {
      'use strict';
      n.r(a);
      var l = n('xwgP'),
        t = n.n(l),
        r = n('u3DP'),
        m = n('n3/x'),
        c = t.a.memo(n('Rsk4').default['card-demo'].component);
      a['default'] = function() {
        return t.a.createElement(
          t.a.Fragment,
          null,
          t.a.createElement(
            t.a.Fragment,
            null,
            t.a.createElement(
              'div',
              { className: 'markdown' },
              t.a.createElement(
                'h1',
                { id: 'simple-card-example' },
                t.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#simple-card-example',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  t.a.createElement('span', {
                    className: ['icon', 'icon-link'],
                  }),
                ),
                'Simple Card Example',
              ),
              t.a.createElement(
                'blockquote',
                null,
                t.a.createElement('p', null, 'This is a simple card example'),
              ),
            ),
            t.a.createElement(
              m['default'],
              n('Rsk4').default['card-demo'].previewerProps,
              t.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
