import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');