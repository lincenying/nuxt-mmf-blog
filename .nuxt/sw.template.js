importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-mmf-blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

