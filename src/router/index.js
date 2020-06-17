import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import exampleWrap from '../views/example/wrap.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Test" */ '../views/example/index.vue')
  },
  {
    path: '/example',
    component: exampleWrap,
    children: [
      {
        path: '',
        name: 'exampleList',
        component: () => import( /* webpackChunkName: 'exampleList' */ '../views/example/index.vue')
      },
      {
        path: 'circle',
        name: 'circle',
        component: () => import(/* webpackChunkName: 'Circle' */ '../views/example/circle.vue')
      },
      {
        path: 'toast',
        name: 'toast',
        component: () => import(/* webpackChunkName: 'toastDemo' */ '../views/example/toast.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
