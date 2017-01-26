import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebaseInit from './firebase-init'

const firebase = firebaseInit()
store.dispatch('INIT_FIREBASE', {firebase})

export const app = new Vue({
  ...App,
  router,
  store
}).$mount('#futurism')
