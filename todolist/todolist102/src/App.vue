<!-- // 需求分析：
1.查看待办事项，展示待办事项列表
2.新增待办事项
3.删除待办事项
4.编辑待办事项
5.未完成事项计数
6.待办事项单项的修改
7.完成事项单项的勾选或者锁定

//数据分析
显示数据：
1.待办事项的标题
2.待办事项的单项的内容
3.待办事项的数目
隐式数据：
1.待办事项--锁的图标
2.待办事项--删除的图标
3.待办事项--唯一标示（id）
4.待办单项--删除的图标
5.待办单项--是否已完成的状态（完成后，前面会打勾，文字中间有横杠）

从上可以知道待办事项的单项应该具有的数据：
{
  id: String,  // 单条待办项唯一标示
  title: String,  // 标题
  count: Number,  // 未完成待办项目的计数
  isDelete: Boolean,  // 是否删除
  locked: Boolean,  // 是否锁定
  record: [
     text: String,  // 文字内容
     isDelete: Boolean,  // 是否删除
     checked: Boolean  // 是否完成
  ]
}

//接口api分析：
1.待办事项列表：
api: /todo/list  (get)
params: {}   //传入数据
data: [    //返回数据
  {
    id: String,
    title: String,
    count: Number,
    locked: Boolean
  }
]

2.新增待办事项：
api: /todo/addTodo  (post)
params: {}
data: {}

3.单个待办事项查询：
api: /todo/listId  (get)
params: {id: xx}  //传入Id
data: {
  id: String,
  title: String,
  count: Number,
  isDelete: Boolean,
  locked: Boolean,
  record: [
     text: String,
     isDelete: Boolean,
     checked: Boolean
  ]
}

4.修改待办事项标题，删除或锁定待办事项
api: /todo/editTodo  (post)
params: {
  id: String,
  title: String,
  isDelete: Boolean,
  locked: Boolean
}
data: {}

5.新增 待办单项：
api: /todo/addRecord  (post)
params: {}
data: {}

6.修改。删除。完成待办单项：
api: /todo/editRecord  (post)
params: {
  text: String,
  isDelete: Boolean,
  checked: Boolean
}
data: {}

//组件分析：
1.首先这是一个SPA，本身就是一个大组件
2.应该要有一个布局组件，容纳其他组件
3.左边标签列表是一个组件，包括列表和新增
4.右边单个待办事项是一个组件，包括2部分
5.待办单项是一个组件，因为要用到很多次
最终得到：
app.vue  // 最外层根组件  接入型
layouts.vue   // 布局组件  接入型，接入其他组件
todos.vue   // 左侧列表   交互型组件
lists.vue   // 右侧内容   交互型组件
item.vue   //待办单项组件   交互型组件 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
