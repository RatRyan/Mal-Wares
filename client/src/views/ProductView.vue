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

const productsStore = useProductsStore()
const products = computed(() => productsStore.products)
console.log(products); // Check if the `products` array is populated
const product = {
  name: "",
  description: "",
  price: 0,
}

const addToCart = async () => {
  if (currentProduct) {
    const res = await axios.post(
      'http://localhost:3000/cart',
      { email: user.email, productID: currentProduct.id }
    );
    if (res.status === 200) {
      user.cartLength++;
    }
  }
};
</script>