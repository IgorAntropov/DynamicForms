<template>
  <div
      v-for="(field, index) in config"
      :key="index"
      class="element-container"
  >
    <label class="element-title">{{ field.label }}</label>
    <component
        :is="field.type"
        :name="field.name"
        :params="field.params"
        @input="updateFiled(field.name, $event)"
    ></component>
  </div>
  <div class="control">
    <Button
        :title="'Reset'"
        :style="'reset'"
        :disabled="!disabledResetBtn"
        @click="resetForm"
    ></Button>
    <Button
        :title="'Submit'"
        :style="'save'"
        :disabled="disabledSaveBtn"
        @click="$emit('save', formFields)"
    ></Button>
  </div>
</template>

<script>
import Input from "@/components/formElements/input";
import Textarea from "@/components/formElements/textarea";
import Checkbox from "@/components/formElements/checkbox";
import Select from "@/components/formElements/select";
import Button from "@/components/formElements/button";

export default {
  data: () => ({
    formFields: {},
  }),
  name: "formBuilder",
  props: [
    'config',
  ],
  emits: [
    'save',
  ],
  components: {
    Input,
    Textarea,
    Checkbox,
    Select,
    Button,
  },
  mounted() {
    this.config.map(element => {
      this.formFields[element.name] = null;
    });
  },
  computed: {
    disabledSaveBtn() {
      return Object.keys(this.formFields).some(
          key => this.formFields[key] === null || this.formFields[key] === ''
      );
    },
    disabledResetBtn() {
      return Object.keys(this.formFields).some(
          key => this.formFields[key] !== null && this.formFields[key] !== ''
      );
    },
  },
  methods: {
    updateFiled(field, value) {
      if (typeof value === 'string' || typeof value === 'boolean') {
        this.formFields[field] = value;
      }
    },
    resetForm() {
      Object.keys(this.formFields).map(key => {
        const element = document.querySelector(`[name=${key}]`);

        if (element.tagName === 'LABEL') {
          element.querySelector('input').checked = false;
        } else {
          element.value = '';
        }

        this.formFields[key] = null;
      });
    },
  },
}
</script>

<style scoped lang="scss">
.element-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 100%;

  label.element-title {
    width: 90px;
    margin-right: 5px;
    text-align: center;
  }

  input, select, textarea {
    width: 200px;
    height: 40px;
    margin: 0;
    padding: 0;
  }
}

.control {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}
</style>