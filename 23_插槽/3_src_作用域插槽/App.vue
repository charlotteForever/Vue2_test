<template>
  <div class="container">
    <Category title="游戏">
      <!-- 传过来的多个数据保存在该对象里 -->
      <!-- 作用于插槽必须用template -->
      <!-- template的属性里就带上slot-scope和slot -->
      <template slot-scope="atguigu" slot="center">
        <ul>
          <li v-for="(game, index) in atguigu.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="atguigu" slot="center">
        <ol>
          <li v-for="(game, index) in atguigu.games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="atguigu" slot="center">
        <h4 v-for="(game, index) in atguigu.games" :key="index">
          {{ game }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/category.vue";
export default {
  name: "App",
  components: { Category },
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
