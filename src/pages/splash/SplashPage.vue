<script>
  import BigLogo from './BigLogo'
  import CurUser from './CurUser'
  import MainNav from './MainNav'

  export default {
    components: {
      BigLogo,
      CurUser,
      MainNav
    }
  }
</script>

<template>
  <div class="splash-page">
    <cur-user></cur-user>
    <big-logo></big-logo>
    <main-nav></main-nav>
  </div>
</template>

<style>
  .splash-page {
    width: 100%;
  }
  .big-logo {
    text-align: center;
  }
</style>
