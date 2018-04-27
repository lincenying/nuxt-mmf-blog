import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
import config from './config-server'

const trimStr = str => {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

const parseCookie = cookies => {
    let $return
    if (typeof cookies === 'string') {
        const arr = cookies.split(';')
        const cookie = {}
        arr.forEach(item => {
            const tmp = item.split('=')
            cookie[trimStr(tmp[0])] = trimStr(tmp[1])
        })
        $return = cookie
    } else if (typeof cookies === 'object') {
        $return = (cookies && { ...cookies }) || {}
    }
    return $return
}

const objToStr = cookies => {
    let cookie = ''
    Object.keys(cookies).forEach(item => {
        cookie += item + '=' + cookies[item] + '; '
    })
    return cookie
}

export default {
    api: axios.create({
        baseURL: config.api,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: config.timeout
    }),
    post(url, data) {
        let cookies = {}
        if (data.cookies) {
            cookies = parseCookie(data.cookies)
            delete data.cookies
        }
        const username = cookies.username || ''
        const key = md5(url + JSON.stringify(data) + username)
        if (config.cached && data.cache && config.cached.has(key)) {
            return Promise.resolve(config.cached.get(key))
        }
        return this.api({
            method: 'post',
            url,
            data: qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                cookie: objToStr(cookies)
            }
        }).then(res => {
            if (config.cached && data.cache) config.cached.set(key, res)
            return res
        })
    },
    get(url, params) {
        let cookies = {}
        if (params.cookies) {
            cookies = parseCookie(params.cookies)
            delete params.cookies
        }
        const username = cookies.username || ''
        const key = md5(url + JSON.stringify(params) + username)
        if (config.cached && params.cache && config.cached.has(key)) {
            return Promise.resolve(config.cached.get(key))
        }
        return this.api({
            method: 'get',
            url,
            params,
            headers: {
                cookie: objToStr(cookies)
            }
        }).then(res => {
            if (config.cached && params.cache) config.cached.set(key, res)
            return res
        })
    }
}
