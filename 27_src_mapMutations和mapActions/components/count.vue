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
    <!-- 记得传递参数！！ -->
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd(n)">当前求和为奇数再加</button>
    <button @click="increaseWait(n)">等一等再加</button>
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
    // increase() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrease() {
    //   this.$store.commit("JIAN", this.n);
    // },
    // 对象写法，数组写法也可以，但是要名字统一
    ...mapMutations({ increase: "JIA", decrease: "JIAN" }),
    /****************************/
    // increaseOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // increaseWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    // 对象写法，数组写法也可以，但是要名字统一
    ...mapActions({ increaseOdd: "jiaOdd", increaseWait: "jiaWait" }),
  },
  computed: {
    // 对象写法
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 数组写法
    ...mapState(["sum", "school", "subject"]),
    /************************************************/
    // 对象写法
    // ...mapGetters({ bigSum: "bigSum" }),
    // 数组写法
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 5px;
}
</style>