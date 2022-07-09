<template>
  <div class="row mx-auto my-3 ms-1">
    <label :for="id" class="col my-1">{{label}}</label>
    <select class="col form-select ms-3 me-1" :id="id" :value="currentValue"
      @input="$emit('update:currentValue', $event.target.value)">
      <option v-for="option in options" :key="option[1]"
        :value="option[1]">{{option[0]}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'SelectInput',
    props: {
      id: String,
      label: String,
      options: Array,
      currentValue: String
    },
  }
</script>