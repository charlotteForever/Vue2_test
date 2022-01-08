<template>
  <div>
    <h1 v-text="msg" ref="myDom"></h1>
    <button @click="showDom">点击输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  data() {
    return {
      msg: "你好啊！",
    };
  },
  components: {
    School,
  },
  methods: {
    showDom() {
      //输出App组件的实例对象
      console.log(this);
      // 输出当前的Dom元素
      console.log(this.$refs.myDom);
      // 绑定在组件实例对象上是，获取到当前组件实例
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>