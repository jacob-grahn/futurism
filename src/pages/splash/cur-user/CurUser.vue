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
    <button
      v-if="displayName"
      @click="$store.dispatch('SIGN_OUT')">
      {{displayName}}
    </button>
  </div>
</template>
