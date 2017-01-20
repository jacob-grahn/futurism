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
  <div>
    <cur-user></cur-user>
    <big-logo></big-logo>
    <main-nav></main-nav>
  </div>
</template>
