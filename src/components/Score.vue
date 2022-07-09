<template>
  <strong>Score: {{score}}</strong>
</template>

<script>
  export default {
    name: 'Score-El',
    props: {
      score: Number,
    }
  }
</script>