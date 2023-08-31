<template>
  <div class="dark-mode">
    <Navbar></Navbar>
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
      <div class="register-form container bg-white">
        <form @submit.prevent="registerUser" class="d-flex flex-column">
          <h2 class="mb-4">Register</h2>
          <div class="d-flex">
            <div class="name-field">
              <label class="form-label">First Name:</label>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-person"></i>
                </span>
                <input class="form-control" type="text" id="firstName" name="firstName" v-model="firstName" />
              </div>
            </div>
            <div class="name-field ml-1">
              <label class="form-label">Last Name:</label>
              <input class="form-control" type="text" id="lastName" name="lastName" v-model="lastName" />
            </div>
          </div>
          <label class="form-label">Email:</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-envelope"></i>
            </span>
            <input class="form-control" type="text" id="email" v-model="email" />
          </div>
          <label class="form-label">Password:</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-shield-lock"></i>
            </span>
            <input class="form-control" type="password" id="password" v-model="password" />
          </div>
          <p class="error mt-2">{{ user.errorText }}</p>
          <button class="btn btn-primary mt-3" type="submit">Register</button>
        </form>
        <hr class="mt-4 mb-3" />
        <RouterLink to="/login" class="text-muted">Already have an account? Login</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';
import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';

let firstName = ref('');
let lastName = ref('');
let email = ref('');
let password = ref('');

const user = useUserStore();

onMounted(() => {
  user.errorText = '';
});

const registerUser = () => {
  user.registerAccount(firstName.value, lastName.value, email.value, password.value);
};
</script>

<style scoped>
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

.name-field {
  width: 50%;
}

.register-form {
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
