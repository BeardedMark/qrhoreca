<template>
    <div class="header">
        <div class="header__links">
            <IconButtonInnerLink
                v-for="(headerLink, headerLinkIndex) in headerLinks"
                :key="`header-link-${headerLinkIndex}`"
                :to="headerLink.link"
                :iconLink="getIconInnerLink(headerLink)"
                :mod="getInnerLinkMod(headerLink)"
                :alt="headerLink.link"
                class="header__link"
                :class="`header__link--${headerLinkIndex}`"
            />
        </div>
        <div class="header__basket header-basket">
            <div class="header-basket__amount header-basket-amount">
                <p class="header-basket-amount__text">
                    Итого:
                </p>
                <p class="header-basket-amount__sum">
                    1 020р
                </p>
            </div>
            <div class="header-basket__link header-basket-link">
                <IconButtonInnerLink
                    to="basket"
                    :iconLink="`/images/basket-light.png`"
                    alt="basket"
                    mod="accent"
                    class="header-basket-link__icon"
                />
                <p class="header-basket-link__num header-basket-link-num">
                    <span class="header-basket-link-num__text">
                        4
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent, ref, unref, watch} from "vue";
    import {useRoute} from 'vue-router';
    import IconButtonInnerLink from "./IconButtonInnerLink";

    export default defineComponent({
        name: "Header",
        components: {IconButtonInnerLink},
        setup() {
            /** Vars */
            const currentRoute = ref();

            const headerLinks = ref([
                {
                    link: 'menu',
                    pages: ['menu'],
                    defaultIcon: 'menu-dark',
                    activeIcon: 'menu-light',
                    isActive: false,
                },
                {
                    link: 'categories',
                    pages: ['categories', 'category'],
                    defaultIcon: 'categories-dark',
                    activeIcon: 'categories-light',
                    isActive: false,
                },
                {
                    link: 'catalog',
                    pages: ['catalog'],
                    defaultIcon: 'catalog-dark',
                    activeIcon: 'catalog-light',
                    isActive: false,
                },
                {
                    link: 'search',
                    pages: ['search'],
                    defaultIcon: 'search-dark',
                    activeIcon: 'search-light',
                    isActive: false,
                },
            ]);

            /** Features */
            const route = useRoute();

            /** Methods */
            const getIconInnerLink = (link) => `/images/${link.isActive ? link.activeIcon : link.defaultIcon}.png`;
            const getInnerLinkMod = (link) => link.isActive ? 'active' : 'light';

            /** Watchers */
            watch(currentRoute, (newValue) => {
                unref(headerLinks).map((item) => item.pages.find((page) => page === newValue) ? item.isActive = true : item.isActive = false)
            });

            watch(route, (newValue) => {
                if(newValue.name) {
                    currentRoute.value = newValue.name;
                }
            }, {immediate: true});

            return {
                headerLinks,
                getIconInnerLink,
                getInnerLinkMod,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/header/component";
</style>
