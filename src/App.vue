<template>
  <div class="app">
    <!-- 实现子组件给父组件传递信息的三种方式 -->
    <!-- 方式1：父组件通过props给子组件传递一个函数 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 方式2： 自定义事件，把事件atguigu绑定在student组件的实例对象vc身上,然后在组件中想办法触发事件-->
    <!-- <Student v-on:atguigu="getStudentName" /> -->

    <!-- 方法3:   也是自定义事件 但是灵活性强，可以应用在异步场景下 -->
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
  methods: {
    getSchoolName(name) {
      console.log("app得到了学校的名称：" + name);
    },
    // 有多个参数时可以使用剩余参数
    getStudentName(name, ...params) {
      console.log("app得到了学生的姓名：" + name + params);
    },
  },
  mounted() {
    // 拿到student组件的实例，当atguigu事件发生时，调用回调函数
    setTimeout(() => {
      // app组件实例挂载之后，过了三秒才在student组件实例上绑定atguigu事件
      // this.$refs.student.$on("atguigu", this.getStudentName);
      // 如想要该事件只触发一次
      this.$refs.student.$once("atguigu", this.getStudentName);
    }, 3000);
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