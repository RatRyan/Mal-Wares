<template>
  <nav class="navbar sticky-top bg-dark">
    <div class="container-fluid mx-3 pb-2">
      <RouterLink class="mal-wares-title" to="/">Mal-Wares</RouterLink>
      <form class="d-flex" role="search">
        <RouterLink tag="button" to="/login">
          <h3 class="account-icon">{{ user.firstName }}<i class="bi bi-person mx-3"></i></h3>
        </RouterLink>
        <RouterLink tag="button" to="/cart">
          <h3><i class="bi bi-cart3 mx-3"></i></h3>
        </RouterLink>
        <h3 v-if="user.loggedIn" @click="user.logout()">
          <i class="bi bi-box-arrow-right mx-3"></i>
        </h3>
        <RouterLink tag="button" to="/products">
          <h3>Products</h3>
        </RouterLink>
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
.mal-wares-title {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}
h3 {
  margin: 0;
  color: white;
}
.account-icon {
  color: white;
}
</style>
