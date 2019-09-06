<template>
  <div id="app">
    <nav>
      <router-link to="/login">
        Login
      </router-link> | 
      <router-link to="/about">
        About
      </router-link> | 
      <router-link to="/locations">
        Locations
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 768px;
  min-width: 480px;
  margin: 45px auto;
}
nav {
  text-align: center;
}

nav a:visited, nav a {
  color: #333;
}
</style>
