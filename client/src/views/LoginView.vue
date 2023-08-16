<template>
  <div
    class="d-flex flex-column min-vh-100 justify-content-center align-items-center"
  >
    <div class="card d-flex flex-column justify-content-center">
      <h1>Login</h1>
      <form class="d-flex flex-column mt-3">
        <label for="email">Email Address</label>
        <input
          class="form-control"
          type="email"
          id="email"
          placeholder="email"
          required
        />
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          id="password"
          placeholder="password"
          required
        />
        <button class="btn btn-primary mt-3 mb-3" type="button">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 2rem;
}
</style>
