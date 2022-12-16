<template>
  <label>
    <input
        type="checkbox"
        v-model="model"
        @change="$emit('input', model)"
    />
  </label>
</template>

<script>
export default {
  data: () => ({
    model: false,
  }),
  name: "dynamic-checkbox",
}
</script>

<style scoped lang="scss">
label {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 0;
  }
}
</style>