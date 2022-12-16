<template>
  <textarea
      @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: "dynamic-textarea",
}
</script>

<style scoped lang="scss">

</style>