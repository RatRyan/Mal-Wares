<template>
  <Navbar></Navbar>
  <div v-for="product in products" class="container-sm">
    <Product
      :product-name="product.name"
      :product-description="product.description"
      :product-price="product.price"
    >
    </Product>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Product from '../components/Product.vue';
import { ref } from 'vue';

const products = ref([]);

</script>
