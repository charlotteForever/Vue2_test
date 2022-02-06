<template>
  <div class="todo-footer">
    <label>
      <!-- 双向数据绑定 如果isAll的值为false，则把所有item的done也都改为false -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ totalDone }}</span> / 全部{{ totalItem }}
    </span>
    <button class="btn btn-danger" @click="handleDelete">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Choice",
  props: ["items", "changeDone", "deleteDone"],
  computed: {
    // item的个数
    totalItem() {
      return this.items.length;
    },
    // 已完成的事件的个数
    totalDone() {
      return this.items.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    // 是否all事件已完成
    isAll: {
      // isAll的值由总数是否等于完成数确定
      get() {
        // 这里要用this，不然访问不到其他两个计算属性
        return this.totalDone === this.totalItem && this.totalItem > 0;
      },
      //如果isAll的值为false，则把所有item的done也都改为false
      set(value) {
        this.changeDone(value);
      },
    },
  },
  methods: {
    handleDelete() {
      this.deleteDone();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>