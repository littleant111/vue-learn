var STORAGE_KEY = 'todos'
var todoStorage = {
	fetch: function () {
		var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
		todos.forEach(function (todo, index) {
			todo.id = index
		})
		todoStorage.uid = todos.length
		return todos
	},
  save: function (todos) {
  	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

var filters = {
	all: function (todos) {
    return todos
	},
	active: function (todos) {
		return todos.filter(function (todo) {
			return !todo.completed
		})
	},
	completed: function (todos) {
		return todos.filter(function (todo) {
			return todo.completed
		})
	}
}

var app =new Vue({
	el: '#todolist',
	data: {
		todos: todoStorage.fetch(),
		newTodo: '',
		visibility: 'all'
	},

	watch: {
		todos: {
			handler: function (todos) {
				todoStorage.save(todos)
			},
			deep: true
		}
	},

	filters: {
		pluralize: function (n) {
      return n === 1 ? 'todo' : 'todos'
		}
	},

	computed: {
		filteredTodos () {
      return filters[this.visibility](this.todos)
		},
		remaining () {
			return filters.active(this.todos).length
		},
		allDone: {
			get: function () {
				return this.remaining === 0
			},
			set: function (value) {
				console.log(value)
				this.todos.forEach(function (todo) {
					return todo.completed = value
				})
			}
		}
	},

	methods: {
		addTodo: function () {
			var value = this.newTodo && this.newTodo.trim()
			if (!value) {
				return
			}
			this.todos.push({
				id: todoStorage.uid++,
				title: this.newTodo,
				completed: false
			})
			this.newTodo = ''
		},
		removeTodo: function (todo) {
			this.todos.splice(this.todos.indexOf(todo), 1)
		},
		removeCompleted: function() {
      this.todos = filters.active(this.todos)
    },
	}
})

function onHashChange () {
	var visibility = window.location.hash.replace(/#\/?/, '')
	if (filters[visibility]) {
     app.visibility = visibility
	}else {
		window.location.hash = ''
		app.visibility = 'all'
	}
}
window.addEventListener('hashchange', onHashChange)
onHashChange()