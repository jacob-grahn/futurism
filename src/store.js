import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from './modules/current-user'
import firebase from './modules/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sue: 1
  },
  modules: {
    currentUser,
    firebase
  }
})
