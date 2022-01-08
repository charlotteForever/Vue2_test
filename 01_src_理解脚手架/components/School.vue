<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ address }}</h3>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./Student.vue";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  components: {
    Student,
  },
};
</script>

<style>
</style>