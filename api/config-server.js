var lruCache = require('lru-cache')

let api
const cached = false

if (process.__API__) {
    api = process.__API__
} else {
    api = process.__API__ = {
        api: 'http://localhost:3000/api/',
        port: 3000,
        timeout: 30000,
        cached: cached && lruCache({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        cachedItem: {}
    }
}

module.exports = api
