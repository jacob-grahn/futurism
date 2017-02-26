/* global describe, it, expect */

import getPath from './get-path'

describe('getPath', () => {
  it('should get a simple key value pair', () => {
    const result = getPath('key', {key: 'value'})
    expect(result).to.equal('value')
  })
  it('should get a deep value', () => {
    const result = getPath('cats.1.name', {cats: [{}, {name: 'felix'}]})
    expect(result).to.equal('felix')
  })
  it('should get a path that does not exist', () => {
    const result = getPath('some.path', {})
    expect(result).to.equal(undefined)
  })
  it('should accept a falsy starting value', () => {
    const result = getPath('some.path', undefined)
    expect(result).to.equal(undefined)
  })
})
