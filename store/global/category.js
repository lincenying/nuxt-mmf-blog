import api from '~api'

export const state = () => ({
    lists: [],
    item: {},
})

export const actions = {
    async ['getCategoryList']({ commit, state }, config) {
        if (state.lists.length) return
        const { data: { data, code } } = await api.get('backend/category/list', { ...config, cache: true })
        if (data && code === 200) {
            commit('receiveCategoryList', data.list)
        }
    },
    async ['getCategoryItem']({ commit }, config) {
        const { data: { data, code } } = await api.get('backend/category/item', config)
        if (data && code === 200) {
            commit('receiveCategoryItem', {
                data,
                ...config,
            })
        }
    },
}

export const mutations = {
    ['receiveCategoryList'](state, payload) {
        state.lists = payload
    },
    ['receiveCategoryItem'](state, payload) {
        state.item = payload
    },
    ['insertCategoryItem'](state, payload) {
        state.lists = [payload].concat(state.lists)
    },
    ['updateCategoryItem'](state, payload) {
        state.item = payload
        const index = state.lists.findIndex(ii => ii._id === payload._id)
        if (index > -1) {
            state.lists.splice(index, 1, payload)
        }
    },
}

export const getters = {
    ['getCategoryList'](state) {
        return state.lists
    },
    ['getCategoryItem'](state) {
        return state.item
    },
}
