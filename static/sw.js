importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2b94aeafbe4c8d4c50ee8ce97465bb3e.css",
    "revision": "2b94aeafbe4c8d4c50ee8ce97465bb3e"
  },
  {
    "url": "/_nuxt/app.63987c5655ff1684ff60.js",
    "revision": "a5e001dd43fa490c8442f1ec29643707"
  },
  {
    "url": "/_nuxt/layouts/blog.e1ab334251603190b1df.js",
    "revision": "9eda21ad1b7f9700aab69c7398090bee"
  },
  {
    "url": "/_nuxt/layouts/default.ca3f2e9a8c65f513b94c.js",
    "revision": "b38d5bd3b7acca4fbdf2f91583cd3b0d"
  },
  {
    "url": "/_nuxt/manifest.cf1a8d0f85e00020ee71.js",
    "revision": "923bebbbb3eee4d394500572655b422c"
  },
  {
    "url": "/_nuxt/pages/about.8dfe858389607d0a017c.js",
    "revision": "aebe4390a84d6934b6b8f7386734b7d4"
  },
  {
    "url": "/_nuxt/pages/article/_id.82f559cc5ec97334a5a2.js",
    "revision": "e9ff0049ba6fe6b7e141d353953ba56b"
  },
  {
    "url": "/_nuxt/pages/backend/admin/list.3b9485a0846661e64a7f.js",
    "revision": "6cc0edd0e5e928bdebab2e77d9ed817f"
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
    "url": "/_nuxt/pages/backend/article/insert.ba51df94e9ddc999b31f.js",
    "revision": "33cc5b9c8f3abb4164060e3c79b47c01"
  },
  {
    "url": "/_nuxt/pages/backend/article/list.886486c782e853578583.js",
    "revision": "8e95622eb4d965f5a2b4dffb4150820a"
  },
  {
    "url": "/_nuxt/pages/backend/article/modify/_id.724eeaeb068dfbc2c626.js",
    "revision": "43c9df0e0a7373b2d3304aacdfaf177f"
  },
  {
    "url": "/_nuxt/pages/backend/category/insert.65a1f42903242e32597e.js",
    "revision": "afd00e2c9f21c42dd2afd247bf52ea31"
  },
  {
    "url": "/_nuxt/pages/backend/category/list.9e0c7970137717dd6185.js",
    "revision": "03de8d066a7f82bb41cec36cfd5b4acd"
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
    "url": "/_nuxt/pages/backend/user/list.79ada865ab3c2a2b7bd2.js",
    "revision": "79f8124b4dcfeebcd826fe77c8c92b0c"
  },
  {
    "url": "/_nuxt/pages/backend/user/modify/_id.beb814ad1eb28701c5db.js",
    "revision": "ce1534f2c0bcd9e7e077c42aad7b8f99"
  },
  {
    "url": "/_nuxt/pages/index.ac2dd9dd79a5b1e2b8ad.js",
    "revision": "30cb9b6a41fc91c07f2f25c4faf00b86"
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
    "url": "/_nuxt/vendor.da2a31f3628110fb7b35.js",
    "revision": "a059c98e1c8eb788da327f770d984865"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

