const join = require('path').join

module.exports = {
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
        src: '~/plugins/router',
        ssr: false
    }]
}
