importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.31b23c2.css",
    "revision": "9582bf03b2051725839b8e469c388e57"
  },
  {
    "url": "/_nuxt/app.97c76a4.js",
    "revision": "bb7b7497f7fa0ff42a63bae146104be6"
  },
  {
    "url": "/_nuxt/commons.app.354a402.js",
    "revision": "c9f9e8d3f424346f592655152d6fd43f"
  },
  {
    "url": "/_nuxt/manifest.ce03b47.js",
    "revision": "afc58c94adbca828a4a74dcb578a5501"
  },
  {
    "url": "/_nuxt/pages/about.dafd363.js",
    "revision": "7bf43de16f4c2a2833546ba54be7600b"
  },
  {
    "url": "/_nuxt/pages/article/_id.5cc71a0.js",
    "revision": "188663dc50e07a095a9f518048e35d64"
  },
  {
    "url": "/_nuxt/pages/backend/admin/list.394d662.js",
    "revision": "d3b885ef02bf54d0f08fe3a6767a3cb4"
  },
  {
    "url": "/_nuxt/pages/backend/admin/modify/_id.51d5bfe.js",
    "revision": "8af42acca62aeec4166565241375db5e"
  },
  {
    "url": "/_nuxt/pages/backend/article/comment/_id.db209fa.js",
    "revision": "aa9f4f6d3afe1874c7085d4e2988f221"
  },
  {
    "url": "/_nuxt/pages/backend/article/insert.b7154ae.js",
    "revision": "39e535465d1028e0ef66ac8019c5bb99"
  },
  {
    "url": "/_nuxt/pages/backend/article/list.6a9d961.js",
    "revision": "1b0e4bb2e85f68fc5b5526d73a9d1b04"
  },
  {
    "url": "/_nuxt/pages/backend/article/modify/_id.3a44ead.js",
    "revision": "f9b545bf040f6c703ffece4028f20754"
  },
  {
    "url": "/_nuxt/pages/backend/category/insert.d4c96d9.js",
    "revision": "832b718348ae88c5c58e2b881058c0b8"
  },
  {
    "url": "/_nuxt/pages/backend/category/list.8702277.js",
    "revision": "3f8cb6672522e8757bc424b32076eebd"
  },
  {
    "url": "/_nuxt/pages/backend/category/modify/_id.ae07857.js",
    "revision": "84416a4c3a5ca1d9096c6ac2bcc086e7"
  },
  {
    "url": "/_nuxt/pages/backend/index.dde4d1f.js",
    "revision": "cf485a693ffa21c5141599d60aa553d0"
  },
  {
    "url": "/_nuxt/pages/backend/user/list.49ad2ed.js",
    "revision": "3301da08aaa0d3a6584511ad9b035690"
  },
  {
    "url": "/_nuxt/pages/backend/user/modify/_id.a902840.js",
    "revision": "53761cdc7aceb2a2a04339f2de3469c4"
  },
  {
    "url": "/_nuxt/pages/index.004b735.js",
    "revision": "1368c6b4648bcfad745336df746c5733"
  },
  {
    "url": "/_nuxt/pages/user/account.8423a5c.js",
    "revision": "dd925459f7eba7336f4677919dccf440"
  },
  {
    "url": "/_nuxt/pages/user/password.f33de67.js",
    "revision": "beb2b8fe808446aadbe22cb316f24eb9"
  },
  {
    "url": "/_nuxt/vendors.app.896b5d1.js",
    "revision": "a4839446339ed25ee3ee27dd68c1c636"
  },
  {
    "url": "/_nuxt/vendors.app.c31d386.css",
    "revision": "95e64af5f4da7164c3b5c72745af9e7a"
  }
], {
  "cacheId": "nuxt-mmf-blog",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





