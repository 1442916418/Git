// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import cat from './components/cat'
import banana from './components/banana'

Vue.use(VRouter)

let router = new VRouter({
    mode: 'history',
    routes: [
      {
        path: '/cat',
        component: cat
      },
      {
        path: '/banana',
        component: banana
      }
    ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
