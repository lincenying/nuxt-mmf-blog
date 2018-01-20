importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-demo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.13d06fe52aa3b6d65641.js",
    "revision": "c85536c6f81d21a5a349e65f801d59fd"
  },
  {
    "url": "/_nuxt/app.a1cb91da81c91906904392e33a7796c7.css",
    "revision": "a1cb91da81c91906904392e33a7796c7"
  },
  {
    "url": "/_nuxt/layouts/default.6ed7b3ea669568a6b473.js",
    "revision": "3a3c3018a6580fb28a005c9e2836a9a3"
  },
  {
    "url": "/_nuxt/manifest.e1f5be24139437ff55c8.js",
    "revision": "4dc6b687745f009f9612be0151b4b8d1"
  },
  {
    "url": "/_nuxt/pages/index.0dd0ce7ca90f1a3b97e1.js",
    "revision": "171d06e4217869f972a5bc82c44c7d23"
  },
  {
    "url": "/_nuxt/pages/item/_id.911b528b1ec804e5a5fe.js",
    "revision": "770438ddd52876de7a54707c62611441"
  },
  {
    "url": "/_nuxt/pages/post.3d25ccff2e9e48bed0bd.js",
    "revision": "ad12cc3474db6f8d1718bdbbd6579966"
  },
  {
    "url": "/_nuxt/vendor.4b51a3321761b92714a1.js",
    "revision": "1bfde2a82d9ba1034289f445e89de107"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

