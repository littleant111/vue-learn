<template>
  <header class="header">
    <h1>todos</h1>
    <input 
      class="new-todo"
      autofocus 
      autocomplete="off" 
      placeholder="What needs to be done?" 
      v-model="newTodo"
      @keyup.enter="addTodo">
  </header>

</template>

<script>
export default {
  data () {
    return {
      newTodo: '' //这里使用v-model将input的value属性绑定到newTodo
    }
  },
  methods: {
    addTodo () {
      this.$emit('addTodoHandle', this.newTodo) //主动触发addTodoHandle方法，'addTodoHandle'可以向父组件传递数据，在这里也就是Todos
      this.newTodo = ''
    }
  }
}
</script>


