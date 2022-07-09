<template>
  <div>
    <button class="form-control btn btn-primary mb-5 ms-1"
      @click="$emit('play-button-click')">Play!</button>
  </div>
</template>

<script>
  export default {
    name: 'PlayButton'
  }
</script>