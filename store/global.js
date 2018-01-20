import toastr from 'toastr'
import {inBrowser} from '@/utils'

toastr.options.positionClass = 'toast-top-center'

export const state = () => ({
    loading: false,
    cookies: {},
    showLoginModal: false,
    showRegisterModal: false
})

export const actions = {
    ['showMsg'](store, config) {
        let content, type
        if (typeof config === 'string') {
            content = config
            type = 'error'
        } else {
            content = config.content
            type = config.type
        }
        if (inBrowser) toastr[type](content)
    },
    ['hideMsg']() {
        toastr.clear()
    }
}

export const mutations = {
    ['showLoginModal'](state, payload) {
        state.showLoginModal = payload
    },
    ['showRegisterModal'](state, payload) {
        state.showRegisterModal = payload
    }
}

export const getters = {
    ['getGlobal'](state) {
        return state
    }
}
