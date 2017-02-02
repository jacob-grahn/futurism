/* global describe, it, expect */

import currentUser from './current-user'

describe('current-user', () => {
  it('should start with null values', () => {
    expect(currentUser.state).to.deep.equal({
      displayName: null,
      photoUrl: null,
      uid: null
    })
  })
  it('SET_CURRENT_USER should update state', () => {
    const state = {}
    currentUser.mutations.SET_CURRENT_USER(state, {
      displayName: 'Biff',
      photoUrl: 'something',
      uid: '123'
    })
    expect(state).to.deep.equal({
      displayName: 'Biff',
      photoUrl: 'something',
      uid: '123'
    })
  })
  it('isSignedIn should return true if uid exists', () => {
    const result = currentUser.getters.isSignedIn({uid: 'aaa'})
    expect(result).to.be.true
  })
  it('isSignedIn should return false if uid does not exist', () => {
    const result = currentUser.getters.isSignedIn({})
    expect(result).to.be.false
  })
})
