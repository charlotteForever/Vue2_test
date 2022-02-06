<template>
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    this.pid = pubsub.subscribe("getStuName", (name, data) => {
      console.log(data);
    });
  },
  // 取消订阅事件
  beforeDestroy() {
    pubsub.unsubscribe(this.pid);
  },
};
</script>

<style>
.school {
  height: 150px;
  width: 450px;
  background-color: pink;
}
</style>