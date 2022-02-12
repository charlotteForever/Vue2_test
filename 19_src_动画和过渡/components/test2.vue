<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- group在使用时，包裹的元素必须有key值 -->
    <transition-group name="hello" appear>
      <!-- 条件渲染 实现互斥 -->
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">我是花椰菜</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
}
/* 进入动画的起点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入动画的终点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>