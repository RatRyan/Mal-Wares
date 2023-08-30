<template>
  <div>
    <Navbar></Navbar>
    <h1>Your Cart</h1>
    <div v-if="user.cartLength === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Price: ${{ item.price }}</p>
        <button @click="removeItem(item.id, index)">remove from cart</button>
      </div>
      <p>Total price: ${{ totalPrice }}</p>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import axios from 'axios';
import { useUserStore } from '../stores/UserStore';
import { useProductsStore } from '../stores/ProductsStore';
import router from '../router';

const user = useUserStore();
const products = useProductsStore();

let cartItems = ref([]);
let totalPrice = 0;

const fetchData = async () => {
  let cart = user.cart;

  for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
    for (let productIndex =0; productIndex < products.products.length; productIndex++){
      if(products.products[productIndex].id === cart[cartIndex]){
        cartItems.value.push(products.products[productIndex]);
        totalPrice += products.products[productIndex].price;
        break;
      }
    }
  }

};

onMounted(() => {
  fetchData();
});

const removeItem = async (id, index) => {
  const res = await axios.patch(
    'http://localhost:3000/cart',
    { email: user.email, productID: id }
  );
  if(res.status ===200){
    totalPrice -= user.cart[index].price;
    user.cart.splice(index, 1);
    cartItems.value.splice(index, 1);
  }
};

const checkout = () => {
  const res = axios.post(
    'http://localhost:3000/order/cart',
    { email: user.email }
  );
  if(res.status === 200){
    user.cart = [];
    router.push('/')
  }
};
</script>

<style>
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>


