/* global describe, it, expect, sinon */

import firebase from './firebase'

describe('firebase', () => {
  it('should start with a null value', () => {
    expect(firebase.state.api).to.equal(null)
  })

  it('should update with an event', () => {
    const state = {}
    firebase.mutations.SET_FIREBASE(state, {api: 'yay'})
    expect(state.api).to.equal('yay')
  })

  it('SIGN_OUT should log out of firebase', () => {
    const signOut = sinon.stub()
    const auth = sinon.stub().returns({signOut})
    const state = {api: {auth}}
    firebase.actions.SIGN_OUT({state})
    expect(auth.calledOnce).to.be.true
    expect(signOut.calledOnce).to.be.true
  })

  // this test and function seem too complex; it should be broken up
  it('INIT_FIREBASE should set up firebase', () => {
    const commit = sinon.stub()
    const onAuthStateChanged = sinon.stub()
    const auth = sinon.stub().returns({onAuthStateChanged})
    const api = {auth}
    const state = {api}
    firebase.actions.INIT_FIREBASE({state, commit}, {api})

    expect(commit.args[0][0]).to.equal('SET_FIREBASE')
    expect(commit.args[0][1]).to.deep.equal({api})
    expect(onAuthStateChanged.calledOnce).to.be.true

    const eventFunc = onAuthStateChanged.args[0][0]
    const user = {name: 'Bob'}
    expect(eventFunc).to.be.a('function')
    eventFunc(user)
    expect(commit.args[1][0]).to.equal('SET_CURRENT_USER')
    expect(commit.args[1][1]).to.deep.equal(user)
  })
})
