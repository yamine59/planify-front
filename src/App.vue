<template>
  <div class="flex">
    <navbar v-if="!isHome" />
    <div class="grow">
      <router-view />
    </div>
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