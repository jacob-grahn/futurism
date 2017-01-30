/* global describe, expect, it */

import { createComponent } from '../../../test/unit/specs/setup'
import SplashPage from './SplashPage'

describe('SplashPage.vue', () => {
  it('should render a logo', () => {
    const vm = createComponent(SplashPage)
    expect(vm.textContent('.big-logo')).to.exist
    vm.$destroy()
  })
  it('should render some nav', () => {
    const vm = createComponent(SplashPage)
    expect(vm.textContent('.main-nav')).to.exist
    vm.$destroy()
  })
  it('should show the current user', () => {
    const vm = createComponent(SplashPage)
    expect(vm.textContent('.cur-user')).to.exist
    vm.$destroy()
  })
})
