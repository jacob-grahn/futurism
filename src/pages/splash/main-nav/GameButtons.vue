<script>
  export default {
    name: 'game-buttons'
  }
</script>

<template>
  <ul class="game-buttons">
    <li><a href="/play">Play</a></li>
    <li><a href="/challenge">Challenge</a></li>
    <li><router-link to="/sign-out">Sign Out</router-link></li>
  </ul>
</template>
