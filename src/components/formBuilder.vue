<template>
  <div class="wrapper">
    <div
        v-for="(field, index) in formConfig"
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
          @click="saveForm"
      ></Button>
    </div>
  </div>
</template>

<script>
import Config from "@/config/form.json";
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
  components: {
    Input,
    Textarea,
    Checkbox,
    Select,
    Button,
  },
  created() {
    this.formConfig.map(element => {
      this.formFields[element.name] = null;
    });
  },
  computed: {
    formConfig() {
      return Config;
    },
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
    saveForm() {
      this.$store.dispatch('addNewForm', this.formFields);
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
.wrapper {
  max-width: 600px;
  min-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
}
</style>