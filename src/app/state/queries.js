import Api from '../services/Api'

export default {
  namespaced: true,

  state: {
    items: []
  },

  actions: {
    addQuery ({ commit }, data) {
      return Api
        .post('customer/queries', data)
        .then(res => {
          commit('query', data)
        })
    }
  },

  mutations: {
    query (state, data) {
      state.items.push(data)
    }
  }

}
