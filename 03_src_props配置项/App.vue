<template>
  <div>
    <h1 v-text="msg"></h1>
    <!-- 这里的参数会传入props里，座位该组件实例对应的参数 -->
    <!-- age前面加冒号数据绑定，是v-bind的缩写，冒号号里面成为表达式 -->
    <school name="小明" :age="18 + 1" sex="male"></school>
  </div>
</template>

<script>
import School from "./components/Student.vue";
export default {
  data() {
    return {
      msg: "我们是尚硅谷的学生",
    };
  },
  components: {
    School,
  },
};
</script>

<style>
</style>