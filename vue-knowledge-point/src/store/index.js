//使用store来维护数据，因为app.vue和Todos.vue无法通过router共享数据todos,所以我们把部分数据抽离到store统一维护


const STORAGE_FILTER_KEY = 'VUE_FILTER'
const STORAGE_TODOS_KEY = 'VUE_TODOS'
const MODEL = {
  FILTER: localStorage.getItem(STORAGE_FILTER_KEY) || 'All',
  TODOS: JSON.parse(localStorage.getItem(STORAGE_TODOS_KEY)) || []
}

export default {
  //filter和todos都使用localStorage来存储数据
  //filter的get/set
  filter: {
    get: () => MODEL.FILTER,
    save: path => localStorage.setItem(STORAGE_FILTER_KEY, path)
  },
  //todos的get/set
  todos: {
    fetch: () => MODEL.TODOS,
    save: () => {
      localStorage.setItem(STORAGE_TODOS_KEY, JSON.stringify(MODEL.TODOS))
    }
  }
}