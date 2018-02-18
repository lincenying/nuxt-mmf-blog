import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3d159f08 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _5c7fb85a = () => import('..\\pages\\backend\\index.vue' /* webpackChunkName: "pages_backend_index" */).then(m => m.default || m)
const _cac8b08a = () => import('..\\pages\\user\\password.vue' /* webpackChunkName: "pages_user_password" */).then(m => m.default || m)
const _0e2b3d3d = () => import('..\\pages\\user\\account.vue' /* webpackChunkName: "pages_user_account" */).then(m => m.default || m)
const _9661e82a = () => import('..\\pages\\backend\\category\\list.vue' /* webpackChunkName: "pages_backend_category_list" */).then(m => m.default || m)
const _e0a18b20 = () => import('..\\pages\\backend\\article\\insert.vue' /* webpackChunkName: "pages_backend_article_insert" */).then(m => m.default || m)
const _818c5c10 = () => import('..\\pages\\backend\\user\\list.vue' /* webpackChunkName: "pages_backend_user_list" */).then(m => m.default || m)
const _6f218995 = () => import('..\\pages\\backend\\article\\list.vue' /* webpackChunkName: "pages_backend_article_list" */).then(m => m.default || m)
const _20057f46 = () => import('..\\pages\\backend\\category\\insert.vue' /* webpackChunkName: "pages_backend_category_insert" */).then(m => m.default || m)
const _722e6aee = () => import('..\\pages\\backend\\admin\\list.vue' /* webpackChunkName: "pages_backend_admin_list" */).then(m => m.default || m)
const _ebe5429c = () => import('..\\pages\\backend\\article\\comment\\_id.vue' /* webpackChunkName: "pages_backend_article_comment__id" */).then(m => m.default || m)
const _56ac2f54 = () => import('..\\pages\\backend\\user\\modify\\_id.vue' /* webpackChunkName: "pages_backend_user_modify__id" */).then(m => m.default || m)
const _6f0ed619 = () => import('..\\pages\\backend\\article\\modify\\_id.vue' /* webpackChunkName: "pages_backend_article_modify__id" */).then(m => m.default || m)
const _1b302703 = () => import('..\\pages\\backend\\category\\modify\\_id.vue' /* webpackChunkName: "pages_backend_category_modify__id" */).then(m => m.default || m)
const _2c3b6ea0 = () => import('..\\pages\\backend\\admin\\modify\\_id.vue' /* webpackChunkName: "pages_backend_admin_modify__id" */).then(m => m.default || m)
const _506c46d9 = () => import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */).then(m => m.default || m)
const _5ccd79cd = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
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
			path: "/about",
			component: _3d159f08,
			name: "about"
		},
		{
			path: "/backend",
			component: _5c7fb85a,
			name: "backend"
		},
		{
			path: "/user/password",
			component: _cac8b08a,
			name: "user-password"
		},
		{
			path: "/user/account",
			component: _0e2b3d3d,
			name: "user-account"
		},
		{
			path: "/backend/category/list",
			component: _9661e82a,
			name: "backend-category-list"
		},
		{
			path: "/backend/article/insert",
			component: _e0a18b20,
			name: "backend-article-insert"
		},
		{
			path: "/backend/user/list",
			component: _818c5c10,
			name: "backend-user-list"
		},
		{
			path: "/backend/article/list",
			component: _6f218995,
			name: "backend-article-list"
		},
		{
			path: "/backend/category/insert",
			component: _20057f46,
			name: "backend-category-insert"
		},
		{
			path: "/backend/admin/list",
			component: _722e6aee,
			name: "backend-admin-list"
		},
		{
			path: "/backend/article/comment/:id?",
			component: _ebe5429c,
			name: "backend-article-comment-id"
		},
		{
			path: "/backend/user/modify/:id?",
			component: _56ac2f54,
			name: "backend-user-modify-id"
		},
		{
			path: "/backend/article/modify/:id?",
			component: _6f0ed619,
			name: "backend-article-modify-id"
		},
		{
			path: "/backend/category/modify/:id?",
			component: _1b302703,
			name: "backend-category-modify-id"
		},
		{
			path: "/backend/admin/modify/:id?",
			component: _2c3b6ea0,
			name: "backend-admin-modify-id"
		},
		{
			path: "/article/:id?",
			component: _506c46d9,
			name: "article-id"
		},
		{
			path: "/",
			component: _5ccd79cd,
			name: "index"
		},
		{
			path: "/trending/:by",
			component: _5ccd79cd,
			name: "trending"
		},
		{
			path: "/category/:id",
			component: _5ccd79cd,
			name: "category"
		},
		{
			path: "/search/:key",
			component: _5ccd79cd,
			name: "search"
		}
    ],
    
    
    fallback: false
  })
}
