<script>
  export default {
    name: 'cur-user',
    computed: {
      displayName: function () {
        const currentUser = this.$store.state.currentUser
        return currentUser ? currentUser.displayName : null
      }
    }
  }
</script>

<template>
  <div class="cur-user">
    <router-link v-if="displayName" to="/sign-out">{{displayName}}</router-link>
  </div>
</template>
