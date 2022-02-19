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
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">当前求和为奇数再加</button>
    <button @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
// 一定要大写
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      //  用户选择的数字
      n: 1,
    };
  },
  methods: {
    increase() {
      // actions没有业务逻辑的话，可以直接跳过actions，直接commit
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrease() {
      // this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    },
    increaseOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    increaseWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // 对象写法
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 数组写法
    ...mapState(["sum", "school", "subject"]),
    /************************************************/
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
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