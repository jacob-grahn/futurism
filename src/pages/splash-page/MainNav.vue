<script>
  import { logout } from '../../services/current-user'
  export default {
    name: 'MainNav',
    methods: {
      logout
    }
  }
</script>

<template>
  <ul v-if="!$store.getters.isLoggedIn">
    <li><router-link to="/login">LOGIN</router-link></li>
  </ul>
  <ul v-else>
    <li><a href="PLAY">PLAY</a></li>
    <li><a href="lla">CHALLENGE</a></li>
    <li><a @click="logout">LOGOUT</a></li>
  </ul>
</template>
