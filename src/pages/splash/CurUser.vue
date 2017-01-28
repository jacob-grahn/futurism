<script>
  export default {
    name: 'cur-user',
    data () {
      return this.$store.state.currentUser
    }
  }
</script>

<template>
  <div class="cur-user">
    <div v-if="!$store.getters.isLoggedIn">
      <router-link to="/sign-in">Sign In</router-link>
    </div>
    <div v-else>{{displayName}}</div>
  </div>
</template>

<style scoped>
</style>
