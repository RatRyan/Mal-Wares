<template>
  <nav class="navbar sticky-top bg-dark px-5">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Mal-Wares</RouterLink>
      <RouterLink tag="button" to="/login"><h2><i class="bi bi-person"></i></h2></RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/UserStore";

const user = useUserStore()

</script>

<style scoped>
.navbar-brand {
  color: white;
}
</style>
