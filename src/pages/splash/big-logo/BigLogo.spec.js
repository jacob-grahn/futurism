/* global describe, expect, it */

import { createComponent } from '../../../../test/unit/specs/setup'
import BigLogo from './BigLogo'

describe('BigLogo.vue', () => {
  it('should render something fancy', () => {
    const vm = createComponent(BigLogo)
    expect(vm.textContent('.fader-waver')).to.exist
    vm.$destroy()
  })
})
