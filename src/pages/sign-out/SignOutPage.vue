<script>
  import firebase from 'firebase'

  export default {
    mounted () {
      this.$store.dispatch('SIGN_OUT')
    }
  }
</script>

<template>
  <div class="sign-out-page">
    <h1>You have been signed out</h1>
    <router-link to="/splash">Go Back</router-link>
  </div>
</template>
