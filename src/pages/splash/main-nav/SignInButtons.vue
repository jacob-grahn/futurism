<script>
  import firebaseui from 'firebaseui'
  import css from 'firebaseui/dist/firebaseui.css'
  let ui

  export default {
    name: 'sign-in-buttons',
    computed: {
      auth () {
        const firebase = this.$store.state.firebase
        if (!firebase) return null
        return firebase.api.auth
      },
      config () {
        return {
          signInOptions: [
            this.auth.GoogleAuthProvider.PROVIDER_ID,
            this.auth.FacebookAuthProvider.PROVIDER_ID,
            this.auth.GithubAuthProvider.PROVIDER_ID,
            this.auth.EmailAuthProvider.PROVIDER_ID
          ],
          tosUrl: '/tos' // Terms of service url.
        }
      }
    },
    mounted () {
      if (!this.auth) return
      ui = ui || new firebaseui.auth.AuthUI(this.auth())
      ui.start('#firebaseui-container', this.config)
    },
    destroyed () {
      if (ui) ui.reset()
    }
  }
</script>

<template>
  <div class="sign-in-buttons">
    <div id="firebaseui-container"></div>
  </div>
</template>
