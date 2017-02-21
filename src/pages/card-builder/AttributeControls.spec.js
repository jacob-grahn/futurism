/* global describe, expect, it, beforeEach, afterEach */

import { createComponent } from '../../../test/unit/specs/setup'
import AttributeControls from './AttributeControls'

describe('AttributeControls.vue', () => {
  let vm

  beforeEach(() => {
    vm = createComponent(AttributeControls)
  })

  afterEach(() => {
    vm.$destroy()
  })

  it('should list attributes that can be edited', () => {
    expect(vm.textContent('.attribute-list')).to.exist
  })
})
