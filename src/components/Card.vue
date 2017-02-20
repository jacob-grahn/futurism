<script>
  export default {
    name: 'card',
    props: {
      data: Object
    }
  }
</script>

<template>
  <div class="card">
    {{data}}
  </div>
</template>
