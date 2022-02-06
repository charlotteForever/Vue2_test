<template>
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
    <button @click="retName">点我获取学校名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    retName() {
      this.getSchoolName(this.name);
    },
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