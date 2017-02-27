/* global expect, it, describe, beforeEach, afterEach */

import Vue from 'vue'
// import * as compiler from 'vue-template-compiler'
import mdl from './mdl'
// import { createComponent } from '../../test/unit/specs/setup'

describe('mdl.js', () => {
  beforeEach(() => {
    window.componentHandler = {
      upgradeElement: (el) => {
        el.innerHTML = 'Upgraded'
      }
    }
  })

  afterEach(() => {
    delete window.componentHandler
  })

  it('upgrade mdl elements after they have been added to the dom', () => {
    const vm = new Vue({
      render: (h) => h('button', {directives: [{name: 'mdl'}]}),
      directives: {mdl}
    }).$mount()
    expect(vm.$el.textContent).to.equal('Upgraded')
    vm.$destroy()
  })
})
