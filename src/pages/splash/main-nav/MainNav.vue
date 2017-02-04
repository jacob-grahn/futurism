<script>
  import GameButtons from './GameButtons'
  import SignInButtons from './SignInButtons'

  export default {
    name: 'main-nav',
    components: {
      GameButtons,
      SignInButtons
    },
    computed: {
      isSignedIn () {
        return this.$store.getters.isSignedIn
      }
    }
  }
</script>

<template>
  <div class="main-nav">
    <game-buttons v-if="isSignedIn"></game-buttons>
    <sign-in-buttons v-else></sign-in-buttons>
  </div>
</template>

<style>
  .main-nav {
    width: 275px;
    margin: auto;
  }
</style>
