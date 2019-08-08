import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
import config from './config-server'
import { objToStr } from '@/utils'

export const api = cookies => {
    return {
        cookies,
        api: axios.create({
            baseURL: config.api,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                cookie: objToStr(cookies)
            },
            timeout: config.timeout
        }),
        getCookes() {
            return this.cookies
        },
        async post(url, data) {
            const cookies = this.getCookes() || {}
            const username = cookies.username || ''
            const key = md5(url + JSON.stringify(data) + username)
            if (config.cached && data.cache && config.cached.has(key)) {
                return Promise.resolve(config.cached.get(key))
            }
            const res = await this.api({
                method: 'post',
                url,
                data: qs.stringify(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
            if (config.cached && data.cache) config.cached.set(key, res)
            return res && res.data
        },
        async get(url, params) {
            const cookies = this.getCookes() || {}
            const username = cookies.username || ''
            const key = md5(url + JSON.stringify(params) + username)
            if (config.cached && params.cache && config.cached.has(key)) {
                return Promise.resolve(config.cached.get(key))
            }
            const res = await this.api({
                method: 'get',
                url,
                params,
                headers: {
                    cookie: objToStr(cookies)
                }
            })
            if (config.cached && params.cache) config.cached.set(key, res)
            return res && res.data
        }
    }
}
