import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Check from './components/Checklist.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Products
}, {
  path: '/cart',
  component: Cart
},{
  path:'/checklist',
  component: Check
}]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
