/* global describe, expect, it */

import { createComponent } from '../../../../test/unit/specs/setup'
import MainNav from './MainNav'

describe('SplashPage.vue', () => {
  it('should show login buttons if the user is not logged in', () => {
    const vm = createComponent(MainNav)
    expect(vm.textContent('.login-buttons')).to.exist
  })
  it('should show game buttons if the user is logged in', () => {
    const vm = createComponent(MainNav)
    expect(vm.textContent('.game-buttons')).to.exist
  })
})
