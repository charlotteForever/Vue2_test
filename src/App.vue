<template>
  <div>
    <button @click="send">发送请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    send() {
      axios
        // 找8080端口的服务器要students数据
        .get("http://localhost:8080/students")
        .then((res) => {
          console.log("请求成功了" + res.data);
        })
        .catch((err) => {
          console.error("请求失败了" + err.message);
        });
    },
  },
};
</script>

<style scoped>
</style>