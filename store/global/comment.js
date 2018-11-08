import { api } from '~api'

export const state = () => ({
    lists: {
        data: [],
        hasNext: 0,
        page: 1,
        path: ''
    }
})

export const actions = {
    async ['getCommentList']({ commit, state, rootState }, config) {
        if (config.path === state.lists.path && config.page === 1) return
        const { data, code } = await api(rootState.cookies).get('frontend/comment/list', { ...config, cache: true })
        if (data && code === 200) {
            commit('recevieCommentList', {
                ...config,
                ...data
            })
        }
    }
}

export const mutations = {
    ['recevieCommentList'](state, { list, hasNext, hasPrev, page, path }) {
        if (page === 1) {
            list = [].concat(list)
        } else {
            list = state.lists.data.concat(list)
        }
        state.lists = {
            data: list,
            hasNext,
            hasPrev,
            page,
            path
        }
    },
    ['insertCommentItem'](state, data) {
        state.lists.data = [data].concat(state.lists.data)
    },
    ['deleteComment'](state, id) {
        const obj = state.lists.data.find(ii => ii._id === id)
        obj.is_delete = 1
    },
    ['recoverComment'](state, id) {
        const obj = state.lists.data.find(ii => ii._id === id)
        obj.is_delete = 0
    }
}

export const getters = {
    ['getCommentList'](state) {
        return state.lists
    }
}
