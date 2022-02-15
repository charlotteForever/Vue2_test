<template>
  <div class="row">
    <h1 v-show="info.isFirst">欢迎！</h1>
    <h1 v-show="info.isLoading">正在加载……</h1>
    <div
      class="card"
      v-for="user in info.users"
      :key="user.login"
      v-show="info.users.length"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <h1 v-show="info.errMessage">{{ info.errMessage }}</h1>
  </div>
</template>

<script>
export default {
  name: "items",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        users: [],
        errMessage: "",
      },
    };
  },
  mounted() {
    // 绑定事件和对应的回调
    this.$bus.$on("getData", (info) => {
      this.info = { ...this.info, ...info };
    });
  },
};
</script>

<style lang="scss" scoped>
</style>