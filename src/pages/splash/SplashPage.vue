<script>
  import BigLogo from './big-logo/BigLogo'
  import CurUser from './cur-user/CurUser'
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
    margin: 128px auto 32px auto;
  }
</style>
