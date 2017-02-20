<script>
  import mdl from '../../../directives/mdl'

  export default {
    name: 'game-buttons',
    directives: {mdl}
  }
</script>

<template>
  <div class="game-buttons">
    <router-link
      tag="button"
      to="/challenges"
      v-mdl
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Challenges
    </router-link>
    <router-link
      tag="button"
      to="/multiplayer"
      v-mdl
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Multiplayer
    </router-link>
    <router-link
      tag="button"
      to="/deck-builder"
      v-mdl
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Deck Builder
    </router-link>
    <router-link
      tag="button"
      to="/card-builder"
      v-mdl
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Card Builder
    </router-link>
  </div>
</template>

<style>
  .game-buttons {
    padding: 0 24px;
  }
  .game-buttons button {
    width: 100%;
    display: block;
    margin: 0 auto 15px auto;
  }
</style>
