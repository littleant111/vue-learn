<template>
  <div>
    <ul>
      <!-- v-for 块中我们对父作用域属性拥有完全访问权限，v-for还支持一个可选的第二个参数为当前项的索引  -->
      <!-- 这里的key要写一下，以便跟踪每个节点的身份 -->
      <li v-for="(msg, index) in msgs" :key="msg.id">
        {{ parentMessage }}-{{ index }}-{{ msg.msg }}
      </li>
    </ul>
    <ul>
      <!-- 这里也可以提供第二个参数为键名,第三个参数为索引 -->
      <li v-for="(value, key, index) in object">
        {{index}}.{{ key }}: {{ value }}
      </li>
    </ul>
    <ul>
      <li v-for="n in evenNumbers">{{ n }}</li>
    </ul>
    <div>
      <span v-for="n in 10">{{ n }}</span>
    </div>

    <div>
      <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
      <ul>
        <li v-for="(todo, k) in todos"  v-bind:key="todo.id" v-bind:title="todo.title">
          {{ k }}.{{ todo.title }}
          <button @click="remove(k)"> x </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  data () {
    return {
      parentMessage: 'Parent',
      //v-for将这个数组对应为一组元素
      msgs: [
        {msg: 'Foo'},
        {msg: 'Bar'}
      ],
      //v-for迭代对象的属性
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      numbers: [ 1, 2, 3, 4, 5 ],
      newTodoText: '',
      todos: [
        {
          id:1, title: 'Do the dishes',
        },
        {
          id:2, title: 'Take out the trash',
        },
        {
          id:3, title: 'Mow the lawn',
        }
      ],
      nextTodoId:4
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  // mounted: {
    
  // },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      console.log(this.newTodoText)
      this.newTodoText = ''
    },
    remove(k) {
      console.log(k)
      this.todos.splice(k, 1)
    }
  }
}
</script>

<style scoped>
  /*button {
    border:1px solid;
  }*/
</style>

<!-- 遍历对象时，是按Object.keys()的结果遍历，但是不能保证它的结果在不同的js引擎下是一样的 -->
