<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInDown"
      leave-active-class="animate__bounceOutDown"
    >
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "test3",
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
</style>