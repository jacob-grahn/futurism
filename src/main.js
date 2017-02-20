/* global firebase */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebaseConfig from './firebase-config'

firebase.initializeApp(firebaseConfig)
store.dispatch('INIT_FIREBASE', {api: firebase})

export const app = new Vue({
  ...App,
  router,
  store
}).$mount('#futurism')
