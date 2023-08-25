<template>
  <Navbar></Navbar>
  <h1>Your Cart</h1>
  <div v-if="cartItems.length === 0">Your cart is empty.</div>
  <div v-else>
    <div v-for="(item, index ) in cartItems" :key="item.id" class="cart-item">
      <h3>{{ item.name }}</h3>
      <p>Price: ${{ item.price }}</p>
      <button @click="removeItem(item.id, index)">remove from cart</button>
    </div>
    <button @click="checkout">Checkout</button>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import axios from 'axios';
import { useUserStore } from '../stores/UserStore';
import Product from '../components/Product.vue';


const user = useUserStore();

const cartRes = await axios.post(
    'http://localhost:3000/cart/get',
    {email: user.email}
)

let cart = cartRes.data.cart;
let cartItems =ref([]);

for(let i = 0; i < cart.length; i++){
    let productRes = await axios.get(
        'http://localhost:3000/product/'+cart[i]
    )
    cartItems.push(productRes.data);

}

const removeItem = async (id, index)=>{
  const res = await axios.delete(
    'http://localhost:3000/cart',
    {user: user, id: id}
  )
  cartItems.splice(index, 1)
}

const checkout =()=>{
  const res = axios.post(
    'http://localhost:3000/order/cart',
    {user:user}
  )
  //go to checkout page or display thank you
}
</script>
  
<style>
.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
  