<template>
  <div>
<!--     <router-link to="/home">Home</router-link>
    <router-link to="/helloWorld">HelloWorld</router-link>
    <router-link to="/icon">Icon</router-link>
    <router-link to="/todolist">Todolist</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/watcher">Watcher</router-link>
    <router-link to="/class">Class</router-link>
    <br>
    <router-link to="/style">Style</router-link>
    <router-link to="/conditional">Conditional</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/eventHandling">EventHandling</router-link>
    <router-link to="/formInputBindings">FormInputBindings</router-link> -->
    <!-- <router-view /> -->
    <!-- <keep-alive> -->
      <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab">{{ tab }}</button>
      <component :is="currentTabComponent" class="tab"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
// import Home from '../src/components/home'
// import Posts from '../src/components/posts'
// import Archive from '../src/components/archive'

export default { 
data () {
  return {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  }
},
computed: {
  currentTabComponent () {
    return this.currentTab
  }
},
created () {
  let filter = this.$route.params.filter
  if (!filter) {
    this.$router.replace({ path: '/' })
  }
 },
 // components: {
 //    Home, Posts, Archive
 // }
}
</script>


<style >
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
/*@import '../node_modules/todomvc-app-css/index.css'*/
</style>
