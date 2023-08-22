<template>
  <div class="d-flex flex-column vh-100">
    <NavBar></NavBar>
    <div class="d-flex flex-grow-1 align-items-center">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
</style>