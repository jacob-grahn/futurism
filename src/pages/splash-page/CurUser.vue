<script>
  export default {
    name: 'CurUser',
    data () {
      return this.$store.state.currentUser
    }
  }
</script>

<template>
  <div>
    <div v-if="!$store.getters.isLoggedIn">
      <router-link to="/login">Sign In</router-link>
    </div>
    <div v-else>{{displayName}}</div>
  </div>
</template>

<style scoped>
</style>
