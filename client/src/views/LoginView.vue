<template>
  <div class="dark-mode">
    <Navbar></Navbar>
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div class="login-form container bg-dark">
        <form @submit.prevent="login" class="d-flex flex-column">
          <h2 class="mb-4 text-light">Login</h2>
          <label class="form-label text-light">Email:</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-envelope"></i>
            </span>
            <input class="form-control" type="text" v-model="email" />
          </div>
          <label class="form-label text-light mt-2">Password:</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-shield-lock"></i>
            </span>
            <input class="form-control" type="password" v-model="password" />
          </div>
          <p class="error mt-2 text-light">{{ user.errorText }}</p>
          <button class="btn btn-primary mt-3" type="submit">Login</button>
        </form>
        <hr class="mt-4 mb-3" />
        <RouterLink to="/register" class="text-light">Don't have an account? Register</RouterLink>
      </div>
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

const login = () => {
  user.login(email.value, password.value);
};
</script>

<style scoped>
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

.login-form {
  max-width: 450px;
  padding: 40px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.form-label {
  font-weight: bold;
}

.error {
  color: red;
  min-height: 1.5em;
}
</style>
