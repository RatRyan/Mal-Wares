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
            <tbody v-for="order in orders">
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

const orders = [
  {
    orderNumber: 1,
    orderDate: 'September 12, 2023',
    orderTotal: 45.75,
  },

  {
    orderNumber: 2,
    orderDate: 'June 25, 2022',
    orderTotal: 102.49,
  },

  {
    orderNumber: 3,
    orderDate: 'December 5, 2023',
    orderTotal: 23.0,
  },

  {
    orderNumber: 4,
    orderDate: 'August 7, 2022',
    orderTotal: 87.2,
  },

  {
    orderNumber: 5,
    orderDate: 'January 18, 2023',
    orderTotal: 150.3,
  },

  {
    orderNumber: 6,
    orderDate: 'October 30, 2022',
    orderTotal: 60.15,
  },

  {
    orderNumber: 7,
    orderDate: 'March 14, 2023',
    orderTotal: 35.5,
  },

  {
    orderNumber: 8,
    orderDate: 'November 9, 2022',
    orderTotal: 18.99,
  },

  {
    orderNumber: 9,
    orderDate: 'April 22, 2023',
    orderTotal: 200.0,
  },

  {
    orderNumber: 10,
    orderDate: 'July 3, 2022',
    orderTotal: 75.8,
  },
];

const userStore = useUserStore();
</script>

<style scoped></style>
