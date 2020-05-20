import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Example from "../views/example/index";
import Circle from "../views/example/circle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Test" */ "../views/example/index.vue"),
    children: [{ path: "circle", name: "circle", component: Circle }]
  },
  {
    path: "/example",
    component: Example,
    children: [
      {
        path: "circle",
        name: "circle",
        component: () => {
          import(
            /* webpackChunkName: 'circle' */ "../views/example/circle.vue"
          );
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
