<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="itemObj.done"
        @change="handleChange(itemObj.id)"
      />
      <!-- v-model也可以，但不推荐修改props传过来的值 -->
      <input
        type="text"
        v-show="itemObj.isEdit"
        :value="itemObj.name"
        @blur="handleBlur(itemObj, $event)"
      />
      <span v-show="!itemObj.isEdit">{{ itemObj.name }}</span>
    </label>
    <!-- 但是这个按钮的样式要设置在app里面，该样式整个项目公有 -->
    <button class="btn btn-edit" @click="handleEdit(itemObj)">编辑</button>
    <button class="btn btn-danger" @click="handleDelete(itemObj.id)">
      删除
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  props: ["itemObj"],
  methods: {
    handleChange(id) {
      // this.checkItem(id);
      this.$bus.$emit("checkItem", id);
    },
    handleBlur(itemObj, e) {
      // 把输入框变为itemObj的name
      itemObj.isEdit = false;
      // 失去焦点之后，把数据传递给app;
      // 不能直接传递itemObj，因为输入框里的修改没有同步到itemObj里面
      if (!e.target.value.trim()) {
        return alert("输入不能为空！");
      }
      this.$bus.$emit("changeItem", itemObj.id, e.target.value);
    },
    handleEdit(itemObj) {
      // 如果有isEdit属性
      if (Object.prototype.hasOwnProperty.call(itemObj, "isEdit")) {
        itemObj.isEdit = true;
        console.log("已经有isEdit属性");
      } else {
        // 添加isEdit属性，并把isEdit的值置为true(显示编辑框)
        this.$set(itemObj, "isEdit", true);
        console.log("没有isEdit属性");
      }
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.deleteItem(id);
        // this.$bus.$emit("deleteItem", id);
        pubsub.publish("deleteItem", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  /* 设置选项卡在每一列的前面 */
  flex-grow: 1;
  cursor: pointer;
  /* 这个在flex种失效了 */
  /* justify-self: flex-start; */
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>