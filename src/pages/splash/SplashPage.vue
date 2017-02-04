<script>
  import BigLogo from './big-logo/BigLogo'
  import CurUser from './CurUser'
  import MainNav from './main-nav/MainNav'

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
  .big-logo {
    margin: 32px auto;
  }
</style>
