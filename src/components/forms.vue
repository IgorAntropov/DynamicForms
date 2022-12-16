<template>
  <div class="wrapper">
    <div
        v-for="(form, index) in getForms"
        :key="index"
        class="item"
    >
      <span>{{ index + 1 }}.</span>
      <span>{{ form.firstname }}</span>
      <span>{{ form.lastname }}</span>
      <span>
        <i class="material-icons" v-if="form.sex === 'male'">male</i>
        <i class="material-icons" v-else>female</i>
      </span>
      <span class="comment">{{ form.comment }}</span>
      <span>
        <i class="material-icons" v-if="form.remember">favorite</i>
        <i class="material-icons" v-else>favorite_border</i>
      </span>
    </div>
    <div
        class="empty-list"
        v-if="!getForms.length"
    >
      <span>List is empty!</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "forms-list",
  computed: {
    ...mapGetters(
        [
            'getForms',
        ]
    ),
  },
}
</script>

<style scoped lang="scss">
.item {
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    &:not(:first-child) {
      margin-left: 5px;
    }

    &.comment {
      color: gray;
    }
  }
}
</style>