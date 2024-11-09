import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/voyage',
    name: 'Voyage',
    component: () => import('../views/MyTravel.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/createTravel',
    name: 'createTravel',
    component: () => import('../views/createTravel.vue')
  },
  {
    path: '/creation-activite',
    name: 'activite-create',
    component: () => import('../views/createActivity.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 };
  }
});

export default router;
