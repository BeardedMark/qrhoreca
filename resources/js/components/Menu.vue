<template>
    <div class="menu">
        <div class="menu__top">
            <h1 class="menu__title menu-title">
                <span class="menu-title__text">
                    Оглавление
                </span>
            </h1>
            <p class="menu__subtitle menu-subtitle">
                <span class="menu-subtitle__text">
                    Убедитесь что в вашей корзине находится все что нужно. Можете убрать лишнее, изменить колличество
                </span>
            </p>
        </div>
        <div
            v-for="(menuLinks, menuLinksIndex) in menuLinksLists"
            :key="`menu-links-${menuLinksIndex}`"
            class="menu__links menu-links"
        >
            <router-link
                v-for="(menuLink, menuLinkIndex) in menuLinks"
                :key="`menu-links-item-${menuLinkIndex}`"
                :to="menuLink.link"
                class="menu-links__item menu-links-item"
            >
                <picture class="menu-links-item__icon menu-links-item-icon">
                    <img
                        :src="`images/${menuLink.icon}.png`"
                        alt="icon"
                        class="menu-links-item-icon__img"
                    >
                </picture>
                <p class="menu-links-item__page menu-links-item-page">
                    <span class="menu-links-item-page__text">
                        {{ menuLink.page }}
                    </span>
                </p>
            </router-link>
        </div>
        <Separator class="menu__separator" />
        <Info class="menu__info" />
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import Separator from "./Separator";
    import Info from "./Info";

    export default defineComponent({
        name: "Menu",
        components: {
            Info,
            Separator,
        },
        setup() {
            const menuLinksLists = [
                [
                    {
                        page: 'Категории',
                        link: '/categories',
                        icon: 'categories-dark',
                    },
                    {
                        page: 'Каталог',
                        link: '/catalog',
                        icon: 'catalog-dark',
                    },
                    {
                        page: 'Поиск',
                        link: '/search',
                        icon: 'search-dark',
                    },
                    {
                        page: 'Ваш заказ',
                        link: '/basket',
                        icon: 'basket-dark',
                    },
                ],
                [
                    {
                        page: 'Главная',
                        link: '/',
                        icon: 'home-dark',
                    },
                    {
                        page: 'О нас',
                        link: '/about',
                        icon: 'about-dark',
                    },
                    {
                        page: 'Контакты',
                        link: '/contacts',
                        icon: 'contacts-dark',
                    },
                ],
            ];

          return {
              menuLinksLists,
          };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/menu/component";
</style>
