<template>
  <div id="todolist" class="todoapp">
  	<!-- 这里使用了@addTodoHandle="addTodo"来监听子组件的addTodoHandle方法，并绑定到Todos组件methods的addTodo方法 -->
	<!-- 而子组件使用this.$emit('addTodoHandle')来触发父组件的addTodo回调 -->
    <el-Header @addTodoHandle="addTodo"/>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <el-Footer @removeCompletedHandle="removeCompleted" :todos="todos"/>
  </div>
</template>



<script>
  import uuid from 'uuid'
  import ElHeader from './Header'
  import ElFooter from './Footer' 
  // import Todos from './Todos'
  import Store from '../store/index'
  export default {
    name: 'todolist',
    data () {
      return {
        todos: Store.todos.fetch() // 存储所有todos
      }
    },
    created () {
      let filter = this.$route.params.filter
      if (!filter) {
        this.$router.replace({ path: Store.filter.get() })
      }
    },
    methods: {
      addTodo (value) {
      	console.log(value) // 输出看看子组件发送的消息内容
        value = value && value.trim()
        if (!value) {
          return
        }
        this.todos.push({
          id: uuid(),
          title: value,
          completed: false
        })
      },
      removeCompleted: function () {
		  const completedTodos = this.todos.filter(todo => todo.completed)
		  completedTodos.forEach(todo => this.todos.splice(this.todos.indexOf(todo), 1))
	  }
    },
    // watch todos change for localStorage persistence
    watch: {
      '$route': function (to, from) {
        console.log(to)
       },
      todos: {
        handler: function (todos) {
          Store.todos.save()
        },
        deep: true
      }
    },
    
    components: {
      ElHeader, ElFooter
    }
  }

</script>
<style>
  @import '../../node_modules/todomvc-app-css/index.css'
</style>
