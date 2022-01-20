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
    };
  },
  methods: {
    // 在click触发的事件里触发student的自定义事件
    retName() {
      // 触发事件：atguigu，传入参数this.name
      this.$emit("atguigu", this.name, 666, 888);
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