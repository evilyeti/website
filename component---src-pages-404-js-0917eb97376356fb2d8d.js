(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    212: function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n(1),
        l = n.n(t),
        i = n(219);
      a.default = function() {
        return l.a.createElement(
          i.a,
          { pageId: "not-found" },
          l.a.createElement("p", null, "404 - Page not found"),
        );
      };
    },
    219: function(e, a, n) {
      "use strict";
      var t = n(1),
        l = n.n(t),
        i = n(225),
        r = n(222),
        u = n(224),
        c = n(216),
        p = n(223),
        o = c.a.main.withConfig({ displayName: "DefaultLayout__Wrapper" })([
          "width:100%;margin:-60px auto 0;padding:15px;max-width:1200px;",
        ]);
      a.a = function(e) {
        var a = e.pageId,
          n = e.pageName,
          t = e.children;
        return l.a.createElement(
          "main",
          {
            className: "content-layout",
            style: { opacity: 0, visibility: "hidden" },
          },
          l.a.createElement(u.a, { pageId: a, pageName: n }),
          l.a.createElement(p.a, null),
          l.a.createElement(i.a, null),
          l.a.createElement(o, null, l.a.createElement("div", null, t)),
          l.a.createElement(r.a, null),
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-0917eb97376356fb2d8d.js.map
