<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      keyWord: "",
    };
  },
  mounted() {},
  methods: {
    searchUsers() {
      this.$bus.$emit("getData", {
        isFirst: false,
        isLoading: true,
        users: [],
        errMessage: "",
      });
      // 此处使用es6模板字符串
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (response) => {
            // 触发userInfo事件，并传递数据
            this.$bus.$emit("getData", {
              isLoading: false,
              users: response.data.items,
              errMessage: "",
            });
          },
          (err) => {
            this.$bus.$emit("getData", {
              isLoading: false,
              users: [],
              errMessage: err.message,
            });
            console.log("发生了错误", err.message);
          }
        );
    },
  },
};
</script>

<style lang="css" scoped>
</style>