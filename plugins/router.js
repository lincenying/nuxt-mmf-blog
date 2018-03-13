import Vue from 'vue'

Vue.mixin({
    // 当复用的路由组件参数发生变化时，例如/detail/1 => /detail/2
    // beforeRouteUpdate(to, from, next) {
    //     // asyncData方法中包含异步数据请求
    //     const asyncData = this.$options.asyncData
    //     if (asyncData) {
    //         loading.start()
    //         asyncData.call(this, {
    //             store: this.$store,
    //             route: to,
    //             isServer: false,
    //             isClient: true
    //         }).then(() => {
    //             loading.finish()
    //             next()
    //         }).catch(next)
    //     } else {
    //         next()
    //     }
    // },

    // 路由切换时，保存页面滚动位置
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            vm.$nextTick().then(() => {
                const scrollTop = vm.$store.state.appShell.historyPageScrollTop[to.fullPath] || 0
                window.scrollTo(0, scrollTop)
                // document.body.scrollTop = vm.$store.state.appShell.historyPageScrollTop[to.fullPath] || 0
            })
        })
    },
    beforeRouteLeave(to, from, next) {
        this.$store.dispatch('appShell/saveScrollTop', {
            path: from.fullPath,
            scrollTop: Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
        })
        next()
    },
})
