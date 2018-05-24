// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { faHome } from '@fortawesome/fontawesome-free-solid'


Vue.config.productionTip = false

fontawesome.library.add(brands)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components:  { App },
  template: '<App/>'
})
