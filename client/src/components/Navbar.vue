<template>
  <nav class="navbar sticky-top bg-dark">
    <div class="container-fluid mx-3 pb-2">
      <RouterLink class="mal-wares-title" to="/">Mal-Wares</RouterLink>
      <form class="d-flex" role="search">
        <div v-if="!user.loggedIn">
          <RouterLink to="/login">
            <h3 class="nav-icon">Login</h3>
          </RouterLink>
        </div>
        <div v-else class="d-flex align-items-center">
          <RouterLink to="/account">
            <h3 class="nav-icon">{{ user.firstName }}<i class="bi bi-person mx-3"></i></h3>
          </RouterLink>
          <RouterLink to="/cart">
            <h3 class="nav-icon"><i class="bi bi-cart3 mx-3"></i></h3>
          </RouterLink>
        </div>
      </form>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';

const user = useUserStore();
</script>

<style scoped>
a {
  text-decoration: none;
}

.mal-wares-title {
  color: white;
  font-size: 1.5rem;
}

.nav-icon {
  color: white;
  margin: 0;
  text-decoration: none;
}
</style>
