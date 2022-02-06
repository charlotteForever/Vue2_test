<template>
  <div class="app">
    <School />
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: {
    School,
    Student,
  },
};
</script>

<style>
.app {
  height: 360px;
  width: 500px;
  background-color: grey;
}
</style>