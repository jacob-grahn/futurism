<script>
  export default {
    name: 'cur-user',
    computed: {
      displayName: function () {
        return this.$store.state.currentUser.displayName
      }
    }
  }
</script>

<template>
  <div class="cur-user">
    <div v-if="!$store.getters.isSignedIn">
      <router-link to="/sign-in">Sign In</router-link>
    </div>
    <div v-else>{{displayName}}</div>
  </div>
</template>

<style scoped>
</style>
