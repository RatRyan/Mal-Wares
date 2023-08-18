<template>
  <nav class="navbar sticky-top bg-dark">
    <div class="container-fluid mx-3">
      <a class="navbar-brand">Mal-Wares</a>
      <form class="d-flex" role="search">
        <RouterLink class="navbar-brand" to="/">Mal-Wares</RouterLink>
        <RouterLink tag="button" to="/login"
          ><h2><i class="bi bi-person mx-3"></i></h2
        ></RouterLink>
        <RouterLink tag="button" to="/login"
          ><h2><i class="bi bi-cart3 mx-3"></i></h2
        ></RouterLink>
        <h2 class="navbar-text"></h2>
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
.navbar-brand {
  color: white;
}
</style>
