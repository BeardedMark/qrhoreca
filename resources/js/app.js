import './bootstrap.js';
import { createApp } from 'vue';
import router from './router.js';
import AppComponent from './components/AppComponent.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';

// Создаем экземпляр Vue приложения с помощью createApp
const app = createApp({});

app.use(CKEditor);

// Регистрируем маршруты Vue Router в приложении
app.use(router);

// Регистрируем компонент 'app-component' для использования внутри приложения
app.component('app-component', AppComponent);

// Монтируем приложение на элемент с id 'app' в HTML-документе
app.mount('#app');
