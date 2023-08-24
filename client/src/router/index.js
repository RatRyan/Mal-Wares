import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/products/:productId",
      name: "product",
      component: () => import ("../views/ProductView.vue"), // Update the path as needed

    },
    // {
    //   path: "/products/:productId",
    //   name: "product",
    //   component: () => import("../views/HomeView.vue"),
    // },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartView.vue"),
    },
  ],
});
