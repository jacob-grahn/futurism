import firebase from 'firebase'
import router from '../../services/router'

export default {
  callbacks: {
    signInSuccess: function (user, credential, redirectUrl) {
      router.replace('/splash')
      // Do not redirect.
      return false
    }
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/tos'
}
