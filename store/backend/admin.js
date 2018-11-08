import { api } from '~api'

export const state = () => ({
    lists: {
        hasNext: false,
        hasPrev: false,
        path: '',
        page: 1,
        data: []
    },
    item: {
        data: {},
        path: ''
    }
})

export const actions = {
    async ['getAdminList']({ commit, state, rootState }, config) {
        if (state.lists.data.length > 0 && config.path === state.lists.path && config.page === 1) return
        const { data, code } = await api(rootState.cookies).get('backend/admin/list', { ...config, cache: true })
        if (data && code === 200) {
            commit('receiveAdminList', {
                ...data,
                path: config.path,
                page: config.page
            })
        }
    },
    async ['getAdminItem']({ commit, rootState }, config) {
        const { data, code } = await api(rootState.cookies).get('backend/admin/item', config)
        if (data && code === 200) {
            commit('receiveAdminItem', {
                data,
                ...config
            })
        }
    }
}

export const mutations = {
    ['receiveAdminList'](state, { list, path, hasNext, hasPrev, page }) {
        if (page === 1) {
            list = [].concat(list)
        } else {
            list = state.lists.data.concat(list)
        }
        page++
        state.lists = {
            data: list,
            hasNext,
            hasPrev,
            page,
            path
        }
    },
    ['receiveAdminItem'](state, payload) {
        state.item = payload
    },
    ['updateAdminItem'](state, payload) {
        state.item.data = payload
        const index = state.lists.data.findIndex(ii => ii._id === payload._id)
        if (index > -1) {
            state.lists.data.splice(index, 1, payload)
        }
    },
    ['deleteAdmin'](state, id) {
        const obj = state.lists.data.find(ii => ii._id === id)
        if (obj) obj.is_delete = 1
    },
    ['recoverAdmin'](state, id) {
        const obj = state.lists.data.find(ii => ii._id === id)
        if (obj) obj.is_delete = 0
    }
}

export const getters = {
    ['getAdminList'](state) {
        return state.lists
    },
    ['getAdminItem'](state) {
        return state.item
    }
}
