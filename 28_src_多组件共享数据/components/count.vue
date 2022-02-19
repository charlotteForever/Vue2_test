<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前和的十倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}学{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd(n)">当前求和为奇数再加</button>
    <button @click="increaseWait(n)">等一等再加</button>
    <h3 style="color: red">Person组件总人数为：{{ personList.length }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    ...mapMutations({ increase: "JIA", decrease: "JIAN" }),
    ...mapActions({ increaseOdd: "jiaOdd", increaseWait: "jiaWait" }),
  },
  computed: {
    ...mapState(["sum", "school", "subject", "personList"]),
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style lang="css" scoped>
</style>