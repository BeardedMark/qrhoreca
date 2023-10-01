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
            <div
                v-if="orderSum"
                class="header-basket__amount header-basket-amount"
            >
                <p class="header-basket-amount__text">
                    Итого:
                </p>
                <p class="header-basket-amount__sum">
                    {{ orderSum }}
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
                        {{ orderQuantity }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import {computed, defineComponent, ref, unref, watch} from "vue";
    import {useRoute} from 'vue-router';
    import {siteStore} from "../constants/store";
    import {products} from "../constants/categoriesListData";
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

            /** Computed */
            const order = computed(() => siteStore.getOrder);
            const orderSum = computed(() => {
                if(unref(order).length) {
                    return unref(order).reduce((acc, item) => {
                        const sum = Number(products.find((product) => product.id === item.id).price.replace(/\s|р/gi, '')) * item.quantity;
                        acc += sum;
                        return acc;
                    }, 0);
                }
                return null;
            });
            const orderQuantity = computed(() => unref(order).length || 0);

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
                orderSum,
                orderQuantity,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/header/component";
</style>
