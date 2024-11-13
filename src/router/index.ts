import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useStore } from 'vuex';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  },
  {
    path: '/voyage',
    name: 'Voyage',
    component: () => import('../views/MyTravel.vue'),
    meta: { requiresAuth: true },
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
    component: () => import('../views/createTravel.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/creation-activite',
    name: 'activite-create',
    component: () => import('../views/createActivity.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/modifierTravel/:id',
    name: 'modifierTravel',
    component: () => import('../views/updateTravel.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/modifieractivit/:id',
    name: 'modifieractivite',
    component: () => import('../views/updateActivity.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/votrePlanify',
    name: 'votrePlanify',
    component: () => import('../views/recap.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
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

router.beforeEach((to, from, next) => {
  const store = useStore();
  const isLoggedIn = store.getters.isLoggedIn;
  const isAdmin = store.getters.isAdmin;

  if (['/', '/register', '/'].includes(to.path)) {
    next(); 
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/');
    } else if (to.matched.some(record => record.meta.requiresAdmin) && !isAdmin) {
      next('/'); 
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
