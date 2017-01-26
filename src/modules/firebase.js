export default {
  state: {
    firebase: null
  },
  mutations: {
    SET_FIREBASE (state, { firebase }) {
      state.firebase = firebase
    }
  },
  actions: {
    SIGN_OUT ({ state }) {
      state.firebase.auth().signOut()
    },
    INIT_FIREBASE ({ state, commit }, { firebase }) {
      commit('SET_FIREBASE', {firebase})
      state.firebase.auth().onAuthStateChanged(newUser => {
        commit('SET_CURRENT_USER', newUser || {})
      })
    }
  }
}
