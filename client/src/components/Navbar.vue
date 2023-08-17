<template>
  <nav class="navbar sticky-top bg-body-tertiary px-5">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Mal-Wares</RouterLink>
      <RouterLink tag="button" to="/login">
        Login
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
