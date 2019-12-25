import axios from 'axios'
import qs from 'qs'
import config from './config-client'
import { showMsg } from '@/utils'

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => response,
    error => Promise.resolve(error.response)
)

function checkStatus(response) {
    if (response && (response.status === 200 || response.status === 304)) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: ''
        }
    }
}

function checkCode(res) {
    if (res.data.code === -500) {
        window.location.href = '/backend'
    } else if (res.data.code === -400) {
        window.location.href = '/'
    } else if (res.data.code !== 200) {
        showMsg(res.data.message)
    }
    return res && res.data
}

export const api = () => ({
    async post(url, data) {
        const response = await axios({
            method: 'post',
            url: config.api + url,
            data: qs.stringify(data),
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        const res = await checkStatus(response)
        return checkCode(res)
    },
    async get(url, params) {
        const response = await axios({
            method: 'get',
            url: config.api + url,
            params,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        const res = await checkStatus(response)
        return checkCode(res)
    }
})
