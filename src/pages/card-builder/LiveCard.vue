<script>
  import Card from '../../components/Card'
  import getPath from '../../fns/get-path'

  export default {
    name: 'live-card',
    components: {Card},
    computed: {
      card () {
        return getPath('$store.state.cardBuilder.card', this)
      }
    }
  }
</script>

<template>
  <card
    class="live-card"
    :data="card">
  </card>
</template>
