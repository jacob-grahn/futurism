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
    {{displayName}}
  </div>
</template>
