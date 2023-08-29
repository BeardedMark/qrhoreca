import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";
import About from "./components/Home.vue";
import Contacts from "./components/Home.vue";
import Catalog from "./components/Catalog.vue";


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/contacts',
        component: Contacts,
    },
    {
        path: '/catalog',
        component: Catalog,
    },
];

// Создаем экземпляр маршрутизатора Vue Router
const router = createRouter({
    // Указываем конфигурацию маршрутизатора
    history: createWebHistory(), // Используем HTML5 History API для навигации без хэш-фрагментов
    routes, // Подключаем массив routes, который содержит конфигурацию маршрутов
});


export default router;