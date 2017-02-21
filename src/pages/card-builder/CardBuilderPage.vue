<script>
  import AttributeControls from './AttributeControls'
  import LiveCard from './LiveCard'

  export default {
    name: 'card-builder-page',
    components: {
      AttributeControls,
      LiveCard
    }
  }
</script>

<template>
  <div class="card-builder-page">
    <h1>Card Builder</h1>
    <live-card></live-card>
    <attribute-controls></attribute-controls>
    <div class="save-btn"></div>
    <div class="load-btn"></div>
    <div class="delete-btn"></div>
    <div class="confirm-modal"></div>
  </div>
</template>
