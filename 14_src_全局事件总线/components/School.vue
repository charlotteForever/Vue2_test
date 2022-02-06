<template>
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    this.$bus.$on("getStudentName", (data) => {
      console.log("School组件实例对象获取了student实例对象的name : " + data);
    });
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