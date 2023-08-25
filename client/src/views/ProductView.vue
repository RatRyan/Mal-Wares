<template>
  <Navbar></Navbar>
  <div class="container">
        <Product :productName="product.name" :productDescription="product.description" :productPrice="product.price" />
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
  </div>
</template>
  
<script setup>
import Navbar from './Navbar.vue';
import Product from '../components/Product.vue';
import axios from 'axios';
import { useUserStore } from '../stores/UserStore';

const user = useUserStore();

const product = {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '19.99',
    imageUrl: 'product1.jpg',
  };
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
  
  