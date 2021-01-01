import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import BookApp from '../views/BookApp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bookapp',
    name: 'Book App',
    component: BookApp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
