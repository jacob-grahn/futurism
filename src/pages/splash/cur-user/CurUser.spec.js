/* global expect, it, describe */

import CurUser from './CurUser'
import { createComponent } from '../../../../test/unit/specs/setup'

describe('CurUser.vue', () => {
  it('should show the signed in user name if it is available', () => {
    const vm = createComponent(CurUser, {
      storeData: {
        state: {
          currentUser: {
            displayName: 'Sally'
          }
        }
      }
    })
    expect(vm.textContent()).to.contain('Sally')
    vm.$destroy()
  })
})
