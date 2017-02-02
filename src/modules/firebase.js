export default {
  state: {
    api: null
  },
  mutations: {
    SET_FIREBASE (state, { api }) {
      state.api = api
    }
  },
  actions: {
    SIGN_OUT ({ state }) {
      state.api.auth().signOut()
    },
    INIT_FIREBASE ({ state, commit }, { api }) {
      commit('SET_FIREBASE', {api})
      api.auth().onAuthStateChanged(user => {
        commit('SET_CURRENT_USER', user || {})
      })
    }
  }
}
