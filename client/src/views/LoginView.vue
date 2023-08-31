<template>
  <div class="dark-mode">
    <Navbar></Navbar>
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div class="login-form container bg-white">
        <form @submit.prevent="loginUser" class="d-flex flex-column">
          <h2 class="mb-4">Login</h2>
          <label class="form-label">Email:</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-envelope"></i>
            </span>
            <input class="form-control" type="email" id="email" name="email" v-model="email" />
          </div>
          <label class="form-label">Password:</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-shield-lock"></i>
            </span>
            <input class="form-control" type="password" id="password" name="password" v-model="password" />
          </div>
          <p class="error mt-2">{{ user.errorText }}</p>
          <button class="btn btn-primary mt-3">Login</button>
          <hr class="mt-4 mb-3" />
          <RouterLink to="/register" class="text-muted">Create an account</RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';
import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';

let email = ref('');
let password = ref('');

const user = useUserStore();

onMounted(() => {
  user.errorText = '';
});

const loginUser = () => {
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
  color: #000000; /* Set the text color to a darker color */
}

.form-label {
  font-weight: bold;
}

.error {
  color: red;
  min-height: 1.5em;
}
</style>
