export const actions = {
    // 在服务端渲染每一页之前，nuxtServerInit 都会被 Nuxt.js 调用
    nuxtServerInit(store, { req }) {
        store.commit('global/setCookies', req.cookies)
    }
}
