<template>
  <div class="app-container">
    <navbar />
    <div class="grow"><router-view /></div>
  </div>
</template>

<script setup>
import navbar from './components/navBar.vue';





</script>

<style lang="scss" scoped>
@import "@/style/variablecouleur.scss";

.grow{
  
}
.app-container {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.test {
  background-color: $primary;
  font-family: var(--poppinsBolt);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
