import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/hljs/googlecode.css'

import '../assets/css/reset.css'

import '../assets/css/style.css'

import '../assets/less/frontend.less'

import '../assets/less/backend.less'

import '../node_modules/toastr/build/toastr.css'


let layouts = {

  "_blog": () => import('../layouts/blog.vue'  /* webpackChunkName: "layouts/blog" */).then(m => m.default || m),

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"link":[{"rel":"stylesheet","href":"\u002Fstatic\u002Feditor.md\u002Fcss\u002Feditormd.css"},{"rel":"manifest","href":"\u002Fmanifest.json"},{"rel":"apple-touch-icon","href":"\u002Fstatic\u002Fimg\u002Ficons\u002Fapple-touch-icon-152x152.png"}],"meta":[{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"theme-color","name":"theme-color","content":"#2874f0"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"black"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"M.M.F 小屋"},{"hid":"msapplication-TileImage","name":"msapplication-TileImage","content":"\u002Fstatic\u002Fimg\u002Ficons\u002Fmsapplication-icon-144x144.png"},{"hid":"msapplication-TileColor","name":"msapplication-TileColor","content":"#000000"}],"script":[{"src":"\u002F\u002Fapps.bdimg.com\u002Flibs\u002Fjquery\u002F2.1.4\u002Fjquery.min.js"},{"src":"\u002Fstatic\u002Feditor.md\u002Feditormd.min.js"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

