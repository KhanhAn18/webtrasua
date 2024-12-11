import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import Vuex Store

// Tạo ứng dụng và sử dụng Vuex & Router
createApp(App).use(router).use(store).mount('#app');
