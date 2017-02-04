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
    <fader-waver class="logo logo-1" text="FUTURISM"></fader-waver>
    <fader-waver class="logo logo-2" text="FUTURISM"></fader-waver>
  </div>
</template>

<style lang="less">
  @import '../../../styles/variables';

  .big-logo {
    height: 80px;
    width: 435px;
  }
  .logo {
    position: absolute;
    margin: 0;
    padding: 0;
    font-size: 80px;
  }
  .logo-1 {
    z-index: 1;
    letter-spacing: -10px;
    color: @light-contrast;
    margin: -1px 0 0 2px;
  }
  .logo-2 {
    letter-spacing: -9.7px;
    z-index: 2;
    color: white;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.66);
  }
</style>
