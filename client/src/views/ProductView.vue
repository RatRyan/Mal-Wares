<template>
  <Navbar></Navbar>

  <div class="container">
        <h1></h1>
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
  </div>
</template>
  
<script setup>
import Navbar from '../components/Navbar.vue';
import Product from '../components/Product.vue';
import { useProductsStore } from '../stores/ProductsStore';
import axios from 'axios';
import { onMounted } from 'vue';

const productsStore = useProductsStore();
let currentProduct;

onMounted(async () => {
  let products = productsStore.products
  // get last part of url
  let url = window.location.href;
  let id = url.substring(url.lastIndexOf('/') + 1);
  currentProduct = products[parseInt(id)]
});


const addToCart = async () => {
  const res = await axios.post(
    'http://localhost:3000/cart',
    {email: user.email, productID: product.id}
  );
  if(res.status === 200){
    user.cartLength++;
  }
};
</script>
  
  