<template>
  <div class="card">
    <img v-bind:src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">${{ price }}</p>
    </div>
    <button class="btn btn-primary">View Product</button>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  name: String,
  price: Number,
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
