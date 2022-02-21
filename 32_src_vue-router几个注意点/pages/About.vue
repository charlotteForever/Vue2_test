<template>
  <div>
    <h3>我是About的内容</h3>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("about的", this.$route);
    console.log("about的", this.$router);
  },
  beforeDestroy() {
    console.log("About组件要被销毁了");
  },
};
</script>

<style>
</style>