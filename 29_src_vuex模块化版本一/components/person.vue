<template>
  <div>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <h2>人员列表</h2>
    <h3>第一个人的姓名为：{{ firstName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// 不用mapXXX的版本
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  //   用计算属性代替mapState和mapGetters
  computed: {
    sum() {
      return this.$store.state.countOptions.sum;
    },
    personList() {
      return this.$store.state.personOptions.personList;
    },
    // 注意getters和state获取各自属性的不同
    firstName() {
      return this.$store.getters["personOptions/firstName"];
    },
  },
  methods: {
    //   函数代替mapMutations和mapActions
    addPerson() {
      const person = { id: nanoid(), name: this.name };
      this.$store.commit("personOptions/ADD_PERSON", person);
      this.name = "";
    },
    addWang() {
      const personWang = { id: nanoid(), name: this.name };
      this.$store.dispatch("personOptions/addWang", personWang);
      this.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>