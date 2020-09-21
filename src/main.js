import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import sweetAlert2 from 'vue-sweetalert2';
import vueResource from 'vue-resource';

import home from './layout/home.vue';
import login from './layout/login.vue';


Vue.use(Router);
Vue.use(sweetAlert2);
Vue.use(vueResource);



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
  data() {
    return {
      myStyle: {
        backgroundColor: "#000"
      }
    };
  },
  render: h => h(App),
});
