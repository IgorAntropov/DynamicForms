<template>
  <div class="wrapper">
    <div class="items">
      <div
          v-for="(form, index) in getForms"
          :key="index"
          class="item"
      >
        <FormItem
            :item="form"
            :indexItem="index"
        ></FormItem>
      </div>
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
import FormItem from "@/components/formsList/formItem";

export default {
  name: "forms-list",
  components: {
    FormItem,
  },
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
@keyframes border-run {
  0% {
    background-position: 0 0, 10px 100%, 0 10px, 100% 0;
  }
  100% {
    background-position: 10px 0, 0 100%, 0 0, 100% 10px;
  }
}

.items {
  padding: 20px;
  animation: border-run 400ms infinite linear;
  background-image:
      linear-gradient(90deg, blue 50%, transparent 50%),
      linear-gradient(90deg, blue 50%, transparent 50%),
      linear-gradient(0, blue 50%, transparent 50%),
      linear-gradient(0, blue 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 10px 2px, 10px 2px, 2px 10px, 2px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 600px;
  overflow-y: auto;

  .item {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    &:not(:last-child) {
      border-bottom: 1px solid gray;
      margin-bottom: 10px;
      padding-bottom: 5px;
    }
  }
}
</style>