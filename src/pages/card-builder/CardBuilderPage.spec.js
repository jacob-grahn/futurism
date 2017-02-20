/* global describe, expect, it, beforeEach, afterEach */

import { createComponent } from '../../../test/unit/specs/setup'
import CardBuilderPage from './CardBuilderPage'

describe('CardBuilderPage.vue', () => {
  let vm

  beforeEach(() => {
    vm = createComponent(CardBuilderPage)
  })

  afterEach(() => {
    vm.$destroy()
  })

  it('should show the card being edited', () => {
    expect(vm.textContent('.live-card')).to.exist
  })

  it('should show an editable list of attributes', () => {
    expect(vm.textContent('.attribute-controls')).to.exist
  })

  it('should show a save button', () => {
    expect(vm.textContent('.save-btn')).to.exist
  })

  it('should show a load button', () => {
    expect(vm.textContent('.load-btn')).to.exist
  })

  it('should show a delete button', () => {
    expect(vm.textContent('.delete-btn')).to.exist
  })

  it('the delete button should trigger a confirmation', () => {
    expect(vm.textContent('.confirm-modal')).to.exist
  })
})
