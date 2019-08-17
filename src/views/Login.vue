<template>
  <div class="login-form">
    <label for="email">
      Email:
      <input type="text" name="email" />
    </label>
    <br />
    <label for="password">
      Password:
      <input type="password" name="email" />
    </label>
  </div>
</template>

<script>

export default {
  name: 'LoginForm'
}

</script>

<style scoped>
.login-form {
  padding: 45px;
}
</style>