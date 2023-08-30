<template>
  <Navbar></Navbar>
  <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="register-form container bg-white">
      <form @submit.prevent="
        user.registerAccount(firstName, lastName, email, password)
        " class="d-flex flex-column">
        <h2>Register</h2>
        <div class="d-flex">
          <div class="name-field">
            <label>First Name:</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="bi bi-person" />
              </span>
              <br />
              <input class="form-control border-start-0" type="text" id="firstName" name="firstName"
                v-model="firstName" />
            </div>
          </div>
          <div class="name-field mr-1">
            <label>Last Name:</label>
            <input class="form-control border-start-0" type="text" id="lastName" name="lastName" v-model="lastName" />
          </div>
        </div>
        <label for="email">Email:</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-envelope" />
          </span>
          <input class="form-control border-start-0" type="email" id="email" v-model="email" />
        </div>
        <label>Password:</label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-shield-lock" />
          </span>
          <input class="form-control border-start-0" type="password" id="password" v-model="password" />
        </div>
        <button class="btn btn-dark mt-5" type="submit">
          Register
        </button>
      </form>
      <hr />
      <RouterLink to="/login">Already have an account? Login</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/UserStore';
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';

let firstName = ref('');
let lastName = ref('');
let email = ref('');
let password = ref('');

const user = useUserStore();
</script>

<style scoped>
.name-field {
  width: 50%;
}

.register-form {
  max-width: 450px;
  padding: 40px;
  box-shadow: 0px 0px 20px 2px rgb(118, 118, 118);
}

a {
  text-decoration: none;
}
</style>
