/* eslint-disable no-confusing-arrow */
const lruCache = require('lru-cache')
const join = require('path').join
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/editor.md@1.5.0/css/editormd.css' },
            { rel: 'manifest', href: '/manifest.json' },
            { rel: 'apple-touch-icon', href: '/static/img/icons/apple-touch-icon-152x152.png' }
        ],
        meta: [
            { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'theme-color', name: 'theme-color', content: '#2874f0' },
            { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
            {
                hid: 'apple-mobile-web-app-status-bar-style',
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black'
            },
            { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'M.M.F 小屋' },
            {
                hid: 'msapplication-TileImage',
                name: 'msapplication-TileImage',
                content: '/static/img/icons/msapplication-icon-144x144.png'
            },
            { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#000000' }
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js' },
            { src: 'https://cdn.jsdelivr.net/npm/editor.md@1.5.0/editormd.min.js' }
        ]
    },
    render: {
        bundleRenderer: {
            cache: new lruCache({
                max: 1000,
                maxAge: 1000 * 60 * 15
            })
        }
    },
    build: {
        optimization: {
            runtimeChunk: {
                name: 'manifest'
            },
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: -20,
                        chunks: 'all'
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            // warnings: false
                        }
                    },
                    cache: true,
                    sourceMap: true,
                    parallel: true
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        discardComments: { removeAll: true }
                        // 避免 cssnano 重新计算 z-index
                        // safe: true
                    }
                })
            ]
        },
        extend(config, { isClient }) {
            if (isClient) {
                config.resolve.alias['~api'] = join(__dirname, 'api/index-client.js')
            } else {
                config.resolve.alias['~api'] = join(__dirname, 'api/index-server.js')
            }
        },
        extractCSS: true,
        babel: {},
        filenames: {
            app: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash:7].js'),
            chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash:7].js'),
            css: ({ isDev }) => (isDev ? '[name].css' : '[name].[contenthash:7].css'),
            img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
            font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]'),
            video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]')
        },
        postcss: {
            plugins: {
                autoprefixer: {}
            }
        }
    },
    cache: {
        max: 1000,
        maxAge: 900000
    },
    css: ['~/assets/css/hljs/googlecode.css', '~/assets/scss/style.scss', 'toastr/build/toastr.css'],
    loading: {
        color: '#4FC08D',
        failedColor: '#bf5050',
        duration: 1500
    },
    modules: ['@nuxtjs/pwa'],
    manifest: {
        name: 'MMF-Blog',
        short_name: 'MMF-Blog',
        display: 'standalone',
        start_url: 'https://www.mmxiaowu.com/',
        theme_color: '#da552f',
        background_color: '#FFF',
        lang: 'zh-CN'
    },
    plugins: [
        {
            src: '~/plugins/filter'
        },
        {
            src: '~/plugins/router',
            ssr: false
        }
    ],
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'trending',
                path: '/trending/:by',
                component: resolve(__dirname, 'pages/index.vue')
            })
            routes.push({
                name: 'category',
                path: '/category/:id',
                component: resolve(__dirname, 'pages/index.vue')
            })
            routes.push({
                name: 'search',
                path: '/search/:key',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    },
    pwa: {
        workbox: {
            dev: isDev,
            runtimeCaching: [
                {
                    urlPattern: /api/,
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 1,
                        cacheName: 'api-cache',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                },
                {
                    urlPattern: /^https:\/\/cdn\.jsdelivr\.net/,
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 1,
                        cacheName: 'cdn-cache',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
}
