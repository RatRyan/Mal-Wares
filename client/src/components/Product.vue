<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ productName }}</h5>
      <p class="card-text">{{ productDescription }}</p>
      <p class="card-text">${{ productPrice }}</p>
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
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
