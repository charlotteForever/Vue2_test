<template>
  <div class="student">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "花椰菜",
      age: 19,
    };
  },
  mounted() {
    pubsub.publish("getStuName", this.name);
  },
};
</script>

<style>
.student {
  height: 150px;
  width: 450px;
  background-color: orange;
}
</style>