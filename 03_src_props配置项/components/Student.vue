<template>
  <div class="school_sty">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
    <h3>学生性别：{{ sex }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "我是尚硅谷的学生",
    };
  },
  // 写法1
  props: ["name", "age", "sex"],
  // 写法2 如果不符合限制条件就会报错
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },
  // 写法三 更完善的限制
  // props:{
  //   name:{
  //     type:String,
  //     required:true,//表示name参数是必要的
  //   },
  //   age:{
  //     type:Number,
  //     default:99,
  //   },
  //   sex:{
  //     type:String,
  //     required:true
  //   }
  // }
};
</script>

<style>
.school_sty {
  background-color: skyblue;
}
</style>