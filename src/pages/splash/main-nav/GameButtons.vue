<script>
  export default {
    name: 'game-buttons'
  }
</script>

<template>
  <div class="game-buttons">
    <router-link
      v-mdl
      tag="button"
      to="/challenges"
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
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
