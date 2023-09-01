<template>
  <div class="dark-mode">
    <Navbar></Navbar>
    <div
      class="dark-mode d-flex justify-content-center align-items-center vh-100"
    >
      <div class="container">
        <h2 class="text-center text-light mt-5 mb-4">Admin Panel</h2>
        <div class="card bg-dark text-light m-3">
          <div class="card-header bg-secondary text-light">Admin Controls</div>
          <div class="card-body">
            <h2>Make Admin</h2>
            <form @submit.prevent="promote" class="d-flex flex-column mb-3">
              <label for="email" class="form-label">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                class="mb-3 form-control"
                v-model="email"
              />
              <input
                type="submit"
                value="submit"
                class="btn btn-primary submit-button"
              />
            </form>
            <h2>Add Product</h2>
            <form @submit.prevent="addProduct" class="d-flex flex-column">
              <div class="d-flex flex-column mb-3">
                <label for="product-name">Product Name</label>
                <input
                  type="text"
                  name="product-name"
                  id="name"
                  class="form-control"
                  v-model="name"
                />
              </div>
              <div class="d-flex flex-column mb-3">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  cols="50"
                  class="form-control"
                  v-model="description"
                ></textarea>
              </div>
              <div class="d-flex flex-column mb-3">
                <label for="image-link">Image Link</label>
                <input
                  type="text"
                  name="image-link"
                  id="image"
                  class="form-control"
                  v-model="image"
                />
              </div>
              <div class="d-flex flex-column mb-3">
                <label for="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="form-control"
                  v-model="price"
                />
              </div>
              <input
                type="submit"
                value="submit"
                class="btn btn-primary submit-button"
              />
            </form>
          </div>
        </div>
        <div class="mb-5">
          <RouterLink to="/account">
            <button class="btn btn-warning ms-3">Back to account</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const email = ref('');
const name = ref('');
const description = ref('');
const image = ref('');
const price = ref('');

const promote = () => {
  axios.patch('http://localhost:3000/user', {
    email: email.value,
    isAdmin: true,
  });
  email.value = '';
};

const addProduct = () => {
  axios.post('http://localhost:3000/product', {
    name: name.value,
    description: description.value,
    image: image.value,
    price: parseFloat(price.value),
  });
  name.value = '';
  description.value = '';
  image.value = '';
  price.value = 0;
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
.submit-button {
  max-width: 5rem;
}
</style>
