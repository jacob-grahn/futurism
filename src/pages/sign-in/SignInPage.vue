<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui'
  import config from './firebaseui-config'
  let ui

  export default {
    mounted () {
      ui = ui || new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-container', config)
    },
    destroyed () {
      ui.reset()
    }
  }
</script>

<template>
  <div id="firebaseui-container"></div>
</template>
