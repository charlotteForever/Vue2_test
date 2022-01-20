<template>
  <div class="student">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
    <h3>number的值为:{{ num }}</h3>
    <button @click="add">点我num++</button>
    <button @click="retName">点我得到学生姓名</button>
    <button @click="unbind">点我解绑事件</button>
    <button @click="death">销毁当前student组件实例</button>
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
      this.$emit("atguigu", this.name);
      // 绑定一个额外的事件用来测试
      this.$emit("demo");
    },
    add() {
      this.num++;
      // 销毁组件实例之后会有输出,但是页面上的num值没有了
      console.log("num++了!");
    },
    unbind() {
      // 解绑一个事件
      // this.$off("atguigu");
      // 解绑多个事件
      // this.$off(["atguigu", "demo"]);
      // 解绑所有时间
      this.$off();
    },
    death() {
      // 销毁后所有的自定义事件都会解绑
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