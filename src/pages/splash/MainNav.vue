<script>
  export default {
    name: 'main-nav'
  }
</script>

<template>
  <div class="main-nav">
    <ul v-if="!$store.getters.isLoggedIn">
      <li><router-link to="/sign-in">Sign In</router-link></li>
    </ul>
    <ul v-else>
      <li><a href="/play">Play</a></li>
      <li><a href="/challenge">Challenge</a></li>
      <li><router-link to="/sign-out">Sign Out</router-link></li>
    </ul>
  </div>
</template>
