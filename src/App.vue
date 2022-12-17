<template>
  <DynamicForm />
</template>

<script>
import DynamicForm from '@/components/main';

export default {
  name: 'App',
  created() {
    this.$router.push('/list');
  },
  components: {
    DynamicForm,
  },
}
</script>

<style>

</style>
