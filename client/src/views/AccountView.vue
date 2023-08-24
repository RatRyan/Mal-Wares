<template>
  <Navbar></Navbar>
  <h2>User info:</h2>
  <p>First Name: {{ userStore.firstName }}</p>
  <p>Last Name: {{ userStore.lastName }}</p>
  <p>Email: {{ userStore.email }}</p>
  <button v-if="userStore.isAdmin">Admin Panel</button>
  <button @click="userStore.logout()">Logout</button>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore()
</script>