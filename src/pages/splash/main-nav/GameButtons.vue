<script>
  export default {
    name: 'game-buttons'
  }
</script>

<template>
  <div class="game-buttons">
    <router-link
      to="/challenges"
      class="mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Challenges
    </router-link>
    <router-link
      to="/multiplayer"
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Multiplayer
    </router-link>
    <router-link
      to="/deck-builder"
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Deck Builder
    </router-link>
  </div>
</template>
