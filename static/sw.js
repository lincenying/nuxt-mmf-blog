importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-demo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.7532109f87df62815d14.js",
    "revision": "81f329f334a822e2d05c2bbf19ecb805"
  },
  {
    "url": "/_nuxt/app.80f199edb985bad79b4d8a3045a56655.css",
    "revision": "80f199edb985bad79b4d8a3045a56655"
  },
  {
    "url": "/_nuxt/layouts/default.6774a05958360881774e.js",
    "revision": "d896157200d8cf4236ca9fb09312e2fd"
  },
  {
    "url": "/_nuxt/manifest.501452ae42ac18b2292b.js",
    "revision": "99851a12e9b2ac07cbdad09284eada1a"
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
    "url": "/_nuxt/pages/backend/admin/list.5b2d80891acf834c5308.js",
    "revision": "b70210d1c4b11fda538135c67cee2646"
  },
  {
    "url": "/_nuxt/pages/backend/admin/modify/_id.9e5a192f914cb6286f5f.js",
    "revision": "c5d91a1199fdc70e582e7bb5f794f145"
  },
  {
    "url": "/_nuxt/pages/backend/article/comment/_id.47cd7f8bd833fe0d9c94.js",
    "revision": "baebe4edcc3961a05b1c3e9ef1fded44"
  },
  {
    "url": "/_nuxt/pages/backend/article/insert.e6013bbf19a7c95bb329.js",
    "revision": "b3889aa9bd4c30a5f3e5c4b015361b75"
  },
  {
    "url": "/_nuxt/pages/backend/article/list.90abbc05cee0f9a927ba.js",
    "revision": "c045857d70f292c188af3d82c98c2216"
  },
  {
    "url": "/_nuxt/pages/backend/article/modify/_id.09571c3f0bcf8cee6115.js",
    "revision": "c769ab6f5b314b2b7e163086c3bebb5e"
  },
  {
    "url": "/_nuxt/pages/backend/category/insert.2efec4da0ca179194a76.js",
    "revision": "4b9920dab958e05f6068098a105edc0c"
  },
  {
    "url": "/_nuxt/pages/backend/category/list.00c531a8b184f4c5d9a3.js",
    "revision": "035113e935f758ac3587583e627096ff"
  },
  {
    "url": "/_nuxt/pages/backend/category/modify/_id.11a0906bf7a648b83ca9.js",
    "revision": "2d73dad0043a6ebe43658b71af31011b"
  },
  {
    "url": "/_nuxt/pages/backend/index.607a73a8a0bbc224162d.js",
    "revision": "842ca5cce766d8d7a6441c6b21467061"
  },
  {
    "url": "/_nuxt/pages/backend/user/list.c519038b64fadb793695.js",
    "revision": "f34bdf8fb50ca88aec1fd84bc5a02a0e"
  },
  {
    "url": "/_nuxt/pages/backend/user/modify/_id.2407f31f763ce94345f2.js",
    "revision": "c44c05a4e5129b54874b4b6ca5aaba9f"
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

