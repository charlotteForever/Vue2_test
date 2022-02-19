<template>
  <div>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      // 存储input刷入
      name: "",
    };
  },
  methods: {
    addPerson() {
      // 封装person对象
      const person = { id: nanoid(), name: this.name };
      //   commit过去
      this.$store.commit("ADD_PERSON", person);
      //   清空输入
      this.name = "";
    },
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
};
</script>

<style lang="scss" scoped>
</style>