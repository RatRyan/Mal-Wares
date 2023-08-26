<template>
  <Navbar></Navbar>
  <div class="d-flex flex-column align-items-center">
    <h1 class="my-5">Product List</h1>
    <div class="container-fluid d-flex justify-content-center">
      <div class="row mx-5 mt-3">
        <div v-for="product in products" :key="product.id" class="col-sm-4 mb-4">
          <Product
            :image="product.Image"
            :name="product.Name"
            :price="product.Price"
          >
          </Product>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useProductsStore } from '../stores/ProductsStore';
import Navbar from '../components/Navbar.vue';
import Product from '../components/Product.vue';

const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.loadProducts();
});

const products = computed(() => productsStore.products)
</script>

<style scoped>
</style>
