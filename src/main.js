import { createApp } from 'vue';
import App from './App.vue';

// 调试日志
console.log('Vue 应用启动中...');

const app = createApp(App);

app.mount('#app');

// 挂载调试日志
console.log('Vue 应用挂载成功！');
