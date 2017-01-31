/* global describe, expect, it, sinon */

import { createComponent } from '../../../../test/unit/specs/setup'
import FaderWaver from './FaderWaver'

function mockRandom (num = 0.5) {
  if (!Math._random) Math._random = Math.random
  Math.random = () => num
}

function unmockRandom () {
  if (Math._random) Math.random = Math._random
}

describe('FaderWaver.vue', () => {
  it('should be ok with receiving no props', () => {
    expect(() => {
      const vm = createComponent(FaderWaver)
      vm.$destroy()
    }).to.not.throw()
  })

  it('should split and display the text that is passed into it', () => {
    const vm = createComponent(FaderWaver, {
      propsData: {text: 'cat'}
    })
    const children = [...vm.$el.children]
    const textContents = children.map(child => child.textContent)
                                 .map(str => str.trim())
    expect(textContents).to.deep.equal(['c', 'a', 't'])
    vm.$destroy()
  })

  it('should change character opacity over time', () => {
    mockRandom(1)
    const clock = sinon.useFakeTimers()

    const vm = createComponent(FaderWaver, {
      propsData: {text: 'avc'}
    })
    const firstChild = vm.$el.children[0]

    expect(Number(firstChild.style.opacity)).to.equal(0)
    clock.tick(1000)

    return vm.$nextTick(function () {
      expect(Number(firstChild.style.opacity)).to.be.above(0)
      clock.restore()
      unmockRandom()
      vm.$destory()
    })
  })
})
