<template>
  <div>
    <!-- <h3>我是Home的内容</h3> -->
    <ul class="nav nav-tabs">
      <li>
        <!-- 注意此处的路径也需要带上home -->
        <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
        <router-link active-class="list-group-item" to="/home/news"
          >News</router-link
        >
      </li>
      <li>
        <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
        <router-link active-class="list-group-item" to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>