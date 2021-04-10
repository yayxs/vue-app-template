import 'amfe-flexible';
import { createApp } from 'vue';
import { Button } from 'vant';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

app.use(Button).use(store).use(router).mount('#app');
