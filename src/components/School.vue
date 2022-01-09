<template>
  <div class="school_sty">
    <h3 @click="showName">学校名称{{ name }}</h3>
  </div>
</template>

<script>
// 导入模块
import { mixin } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  // 添加新的配置项，且以数组的形式
  mixins: [mixin],
};
</script>

<style>
.school_sty {
  background-color: skyblue;
}
</style>