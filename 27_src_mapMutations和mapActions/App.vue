<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/count.vue";
export default {
  name: "App",
  components: { Count },
  mounted() {
    console.log(this.$store);
  },
};
</script>