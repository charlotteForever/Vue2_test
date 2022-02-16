<template>
  <div class="container">
    <Category title="食物">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        controls
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- 如果是template包围，那么可以用：v-slot:footer -->
      <template slot="footer">
        <div class="foot">
          <a href="www.baidu.com">经典</a>
          <a href="www.baidu.com">热门</a>
          <a href="www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
.category {
  background: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  background: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
