import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import About from "./components/About.vue";
import Contacts from "./components/Contacts.vue";
import Catalog from "./components/Catalog.vue";
import Categories from "./components/Categories.vue";
import CategoryPage from "./components/CategoryPage.vue";
import Search from "./components/Search.vue";
import Basket from "./components/Basket.vue";
import ProductPage from "./components/ProductPage.vue";
import Offer from "./components/Offer.vue";
import Order from "./components/Order.vue";
import Profile from "./components/Profile.vue";
import Login from "./components/Login.vue";
import Registration from "./components/Registration.vue";
import NewCategory from "./components/NewCategory.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories,
    },
    {
        path: '/category/:id',
        name: 'category',
        component: CategoryPage,
        props: true,
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
    },
    {
        path: '/basket',
        name: 'basket',
        component: Basket,
    },
    {
        path: '/offer',
        name: 'offer',
        component: Offer,
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration,
    },
    {
        path: '/new-category',
        name: 'new-category',
        component: NewCategory,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductPage,
        props: true,
    },
];

// Создаем экземпляр маршрутизатора Vue Router
const router = createRouter({
    // Указываем конфигурацию маршрутизатора
    history: createWebHistory(), // Используем HTML5 History API для навигации без хэш-фрагментов
    routes, // Подключаем массив routes, который содержит конфигурацию маршрутов
});

// это хук (колбэк функция), предоставляемая Vue Router для выполнения действий после каждого успешного завершения перехода между маршрутами
router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
