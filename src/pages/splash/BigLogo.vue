<script>
  import FaderWaver from './FaderWaver'
  export default {
    components: {
      FaderWaver
    }
  }
</script>

<template>
  <div class="big-logo">
    <fader-waver class="title-logo" text="FUTURISM"></fader-waver>
    <fader-waver class="title-logo-2" text="FUTURISM"></fader-waver>
  </div>
</template>

<style lang="less">
  @import '../../styles/variables';

  .big-logo {
  }
  .title-logo {
    color: @light-contrast;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    letter-spacing: -10px;
  }
  .title-logo-2 {
    position: relative;
    top: -179px;
    z-index: -1;
    color: white;
    letter-spacing: -9.7px;
  }
</style>
