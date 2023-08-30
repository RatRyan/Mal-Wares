<template>
  <Navbar></Navbar>
  <div class="d-flex flex-column align-items-center">
    <h1 class="my-5">Product List</h1>
    <div class="store-wrapper">
      <div class="container-fluid d-flex justify-content-center">
        <div class="row mx-5 mt-3">
          <div v-for="(product, index) in productsStore.products" :key="index" class="col-sm-4 mb-4">
            <Product
              :id="index"
              :image="product.image"
              :name="product.name"
              :price="product.price"
            >
            </Product>
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
.store-wrapper {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
