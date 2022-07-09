<template>
  <strong>Time Left: {{timeLeft}}</strong>
</template>

<script>
  export default {
    name: 'Timer-El',
    props: {
      timeLeft: Number
    },
  }
</script>