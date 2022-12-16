<template>
  <input
      @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "dynamic-input",
}
</script>

<style scoped lang="scss">

</style>