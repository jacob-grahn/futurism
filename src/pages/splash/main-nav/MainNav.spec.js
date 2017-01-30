/* global describe, expect, it */

import { createComponent } from '../../../../test/unit/specs/setup'
import MainNav from './MainNav'

describe('SplashPage.vue', () => {
  it('should show login buttons if the user is not logged in', () => {
    const vm = createComponent(MainNav, {
      storeData: {
        getters: {
          isSignedIn: () => false
        }
      }
    })
    expect(vm.textContent('.sign-in-buttons')).to.exist
    vm.$destroy()
  })
  it('should show game buttons if the user is logged in', () => {
    const vm = createComponent(MainNav, {
      storeData: {
        getters: {
          isSignedIn: () => true
        }
      }
    })
    expect(vm.textContent('.game-buttons')).to.exist
    vm.$destroy()
  })
})
