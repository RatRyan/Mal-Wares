import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/account",
      component: () => import("../views/AccountView.vue"),
    },
    {
      path: "/products/:productId",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/cart",
      component: () => import("../views/CartView.vue"),
    },
  ],
});
