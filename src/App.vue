<template>
  <div class="app-container">
    <navbar v-if="!isHome" />
    <div class="grow"><router-view /></div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import navbar from './components/navBar.vue';

// Accède à la route actuelle
const route = useRoute();
const store = useStore();

// Vérifie si la route actuelle est l'accueil
const isHome = computed(() => route.path === '/');

onMounted(() => {
  store.dispatch('checkAuth');
});
</script>

<style lang="scss" scoped>
@import "@/style/variablecouleur.scss";

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
