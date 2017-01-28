import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

export function createComponent (Component, state = {}) {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(Component),
    store: new Vuex.Store(state),
    router: new VueRouter()
  })
  vm.textContent = function (selector) {
    return vm.$el.querySelector(selector).textContent
  }
  return vm
}
