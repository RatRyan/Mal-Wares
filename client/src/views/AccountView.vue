<template>
  <div class="dark-mode">
    <Navbar></Navbar>
    <div class="dark-mode d-flex justify-content-center align-items-center vh-100">
      <div class="container">
        <h2 class="text-center text-light mt-5 mb-4">Welcome, {{ userStore.firstName }}</h2>
        <div class="card bg-dark text-light m-3">
          <div class="card-header bg-secondary text-light">User Details</div>
          <div class="card-body">
            <p><strong class="text-light">First Name:</strong><br>{{ userStore.firstName }}</p>
            <p><strong class="text-light">Last Name:</strong><br>{{ userStore.lastName }}</p>
            <p><strong class="text-light">Email:</strong><br>{{ userStore.email }}</p>
          </div>
        </div>
        <div class="card bg-dark text-light m-3">
          <div class="card-header bg-secondary text-light">Orders</div>
          <div class="card-body">
            <table class="table table-dark table-hover">
              <thead>
                <tr >
                  <th scope="col" class="text-light">Order #</th>
                  <th scope="col" class="text-light">Date</th>
                  <th scope="col" class="text-light">Total</th>
                </tr>
              </thead>
              <tbody>
                <Order
                  v-for="order in userStore.orders"
                  :key="order.id"
                  :number="order.id"
                  :date="order.date"
                  :total="order.cost"
                ></Order>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mb-5">
          <button @click="userStore.logout()" class="btn btn-danger ms-3">Logout</button>
          <RouterLink v-if="userStore.isAdmin" to="/admin">
            <button class="btn btn-warning ms-3">Admin Panel</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Order from '../components/Order.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
</script>

<style scoped>
/* Your custom styles */
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
}

.card-header {
  border-bottom: none;
  font-weight: bold;
}

.card-header.bg-secondary {
  background-color: #343a40;
}

.text-light {
  color: #ffffff;
}

/* Additional specificity to override Bootstrap styles */
.card .card-body p.text-light {
  color: #ffffff;
}

.table th.text-light {
  color: #ffffff;
}

.table-custom tbody tr {
  background-color: #343a40; /* Clear Bootstrap's alternating row colors */
}
.table-custom tbody tr {
  background-color: #121212;
}

.table-custom tbody tr:hover {
  background-color: #242424;
}

.btn {
  border-radius: 10px;
}

.btn-danger {
  background-color: #dc3545;
  border: none;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-warning {
  background-color: #ffc107;
  border: none;
}

.btn-warning:hover {
  background-color: #e0a800;
}
</style>