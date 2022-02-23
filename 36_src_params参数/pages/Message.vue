<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 本来要放a标签，点击之后可以显示message的具体信息 -->
        <!-- 跳转并携带query参数————字符串写法 -->
        <!-- <router-link :to="`/home/message/detial?id=${m.id}&title=${m.title}`"> -->
        <!-- 跳转并携带params参数————字符串写法 -->
        <!-- <router-link :to="`/home/message/detial/${m.id}/${m.title}`">
          {{ m.id }}
        </router-link> -->
        <!-- 可以不要path直接name -->
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
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>