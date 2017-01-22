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
        elements: this.text.split('').map(letter => {
          return {letter, opacity: minOpacity}
        }),
        intervalId: null,
        nextOpacity: 0
      }
    },
    methods: {
      start () {
        this.stop()
        this.intervalId = setInterval(this.step, freq);
      },
      stop () {
        if (this.intervalId) {
          clearInterval(intervalId)
          delete this.invervalId
        }
      },
      step () {
        this.updateNextOpacity()
        let prevOpacity = this.nextOpacity;
        this.elements.forEach(element => {
          const tmp = element.opacity
          element.opacity = prevOpacity
          prevOpacity = tmp
        })
      },
      updateNextOpacity () {
        this.nextOpacity += (Math.random() * changeRate) - (changeRate / 2)
        this.nextOpacity = Math.max(this.nextOpacity, minOpacity)
        this.nextOpacity = Math.min(this.nextOpacity, maxOpacity)
      }
    },
    mounted () {
      this.start()
    },
    destroyed () {
      this.stop()
    }
  }
</script>

<template>
  <ul>
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
