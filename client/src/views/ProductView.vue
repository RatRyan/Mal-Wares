<template>
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
            <Product
              :productName="product.name"
              :productDescription="product.description"
              :productPrice="product.price"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue';
  import Product from '../components/Product.vue';
  
  export default {
    components: {
      Navbar,
      Product,
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            price: 19.99,
            imageUrl: 'product1.jpg',
          },
          // Add more product objects here
        ],
      };
    },
  };
  </script>
  
  