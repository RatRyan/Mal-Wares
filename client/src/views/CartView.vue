<template>
  <div>
    <Navbar></Navbar>
    <h1>Your Cart</h1>
    <div v-if="userStore.cartLength === 0">Your cart is empty.</div>
    <div v-else>
      <div
        v-for="(item, index) in userStore.cart"
        :key="item.id"
        class="cart-item"
      >
        <h3>{{ item.name }}</h3>
        <p>Price: ${{ item.price }}</p>
        <button @click="userStore.removeItem(index)">remove from cart</button>
      </div>
      <p>Total price: ${{ userStore.totalCartPrice }}</p>
      <button @click="userStore.checkout">Checkout</button>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
</script>

<style>
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
