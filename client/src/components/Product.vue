<template>
  <div class="card w-100">
    <img v-bind:src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">${{ price }}</p>
    </div>
    <RouterLink :to="`/products/${id}`">
      <button class="btn btn-primary">View Product</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  id: Number,
  image: String,
  name: String,
  price: Number,
});
</script>

<style scoped></style>
