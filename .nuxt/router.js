import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _391b10fd = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _4a4a7042 = () => import('../pages/backend/index.vue' /* webpackChunkName: "pages/backend/index" */).then(m => m.default || m)
const _19633638 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _95d949ec = () => import('../pages/user/password.vue' /* webpackChunkName: "pages/user/password" */).then(m => m.default || m)
const _5958640e = () => import('../pages/user/account.vue' /* webpackChunkName: "pages/user/account" */).then(m => m.default || m)
const _2918c752 = () => import('../pages/backend/article/list.vue' /* webpackChunkName: "pages/backend/article/list" */).then(m => m.default || m)
const _0b65b7c4 = () => import('../pages/backend/admin/list.vue' /* webpackChunkName: "pages/backend/admin/list" */).then(m => m.default || m)
const _3fc7a4b2 = () => import('../pages/backend/article/insert.vue' /* webpackChunkName: "pages/backend/article/insert" */).then(m => m.default || m)
const _74813bff = () => import('../pages/backend/category/list.vue' /* webpackChunkName: "pages/backend/category/list" */).then(m => m.default || m)
const _88280b4c = () => import('../pages/backend/category/insert.vue' /* webpackChunkName: "pages/backend/category/insert" */).then(m => m.default || m)
const _7975e05c = () => import('../pages/backend/user/list.vue' /* webpackChunkName: "pages/backend/user/list" */).then(m => m.default || m)
const _7f887636 = () => import('../pages/backend/admin/modify/_id.vue' /* webpackChunkName: "pages/backend/admin/modify/_id" */).then(m => m.default || m)
const _223db73e = () => import('../pages/backend/article/comment/_id.vue' /* webpackChunkName: "pages/backend/article/comment/_id" */).then(m => m.default || m)
const _6feb6e5e = () => import('../pages/backend/article/modify/_id.vue' /* webpackChunkName: "pages/backend/article/modify/_id" */).then(m => m.default || m)
const _1dc69ff4 = () => import('../pages/backend/category/modify/_id.vue' /* webpackChunkName: "pages/backend/category/modify/_id" */).then(m => m.default || m)
const _3e391999 = () => import('../pages/backend/user/modify/_id.vue' /* webpackChunkName: "pages/backend/user/modify/_id" */).then(m => m.default || m)
const _51f2df8c = () => import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _391b10fd,
			name: "index"
		},
		{
			path: "/backend",
			component: _4a4a7042,
			name: "backend"
		},
		{
			path: "/about",
			component: _19633638,
			name: "about"
		},
		{
			path: "/user/password",
			component: _95d949ec,
			name: "user-password"
		},
		{
			path: "/user/account",
			component: _5958640e,
			name: "user-account"
		},
		{
			path: "/backend/article/list",
			component: _2918c752,
			name: "backend-article-list"
		},
		{
			path: "/backend/admin/list",
			component: _0b65b7c4,
			name: "backend-admin-list"
		},
		{
			path: "/backend/article/insert",
			component: _3fc7a4b2,
			name: "backend-article-insert"
		},
		{
			path: "/backend/category/list",
			component: _74813bff,
			name: "backend-category-list"
		},
		{
			path: "/backend/category/insert",
			component: _88280b4c,
			name: "backend-category-insert"
		},
		{
			path: "/backend/user/list",
			component: _7975e05c,
			name: "backend-user-list"
		},
		{
			path: "/backend/admin/modify/:id?",
			component: _7f887636,
			name: "backend-admin-modify-id"
		},
		{
			path: "/backend/article/comment/:id?",
			component: _223db73e,
			name: "backend-article-comment-id"
		},
		{
			path: "/backend/article/modify/:id?",
			component: _6feb6e5e,
			name: "backend-article-modify-id"
		},
		{
			path: "/backend/category/modify/:id?",
			component: _1dc69ff4,
			name: "backend-category-modify-id"
		},
		{
			path: "/backend/user/modify/:id?",
			component: _3e391999,
			name: "backend-user-modify-id"
		},
		{
			path: "/article/:id?",
			component: _51f2df8c,
			name: "article-id"
		},
		{
			path: "/trending/:by",
			component: _391b10fd,
			name: "trending"
		},
		{
			path: "/category/:id",
			component: _391b10fd,
			name: "category"
		},
		{
			path: "/search/:key",
			component: _391b10fd,
			name: "search"
		}
    ],
    
    
    fallback: false
  })
}
