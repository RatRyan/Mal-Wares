<template>
  <Navbar></Navbar>
  <h2>User info:</h2>
  <div class="user-info">
    <p>First Name: {{ userStore.firstName }}</p>
    <p>Last Name: {{ userStore.lastName }}</p>
    <p>Email: {{ userStore.email }}</p>
  </div>
  <div class="d-flex flex-column">
    <button v-if="userStore.isAdmin" class="btn btn-warning">Admin Panel</button>
    <button @click="userStore.logout()" class="btn btn-dark">Logout</button>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore()
</script>

<style scoped>
.btn {
  max-width: 9rem;
}
p {
  margin: 0;
}
.user-info {
  margin-bottom: 1rem;
}
</style>