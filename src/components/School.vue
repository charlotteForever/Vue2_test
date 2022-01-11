<template>
  <div>
    <!-- 使用过滤器 -->
    <h3>学校名称：{{ name | mySlice }}</h3>
    <h3>学校地址：{{ address }}</h3>

    <!-- 使用时要加v-fbind -->
    <input type="text" v-fbind:value="msg" /><br /><br />

    <!-- 使用加在原型上的方法 -->
    <button @click="hello">点击我hello</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷1哈哈哈",
      address: "北京",
      msg: "请输入信息……",
    };
  },
};
</script>

<style>
</style>