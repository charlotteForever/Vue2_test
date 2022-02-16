<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot></slot>
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