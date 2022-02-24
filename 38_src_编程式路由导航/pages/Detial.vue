<template>
  <div>
    <ul>
      <!-- 如果要接受的参数很多,这样写就很麻烦 -->
      <!-- <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li> -->
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detial",
  props: ["id", "title"],
  mounted() {
    console.log("detial", this);
  },
};
</script>

<style>
</style>