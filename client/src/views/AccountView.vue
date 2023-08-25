<template>
  <Navbar></Navbar>
  <div class="d-flex vh-100">
    <div class="d-flex flex-column w-100 align-items-center">
      <h2 class="pt-5">Welcome, {{ userStore.firstName }}</h2>
      <div class="card m-3 w-50">
        <div class="card-header">User Details</div>
        <div class="card-body">
          <p><b>First Name</b><br />{{ userStore.firstName }}</p>
          <p><b>Last Name</b><br />{{ userStore.lastName }}</p>
          <p><b>Email</b><br />{{ userStore.email }}</p>
        </div>
      </div>
      <div class="card m-3 w-50 flex-grow-1">
        <div class="card-header">Orders</div>
        <div class="card-body"></div>
      </div>
      <button @click="userStore.logout()" class="btn btn-danger mb-5">Logout</button>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
</script>

<style scoped></style>
