import firebase from 'firebase'
import router from '../../services/router'

export default {
  callbacks: {
    // Called when the user has been successfully signed in.
    signInSuccess: function (user, credential, redirectUrl) {
      router.replace('/splash')
      // Do not redirect.
      return false
    }
  },
  // Opens IDP Providers sign-in flow in a popup.
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/tos'
}
