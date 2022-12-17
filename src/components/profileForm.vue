<template>
  <div class="wrapper">
    <FormBuilder
        :config="formConfig"
        @save="saveForm"
    ></FormBuilder>
  </div>
</template>

<script>
import Config from "@/config/profileForm.json";
import FormBuilder from "@/components/formBuilder";

export default {
  name: "profile-form",
  computed: {
    formConfig() {
      return Config;
    },
  },
  components: {
    FormBuilder,
  },
  methods: {
    saveForm(fields) {
      this.$store.dispatch('addNewForm', fields);
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 600px;
  min-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>