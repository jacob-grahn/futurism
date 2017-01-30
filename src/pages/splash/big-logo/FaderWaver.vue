<script>
  const freq = 150;
  const minOpacity = 0;
  const maxOpacity = 0.8;
  const changeRate = 0.75;

  export default {
    props: {
      text: String
    },
    data () {
      return {
        elements: this.splitText(this.text),
        intervalId: null,
        curOpacity: 0
      }
    },
    methods: {
      splitText (text) {
        if (!text) {
          return []
        }
        return text.split('').map(letter => {
          return {letter, opacity: minOpacity}
        })
      },
      start () {
        this.stop()
        this.intervalId = setInterval(this.step, freq);
      },
      stop () {
        if (this.intervalId) {
          clearInterval(this.intervalId)
          delete this.intervalId
        }
      },
      step () {
        const nextOpacity = this.calcNextOpacity(this.curOpacity)
        this.shiftOpacities(nextOpacity)
        this.curOpacity = nextOpacity
      },
      shiftOpacities (opacity) {
        this.elements.forEach(element => {
          const tmp = element.opacity
          element.opacity = opacity
          opacity = tmp
        })
      },
      calcNextOpacity (opacity) {
        let nextOpacity = opacity
        nextOpacity += (Math.random() * changeRate) - (changeRate / 2)
        nextOpacity = Math.max(nextOpacity, minOpacity)
        nextOpacity = Math.min(nextOpacity, maxOpacity)
        return nextOpacity
      }
    },
    mounted () {
      this.start()
    },
    beforeDestroy () {
      this.stop()
    }
  }
</script>

<template>
  <ul class="fader-waver">
    <li v-for="element in elements" :style="`opacity: ${element.opacity}`">
      {{element.letter}}
    </li>
  </ul>
</template>

<style lang="less" scoped>
  ul {
    font-size: 80px;
    @include transform(skew(-30deg,0deg));
  }
  ul li {
    display: inline;
  }
</style>
