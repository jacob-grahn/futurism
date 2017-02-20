/* global describe, it, expect */

import setPath from './set-path'

describe('setPath', () => {
  it('should set a simple key value pair', () => {
    const result = setPath('key', 'value', {})
    expect(result).to.deep.equal({key: 'value'})
  })
  it('should set a path that does not exist', () => {
    const result = setPath('some.path', 'value', {})
    expect(result).to.deep.equal({some: {path: 'value'}})
  })
  it('should accept a falsy starting value', () => {
    const result = setPath('some.path', 'value', undefined)
    expect(result).to.deep.equal({some: {path: 'value'}})
  })
})
