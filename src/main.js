import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebaseInit from './firebase-init'
import mdl from './directives/mdl'

const firebase = firebaseInit()
store.dispatch('INIT_FIREBASE', {api: firebase})

Vue.directive('mdl', mdl)

export const app = new Vue({
  ...App,
  router,
  store
}).$mount('#futurism')
