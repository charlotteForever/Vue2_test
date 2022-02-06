<template>
  <div class="student">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
    <button @click="retName">点我得到学生姓名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "花椰菜",
      age: 19,
      num: 0,
    };
  },
  methods: {
    retName() {
      // 绑定atguigu事件,并返回参数
      this.$emit("atguigu", this.name);
    },
    unbind() {
      // 解绑一个事件
      this.$off("atguigu");
    },
    death() {
      this.$destroy();
    },
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