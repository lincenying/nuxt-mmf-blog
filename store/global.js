export const state = () => ({
    loading: false,
    cookies: {},
    showLoginModal: false,
    showRegisterModal: false
})

export const actions = {}

export const mutations = {
    ['showLoginModal'](state, payload) {
        state.showLoginModal = payload
    },
    ['showRegisterModal'](state, payload) {
        state.showRegisterModal = payload
    },
    ['setCookies'](state, cookies) {
        state.cookies = cookies
    }
}

export const getters = {
    ['getGlobal'](state) {
        return state
    }
}
