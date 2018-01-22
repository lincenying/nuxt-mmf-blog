const join = require('path').join

module.exports = {
    head: {
        link: [
            { rel: 'stylesheet', href: '/editor.md/css/editormd.css' },
            { rel: 'manifest', href: '/manifest.json' },
            { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon-152x152.png' },
        ],
        meta: [
            { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'theme-color', name: 'theme-color', content: '#2874f0' },
            { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
            { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'M.M.F 小屋' },
            { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/img/icons/msapplication-icon-144x144.png' },
            { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#000000' },
        ],
        script: [
            { src: '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js' },
            { src: '/editor.md/editormd.min.js' },
        ]
    },
    render: {
        bundleRenderer: {
            cache: require('lru-cache')({
                max: 1000,
                maxAge: 1000 * 60 * 15
            })
        }
    },
    build: {
        vendor: ['axios'],
        extend(config, { isClient }) {
            if (isClient) {
                config.resolve.alias['~api'] = join(__dirname, 'api/index-client.js')
            } else {
                config.resolve.alias['~api'] = join(__dirname, 'api/index-server.js')
            }
        },
        extractCSS: true,
        babel: {}
    },
    cache: {
        max: 1000,
        maxAge: 900000
    },
    css: [
        "~/assets/css/hljs/googlecode.css",
        "~/assets/css/reset.css",
        "~/assets/css/style.css",
        "~/assets/less/frontend.less",
        "~/assets/less/backend.less",
        "toastr/build/toastr.css"
    ],
    loading: {
        color: '#4FC08D',
        failedColor: '#bf5050',
        duration: 1500
    },
    modules: [
        '@nuxtjs/workbox',
        '@nuxtjs/manifest'
    ],
    manifest: {
        name: 'MMF-Blog',
        short_name: 'MMF-Blog',
        display: 'standalone',
        start_url: 'https://www.mmxiaowu.com/',
        theme_color: '#da552f',
        background_color: '#FFF',
        lang: 'zh-CN'
    },
    plugins: [{
        src: '~/plugins/filter'
    }, {
        src: '~/plugins/router',
        ssr: false
    }]
}
