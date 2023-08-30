import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/UserStore';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/account',
      component: () => import('../views/AccountView.vue'),
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore();
        if (!userStore.loggedIn) {
          next({ path: '/login' });
        } else {
          next();
        }
      },
    },
    {
      path: '/admin',
      component: () => import('../views/AdminView.vue'),
      beforeEnter: (to, from, next) => {
        const userStore = useUserStore();
        if (!userStore.loggedIn) {
          next({ path: '/login' });
        } else if (!userStore.isAdmin) {
          next({ path: '/account' });
        } else {
          next();
        }
      },
    },
    {
      path: '/products/:id',
      component: () => import('../views/productView.vue'),
    },
    {
      path: '/cart',
      component: () => import('../views/CartView.vue'),
    },
  ],
});

export default router;
