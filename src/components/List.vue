<template>
  <ul class="todo-main">
    <!-- 从APP来的数据给子组件用 -->
    <Item
      v-for="itemObj in items"
      :key="itemObj.id"
      :itemName="itemObj.name"
      :itemDone="itemObj.done"
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "List",
  components: {
    Item,
  },
  props: ["items"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>