/* global describe, expect, it */

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import SplashPage from './SplashPage'

Vue.use(Vuex)
Vue.use(VueRouter)

describe('SplashPage.vue', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(SplashPage),
    store: new Vuex.Store({})
  })
  function textContent (selector) {
    return vm.$el.querySelector(selector).textContent
  }
  it('should render a logo', () => {
    expect(textContent('.big-logo')).toBeTruthy()
  })
  it('should render some nav', () => {
    expect(textContent('.main-nav')).toBeTruthy()
  })
  it('should show the current user', () => {
    expect(textContent('.cur-user')).toBeTruthy()
  })
})
