/* global describe, expect, it */

import { createComponent } from '../../../test/unit/specs/setup'
import SplashPage from './SplashPage'

describe('SplashPage.vue', () => {
  const vm = createComponent(SplashPage)
  it('should render a logo', () => {
    expect(vm.textContent('.big-logo')).to.exist
  })
  it('should render some nav', () => {
    expect(vm.textContent('.main-nav')).to.exist
  })
  it('should show the current user', () => {
    expect(vm.textContent('.cur-user')).to.exist
  })
})
