<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name: 'xijie',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.id }}
        </router-link>
        <!-- 之前都是router-link跳转(实际转为a标签),但是也有我们想点击button跳转的情况 -->
        <!-- 需要传递参数 -->
        <button @click="pushCheck(m)">push查看</button>
        <button @click="replaceCheck(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "哈哈哈" },
        { id: "002", title: "嘻嘻嘻" },
        { id: "003", title: "吼吼吼" },
      ],
    };
  },
  methods: {
    pushCheck(m) {
      this.$router.push({
        name: "xijie",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceCheck(m) {
      this.$router.replace({
        name: "xijie",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>