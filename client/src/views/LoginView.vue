<template>
  <Navbar></Navbar>
  <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="login-form container bg-white">
      <form @submit.prevent="
        user.login(email, password)
        " class="d-flex flex-column">
        <h2>Login</h2>
        <label>Email:</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-envelope" />
          </span>
          <input class="form-control border-start-0" type="email" id="email" name="email" v-model="email" />
        </div>
        <label>Password:</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-shield-lock"></i></span>
          <input class="form-control border-start-0" type="password" id="password" name="password" v-model="password" />
        </div>
        <button class="btn btn-dark mt-5">Login</button>
        <hr />
        <RouterLink to="/register">Create an account</RouterLink>
      </form>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';

let email = ref('');
let password = ref('');

const user = useUserStore();
</script>

<style scoped>
.login-form {
  max-width: 450px;
  padding: 40px;
  box-shadow: 0px 0px 20px 2px rgb(118, 118, 118);
}
</style>
