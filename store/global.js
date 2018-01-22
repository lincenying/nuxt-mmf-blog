import { showMsg, hideMsg } from '@/utils'

export const state = () => ({
    loading: false,
    cookies: {},
    showLoginModal: false,
    showRegisterModal: false,
    showBackendNav: false
})

export const actions = {
    ['showMsg'](store, config) {
        showMsg(config)
    },
    ['hideMsg']() {
        hideMsg()
    }
}

export const mutations = {
    ['showLoginModal'](state, payload) {
        state.showLoginModal = payload
    },
    ['showRegisterModal'](state, payload) {
        state.showRegisterModal = payload
    },
    ['showBackendNav'](state, payload) {
        state.showBackendNav = payload
    }
}

export const getters = {
    ['getGlobal'](state) {
        return state
    }
}
