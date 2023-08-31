<template>
  <Navbar></Navbar>
  <div class="d-flex vh-100 justify-content-center align-items-center">
    <div class="container d-flex justify-content-center">
      <div class="row product-view">
        <div class="col-sm-6">
          <img :src="product.image" alt="product image" class="img-fluid" />
        </div>
        <div class="col-sm-6">
          <h1>{{ product.name }}</h1>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
        </div>
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import router from '../router';
import { useUserStore } from '../stores/UserStore';
import { useProductsStore } from '../stores/ProductsStore';

const uri = window.location.href.split('/');
const productID = parseInt(uri[4]);

const productsStore = useProductsStore();
const userStore = useUserStore();
const product = productsStore.products[productID];

const addToCart = async () => {
  if (!userStore.loggedIn) {
    router.push('/login');
    return;
  }
  userStore.addToCart(product);
};
</script>

<style scoped>
.product-view {
  max-width: 40rem;
}
</style>