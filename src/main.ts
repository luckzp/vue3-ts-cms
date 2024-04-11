import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
import "./assets/tailwind.css";

const pinia = createPinia()

createApp(App).use(Antd).use(router).use(pinia).mount('#app')
