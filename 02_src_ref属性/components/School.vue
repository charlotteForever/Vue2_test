<template>
  <div class="school_sty">
    <h3 ref="school_name">学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "beijing",
    };
  },
};
</script>

<style>
.school_sty {
  background-color: skyblue;
}
</style>