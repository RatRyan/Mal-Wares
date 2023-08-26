<template>
  <nav class="navbar sticky-top bg-dark">
    <div class="container-fluid mx-3 pb-2">
      <RouterLink class="mal-wares-title" to="/">Mal-Wares</RouterLink>
      <form class="d-flex">
        <div v-if="!userStore.loggedIn" class="d-flex">
          <RouterLink to="/register">
            <div class="nav-icon d-flex">
              <i class="bi bi-person"></i>
              <p class="ms-1 me-4">Register</p>
            </div>
          </RouterLink>
          <RouterLink to="/login">
            <div class="nav-icon d-flex">
              <i class="bi bi-box-arrow-right"></i>
              <p class="ms-1">Login</p>
            </div>
          </RouterLink>
        </div>
        <div v-else class="d-flex align-items-center">
          <RouterLink to="/account">
            <div class="nav-icon d-flex">
              <p>{{ userStore.firstName }}</p>
              <i class="bi bi-person ms-1 me-4"></i>
            </div>
          </RouterLink>
          <RouterLink to="/cart">
            <div class="nav-icon">
              <p>Cart ( {{ userStore.cart.length }} )</p>
            </div>
          </RouterLink>
        </div>
      </form>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
</script>

<style scoped>
a {
  text-decoration: none;
}
p {
  margin: 0;
}
.mal-wares-title {
  color: white;
  font-size: 1.5rem;
}

.nav-icon {
  font-size: 1.1rem;
  color: white;
  margin: 0;
  text-decoration: none;
}
</style>
