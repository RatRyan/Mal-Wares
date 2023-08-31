<template>
  <div class="card w-100 text-center bg-dark text-light">
    <img v-bind:src="image" class="card-img-top" alt="Product Image" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">${{ price }}</p>
      <RouterLink :to="`/products/${id}`">
        <button class="btn btn-primary btn-view-product">View Product</button>
      </RouterLink>
    </div>
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

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.btn-view-product {
  background-color: #343a40;
  color: #f8f9fa;
  border-color: #343a40;
}

.btn-view-product:hover {
  background-color: #212529;
  border-color: #212529;
}
</style>
