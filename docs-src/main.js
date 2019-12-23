import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Components from '../'
import('../package.json').then(item => {
  import(`../dist/${item.name}.css`)
})

Vue.use(Components)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
