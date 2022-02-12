<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name和下面动画的选择器一一对应 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: plum;
}
/* 元素出现时的动画 */
.hello-enter-active {
  animation: atguigu 1s linear;
}
/* 元素消失时的动画 */
.hello-leave-active {
  animation: atguigu 0.5s linear reverse;
}
/* 关键帧 */
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>