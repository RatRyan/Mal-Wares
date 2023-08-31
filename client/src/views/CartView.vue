<template>
  <div>
    <Navbar></Navbar>
    <div class="dark-mode d-flex flex-column justify-content-start align-items-center vh-100 py-4">
      <div class="container">
        <h1 class="text-center text-light mb-4">Your Cart</h1>
        <div v-if="userStore.cartLength === 0" class="text-light text-center">
          Your cart is empty.
        </div>
        <div v-else>
          <div
            v-for="(item, index) in userStore.cart"
            :key="item.id"
            class="cart-item bg-dark text-light p-3"
          >
            <h3>{{ item.name }}</h3>
            <p>Price: ${{ item.price }}</p>
            <button class="btn btn-danger" @click="userStore.removeItem(index)">Remove from Cart</button>
          </div>
          <p class="text-light text-center">Total price: ${{ userStore.totalCartPrice }}</p>
          <button class="btn btn-primary d-block mx-auto" @click="userStore.checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
</script>

<style scoped>
.dark-mode {
  background-color: #1a1a1a;
  min-height: 100vh;
}

.cart-item {
  border: 1px solid #343a40;
  border-radius: 5px;
  margin-bottom: 10px;
}

.cart-item h3 {
  color: #f8f9fa;
}

.cart-item p {
  color: #f8f9fa;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
