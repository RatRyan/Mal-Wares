<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ productName }}</h5>
      <p class="card-text">{{ productDescription }}</p>
      <p class="card-text">${{ productPrice }}</p>
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  productName: String,
  productDescription: String,
  productPrice: Number,
});

const addToCart = () => {
  // Implement your cart logic here
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
