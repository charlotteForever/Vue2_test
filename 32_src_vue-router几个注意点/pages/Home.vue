<template>
  <div>
    <h3>我是Home的内容</h3>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("home的", this.$route);
    console.log("home的", this.$router);
  },
  beforeDestroy() {
    console.log("Home组件要被销毁了");
  },
};
</script>

<style>
</style>