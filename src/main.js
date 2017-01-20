import Vue from 'vue'
import App from './App'
import router from './services/router'
import firebaseInit from './firebase-init'

firebaseInit()

export const app = new Vue({
  router,
  ...App
}).$mount('#futurism')
