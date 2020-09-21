import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import sweetAlert2 from 'vue-sweetalert2';
import vueResource from 'vue-resource';
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'

import home from './layout/home.vue';
import login from './layout/login.vue';


Vue.use(Router);
Vue.use(sweetAlert2);
Vue.use(vueResource);
Vue.use(VModal)



const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'login',
    path: '/login',
    component: login
  }
];

const router = new Router({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
