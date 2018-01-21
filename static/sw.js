importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-demo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0663dd8728857db266c6.js",
    "revision": "14656c44c756663347415b3d27e384f1"
  },
  {
    "url": "/_nuxt/app.80f199edb985bad79b4d8a3045a56655.css",
    "revision": "80f199edb985bad79b4d8a3045a56655"
  },
  {
    "url": "/_nuxt/layouts/default.a39b4e4fa438e400002a.js",
    "revision": "df39535e4b46682177bd6ce22169e9ad"
  },
  {
    "url": "/_nuxt/manifest.722a88d86bf4ae6d7f40.js",
    "revision": "352fc26f20c36e09650e228fff4218c0"
  },
  {
    "url": "/_nuxt/pages/about.8dfe858389607d0a017c.js",
    "revision": "aebe4390a84d6934b6b8f7386734b7d4"
  },
  {
    "url": "/_nuxt/pages/article/_id.30de8292ac71f60ea2a6.js",
    "revision": "b8cda7abb0cc73101d8ce418a2a29495"
  },
  {
    "url": "/_nuxt/pages/backend/admin/list.37e276f6a8e4d2343dc4.js",
    "revision": "6512acf98f573de3c7dabc4e72bc74ac"
  },
  {
    "url": "/_nuxt/pages/backend/admin/modify/_id.35c3a469d16c5d8c8dd3.js",
    "revision": "d162b332b33135afcf40059dbe63d9f0"
  },
  {
    "url": "/_nuxt/pages/backend/article/comment/_id.2d4c18b40514e7b5f3f3.js",
    "revision": "14011db0572e403ae7110f9ae9be449e"
  },
  {
    "url": "/_nuxt/pages/backend/article/insert.61726eea9da32183999a.js",
    "revision": "48b017bdf6318e2f64d871e06b19173d"
  },
  {
    "url": "/_nuxt/pages/backend/article/list.4544365a727d5d6c8a15.js",
    "revision": "ea593f637ebbd88b620fc6b5308dc235"
  },
  {
    "url": "/_nuxt/pages/backend/article/modify/_id.f6cc4dd1bc220a5d83e7.js",
    "revision": "af120f471e970b87618f7295a48fa76d"
  },
  {
    "url": "/_nuxt/pages/backend/category/insert.65a1f42903242e32597e.js",
    "revision": "afd00e2c9f21c42dd2afd247bf52ea31"
  },
  {
    "url": "/_nuxt/pages/backend/category/list.8d3a88bc1e821a29e7bf.js",
    "revision": "ee53d8577b8dbef8d542b3f00a064b97"
  },
  {
    "url": "/_nuxt/pages/backend/category/modify/_id.9d083c95e7fe6cb2e9f5.js",
    "revision": "6209e75748344e3c5636c05717624635"
  },
  {
    "url": "/_nuxt/pages/backend/index.607a73a8a0bbc224162d.js",
    "revision": "842ca5cce766d8d7a6441c6b21467061"
  },
  {
    "url": "/_nuxt/pages/backend/user/list.ea89cdbcf401c12c8401.js",
    "revision": "87afc9b767a38135b198d4a73d503c6c"
  },
  {
    "url": "/_nuxt/pages/backend/user/modify/_id.24231aeb5b0e4adecf74.js",
    "revision": "c0a0dab61dbbe6722bd46ff91d80c68b"
  },
  {
    "url": "/_nuxt/pages/index.0cacc3b0bc3b8fbac777.js",
    "revision": "d1d8b73d2d7f00b2be9c05c2ecea2db1"
  },
  {
    "url": "/_nuxt/pages/user/account.597245d4cbaf63b25c2e.js",
    "revision": "2e4f2d9cddc264a5b347ff7a9e90f566"
  },
  {
    "url": "/_nuxt/pages/user/password.06afcf536dd0a0e0aa60.js",
    "revision": "fd8842cd96953e1826fb005d5b733721"
  },
  {
    "url": "/_nuxt/vendor.b4ee8e0969b306710a70.js",
    "revision": "61bcc85ed296a563e63352bf57d8a3d5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

