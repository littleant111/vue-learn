import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/welcome'
import HelloWorld from '../components/HelloWorld'
import Icon from '../components/Icon'
import Todos from '../components/Todos'
import Todolist from '../components/todolist'
import Computed from '../components/computed'
import Watcher from '../components/watcher'
import Class from '../components/class'
import Style from '../components/style'
import Conditional from '../components/conditional'
import List from '../components/list'
import EventHandling from '../components/EventHandling'
import FormInputBindings from '../components/formInputBindings'
import Home from '../components/home'
import Posts from '../components/posts'
import Archive from '../components/archive'
// import Header from '../components/Header'
// import Footer from '../components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home', name: 'Home', component: Home
    },
    {
      path: '/posts', name: 'Posts', component: Posts,
      children: [
        { path: 'icon', component: Icon }
      ]
    },
    {
      path: '/archive', name: 'Archive', component: Archive
    },
    {
      path: '/welcome', name: 'welcome', component: Welcome
    },
    {
      path: '/helloWorld', name: 'HelloWorld', component: HelloWorld
    },
    {
    	path: '/icon', name: 'Icon', component: Icon
    },
    {
      path: '/computed', name: 'Computed', component: Computed
    },
    {
      path: '/watcher', name: 'Watcher', component: Watcher
    },
    {
      path: '/class', name: 'Class', component: Class
    },
    {
      path: '/style', name: 'Style', component: Style
    },
    {
      path: '/conditional', name: 'Conditional', component: Conditional
    },
    {
      path: '/list', name: 'List', component: List
    },
    {
      path: '/eventHandling', name: 'EventHandling', component: EventHandling
    },
    {
      path: '/formInputBindings', name: 'FormInputBindings', component: FormInputBindings
    },
    {
      path: '/todolist', name: 'todolist', component: Todolist,
      children: [
        // {
        //   path: '/header', component: Header
        // },
        // {
        //   path: '/footer', component: Footer
        // },
        {
          path: '/:filter', component: Todos
        }
      ]
    }
  ]
})
