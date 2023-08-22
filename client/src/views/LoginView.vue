<template>
  <div class="login-form container bg-white">
    <form class="d-flex flex-column">
      <h2>Login</h2>
      <label>Email:</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-envelope" />
        </span>
        <input class="form-control border-start-0" type="email" id="email" name="email" />
      </div>
      <label>Password:</label>
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-shield-lock"></i></span>
        <input class="form-control border-start-0" type="password" id="password" name="password" />
      </div>
      <button class="btn btn-primary mt-5">Login</button>
      <hr />
      <RouterLink to="/register">Create an account</RouterLink>
    </form>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.login-form {
  max-width: 450px;
  padding: 40px;
  box-shadow: 0px 0px 20px 2px rgb(118, 118, 118);
}
</style>
