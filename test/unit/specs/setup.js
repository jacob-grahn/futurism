import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

export function createComponent (Component, initOptions = {}) {
  const propsData = initOptions.propsData || {}
  const storeData = initOptions.storeData || {}

  const Ctor = Vue.extend(Component)
  const vm = new Ctor({
    store: new Vuex.Store(storeData),
    router: new VueRouter(),
    propsData
  }).$mount()

  vm.textContent = function (selector = false) {
    if (!selector) {
      return vm.$el.textContent
    }
    const tag = vm.$el.querySelector(selector)
    return tag ? tag.textContent : null
  }

  return vm
}
