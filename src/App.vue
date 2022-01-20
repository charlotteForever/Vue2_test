<template>
  <div class="app">
    <School :getSchoolName="getSchoolName" />
    <Student v-on:atguigu="getStudentName" @demo="m1" />
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
  methods: {
    getSchoolName(name) {
      console.log("app得到了学校的名称：" + name);
    },
    // 有多个参数时可以使用剩余参数
    getStudentName(name) {
      console.log("app得到了学生的姓名：" + name);
    },
    m1() {
      console.log("demo事件被触发了");
    },
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