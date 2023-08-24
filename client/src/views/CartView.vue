<template>
    <div>
      <h1>Your Cart</h1>
      <div v-if="cartItems.length === 0">Your cart is empty.</div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price }}</p>
        </div>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [], // Your cart items will go here
      };
    },
    methods: {
      checkout() {
        // Implement your checkout logic here
      },
    },
  };
  </script>
  
  <style>
  .cart-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  