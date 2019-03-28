import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'
import Man from './Man.vue'

export const eventEmitter = new Vue()

Vue.component('app-car', Car)
Vue.component('app-man', Man)



new Vue({
  el: '#app',
  render: h => h(App)
})

