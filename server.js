// const jwt = require('jsonwebtoken')
// const config = require('./server/config')

const logger = require('morgan')
const cookieParser = require('cookie-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')
const favicon = require('serve-favicon')
const path = require('path')
const express = require('express')
const compression = require('compression')
const { Nuxt, Builder } = require('nuxt')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8084

// Import and set Nuxt.js options
const config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const resolve = file => path.resolve(__dirname, file)
const serve = (path, cache) =>
    express.static(resolve(path), {
        maxAge: cache && !config.dev ? 1000 * 60 * 60 * 24 * 30 : 0
    })

const app = express()

// 引用 esj 模板引擎
app.set('views', path.join(__dirname, 'tpl'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'ejs')

app.use('/static', serve('./static', true))
app.use(favicon('./static/img/icons/favicon-32x32.png'))

app.use(compression({ threshold: 0 }))

// 日志
app.use(
    logger('":method :url" :status :res[content-length] ":referrer" ":user-agent"', {
        skip(req, res) {
            return res.statusCode < 400
        }
    })
)
// body 解析中间件
// parse application/json
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// cookie 解析中间件
app.use(cookieParser())
// 设置 express 根目录
// api 路由
app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    })
)

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Start express server
app.listen(port, host)
