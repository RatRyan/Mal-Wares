
<template>
  <div class="dark-mode">
    <Navbar></Navbar>
    <div class="d-flex flex-column align-items-center">
      <h1 class="my-5 text-light">Product List</h1>
      <div class="store-wrapper">
        <div class="container-fluid d-flex justify-content-center">
          <div class="row mx-5 mt-3">
            <div
              v-for="(product, index) in productsStore.products"
              :key="index"
              class="col-sm-4 mb-4"
            >
              <Product :id="index" :image="product.image" :name="product.name" :price="product.price">
              </Product>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/ProductsStore';
import Navbar from '../components/Navbar.vue';
import Product from '../components/Product.vue';

const productsStore = useProductsStore();
</script>

<style scoped>
body {
  background-color: #121212;
  color:#121212;
}
.dark-mode {
  background-color: #121212; /* Dark background color */
  color: #ffffff; /* Light text color */
}

.store-wrapper {
  color: #121212;
  margin-left: 3rem;
  margin-right: 3rem;
}

/* Adjust styles for the Product component based on Bootstrap classes */
.product-card {
  border: 1px solid rgba(255, 255, 255, 0.125);
  background-color: #212529;
}

.product-card img {
  max-width: 100%;
}

.product-name {
  font-size: 1.25rem;
}

.product-price {
  font-size: 1.25rem;
  color: #17a2b8;
}
</style>
