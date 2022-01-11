<template>
  <div class="school_sty">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "花椰菜",
      age: 19,
    };
  },
};
</script>

<style>
</style>