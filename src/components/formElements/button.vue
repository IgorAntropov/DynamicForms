<template>
  <button
      :class="style"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "dynamic-button",
  props: [
    'title',
    'style',
  ],
}
</script>

<style scoped lang="scss">
button {
  color: white;
  cursor: pointer;
  border: none;
  height: 40px;
  width: 80px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.save {
    background-color: blue;
  }

  &.reset {
    background-color: red;
  }
}
</style>