/* global describe, expect, it, sinon, before, after */

import firebaseui from 'firebaseui'
import { createComponent } from '../../../../test/unit/specs/setup'
import SignInButtons from './SignInButtons'

describe('SignInButtons.vue', () => {
  let vm
  let start
  let reset

  before(() => {
    start = sinon.stub()
    reset = sinon.stub()
    sinon.stub(firebaseui.auth, 'AuthUI').returns({start, reset})

    const auth = sinon.stub().returns({user: 'fake'})
    auth.GoogleAuthProvider = {PROVIDER_ID: 'google'}
    auth.FacebookAuthProvider = {PROVIDER_ID: 'facebook'}
    auth.GithubAuthProvider = {PROVIDER_ID: 'github'}
    auth.EmailAuthProvider = {PROVIDER_ID: 'email'}

    vm = createComponent(SignInButtons, {
      storeData: {
        state: {
          firebase: {
            api: {auth}
          }
        }
      }
    })
  })

  it('should create an element to hold firebaseui', () => {
    expect(vm.textContent('#firebaseui-container')).to.exist
  })

  it('should init firebaseui', () => {
    expect(firebaseui.auth.AuthUI.args[0][0]).to.deep.equal({user: 'fake'})
  })

  it('should mount firebaseui', () => {
    expect(start.args[0][0]).to.equal('#firebaseui-container')
    expect(start.args[0][1].signInOptions).to.deep.equal([
      'google',
      'facebook',
      'github',
      'email'
    ])
  })

  after(() => {
    firebaseui.auth.AuthUI.restore()
    vm.$destroy()
    expect(reset.calledOnce).to.be.true
  })
})
