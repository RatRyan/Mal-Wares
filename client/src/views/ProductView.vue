<template>
<div>
  <Navbar></Navbar>
  <div class="dark-mode d-flex vh-100 justify-content-center align-items-center">
    <div class="container d-flex justify-content-center">
      <div class="row product-view bg-dark text-light p-4">
        <div class="col-sm-6">
          <img :src="product.image" alt="product image" class="img-fluid" />
        </div>
        <div class="col-sm-6">
          <h1 class="text-light">{{ product.name }}</h1>
          <p>{{ product.description }}</p>
          <p class="text-light">Price: ${{ product.price }}</p>
          <button class="btn btn-light" @click="addToCart">Add to Cart</button>
        </div>
      </div>
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
  padding: 2rem;
  border-radius: 10px;
}

.product-view img {
  max-width: 100%;
  border-radius: 10px;
}

.dark-mode {
  background-color: #1a1a1a;
  min-height: 100vh;
}

.dark-mode .btn-light {
  background-color: #343a40;
  color: #f8f9fa;
}

.dark-mode h1,
.dark-mode p {
  color: #f8f9fa;
}
</style>