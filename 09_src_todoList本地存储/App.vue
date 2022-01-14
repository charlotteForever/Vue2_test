<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Add :addItem="addItem" />
      <List :items="items" :checkItem="checkItem" :deleteItem="deleteItem" />
      <Choice
        :items="items"
        :changeDone="changeDone"
        :deleteDone="deleteDone"
      />
    </div>
  </div>
</template>

<script>
import Add from "./components/Add.vue";
import List from "./components/List.vue";
import Choice from "./components/Choice.vue";
export default {
  components: {
    Add,
    List,
    Choice,
  },
  // 数据通过props传给List,List通过props传递给Item
  data() {
    return {
      items: JSON.parse(localStorage.getItem("items")) || [],
    };
  },
  methods: {
    // 添加一个item项
    addItem(itemObj) {
      this.items.unshift(itemObj);
    },
    // 修改item的done状态
    checkItem(id) {
      // 数据在哪，就在哪里修改数据
      // 遍历拿到对应的itemObj，修改done属性
      this.items.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个item
    deleteItem(id) {
      // filter返回一个新数组，所以需要再次赋值
      this.items = this.items.filter((item) => {
        return item.id != id;
      });
    },
    changeDone(done) {
      this.items.forEach((item) => {
        item.done = done;
      });
    },
    deleteDone() {
      this.items = this.items.filter((item) => {
        // 返回done为0，即没有勾选的 新数组
        return !item.done;
      });
    },
  },
  // 监视items的改变
  watch: {
    items: {
      deep: true,
      handler(value) {
        // 一旦改变，同步到本地存储中
        localStorage.setItem("items", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>