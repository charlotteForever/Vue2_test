<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 把games数据传给插槽的填充者 -->
    <slot name="center" :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>