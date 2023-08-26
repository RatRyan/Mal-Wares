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
      <div class="card m-3 w-50">
        <div class="card-header">Orders</div>
        <div style="overflow-y: auto; height: 20rem; position: sticky; top: 0%">
          <table class="table table-hover">
            <thead style="position: sticky; top: 0%">
              <tr>
                <th scope="col">Order #</th>
                <th scope="col">Date</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody v-for="order in userStore.orders">
              <Order
                :order-number="order.orderNumber"
                :order-date="order.orderDate"
                :order-total="order.orderTotal"
              ></Order>
            </tbody>
          </table>
        </div>
      </div>
      <button @click="userStore.logout()" class="btn btn-danger mb-5">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Order from '../components/Order.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
</script>

<style scoped></style>
