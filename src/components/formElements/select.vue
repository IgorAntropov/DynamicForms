<template>
  <select
      @change="$emit('input', $event.target.selectedOptions[0].value)"
  >
    <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "dynamic-select",
  props: [
      'params',
  ],
  computed: {
    options() {
      return this.params.options;
    },
  },
}
</script>

<style scoped lang="scss">

</style>