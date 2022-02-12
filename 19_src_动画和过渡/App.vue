<template>
  <div>
    <test />
    <test2 />
    <test3 />
  </div>
</template>

<script>
import test from "./components/test.vue";
import test2 from "./components/test2.vue";
import test3 from "./components/test3.vue";
export default {
  components: {
    test,
    test2,
    test3,
  },
};
</script>

<style scoped>
</style>