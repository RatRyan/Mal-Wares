<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <img :src="currentProduct.image" alt="product image" class="img-fluid" v-if="currentProduct">
      </div>
      <div class="col-sm-6">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
      </div>
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useProductsStore } from '../stores/ProductsStore';
import axios from 'axios';

const uri = window.location.href.split('/');
const productId = parseInt(uri[4])
console.log(productId)

const productsStore = useProductsStore()
const product = computed(() => productsStore.products[productId])

const addToCart = async () => {
  const res = await axios.post(
    'http://localhost:3000/cart',
    { email: user.email, productID: product.id }
  );
  if (res.status === 200) {
    user.cartLength++;
  }
};
</script>