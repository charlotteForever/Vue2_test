<template>
  <div class="app">
    <h3>学生的名字是：{{ stuName }}</h3>
    <School :getSchoolName="getSchoolName" />
    <Student ref="student" />
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
  data() {
    return {
      stuName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("app得到了学校的名称：" + name);
    },
    // 有多个参数时可以使用剩余参数
    getStudentName(name) {
      console.log("app得到了学生的姓名：" + name);
      // vue的承诺：methods里面的this指向为当前组件的实例对象
      this.stuName = name;
    },
  },
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName);
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