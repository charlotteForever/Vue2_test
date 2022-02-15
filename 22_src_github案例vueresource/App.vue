<template>
  <div class="container">
    <search />
    <items />
  </div>
</template>

<script>
import search from "./components/search.vue";
import items from "./components/items.vue";
export default {
  name: "App",
  components: { search, items },
};
</script>

<style lang="css">
/* 全局样式 */
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
