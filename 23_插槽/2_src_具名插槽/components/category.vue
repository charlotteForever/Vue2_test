<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
</style>