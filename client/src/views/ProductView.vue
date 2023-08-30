<template>
  <Navbar></Navbar>

  <div class="container">
    <!-- display product info -->
    <div class="row">
      <div class="col-sm-6">
        <img :src="currentProduct.image" alt="product image" class="img-fluid" v-if="currentProduct">
      </div>
      <div class="col-sm-6">
        <h1>{{ currentProduct.name }}</h1>
        <p>{{ currentProduct.description }}</p>
        <p>Price: ${{ currentProduct.price }}</p>
      </div>
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>
  
<script setup>
import Navbar from '../components/Navbar.vue';
import { useProductsStore } from '../stores/ProductsStore';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const productsStore = useProductsStore();
var currentProduct;

onMounted(async () => {
  console.log("Started");
  let products = productsStore.products;
  console.log(products);
  let url = window.location.href;
  let id = url.substring(url.lastIndexOf('/') + 1);
  currentProduct = products[parseInt(id)]; 
  console.log(currentProduct);
});

const addToCart = async () => {
  if (currentProduct.value) {
    const res = await axios.post(
      'http://localhost:3000/cart',
      { email: user.email, productID: currentProduct.value.id }
    );
    if (res.status === 200) {
      user.cartLength++;
    }
  }
};
</script>
