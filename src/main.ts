/* eslint-disable import/extensions */
import './style.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
// eslint-disable-next-line import/no-unresolved
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
