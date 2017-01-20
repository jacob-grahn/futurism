import firebase from 'firebase'
import store from '../store'

export function init () {
  firebase.auth().onAuthStateChanged(newUser => {
    store.commit('SET_CURRENT_USER', newUser || {})
  })
}

export function logout () {
  firebase.auth().signOut()
}
