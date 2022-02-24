<template>
  <div>
    <ul>
      <!-- 解构赋值 -->
      <li :style="{ opacity }">欢迎学习vue</li>
      <li>news001</li>
      <input type="text" />
      <li>news002</li>
      <input type="text" />
      <li>news003</li>
      <input type="text" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // 当组件被激活时
  activated() {
    // 保存定时器以便于销毁
    // setInterval是持续的,setTimeout只有一次
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
      console.log("@");
    }, 16);
  },
  // 当组件失活时
  deactivated() {
    clearTimeout(this.timer);
  },
};
</script>

<style>
</style>