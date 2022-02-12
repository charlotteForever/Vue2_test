<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <!-- 从APP来的数据给子组件用 -->
      <Item v-for="itemObj in items" :key="itemObj.id" :itemObj="itemObj" />
    </transition-group>
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

/* 元素出现时的动画 */
.todo-enter-active {
  animation: atguigu 0.5s linear;
}
/* 元素消失时的动画 */
.todo-leave-active {
  animation: atguigu 0.5s linear reverse;
}
/* 关键帧 */
@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>