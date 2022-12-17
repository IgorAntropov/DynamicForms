<template>
  <span>{{ indexItem + 1 }}.</span>
  <span>{{ firstUp(item.firstname) }}</span>
  <span>{{ firstUp(item.lastname) }}</span>
  <span class="sex">
    <i class="material-icons male" v-if="item.sex === 'male'">male</i>
    <i class="material-icons" v-else>female</i>
  </span>
  <span class="comment">" {{ item.comment }} "</span>
  <span class="favorite">
    <i class="material-icons" v-if="item.remember">favorite</i>
    <i class="material-icons" v-else>favorite_border</i>
  </span>
</template>

<script>
export default {
  name: "formItem",
  props: [
      'item',
      'indexItem',
  ],
  computed: {
    firstUp() {
      return (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
      };
    },
  },
}
</script>

<style scoped lang="scss">
span {
  cursor: default;
  text-align: center;

  &:not(:first-child) {
    margin-left: 5px;
  }

  &.comment {
    color: gray;
  }

  &.favorite {
    i {
      color: red;
    }
  }

  &.sex {
    i {
      color: pink;

      &.male {
        color: blue;
      }
    }
  }
}
</style>