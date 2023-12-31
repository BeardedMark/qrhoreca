<template>
    <div class="catalog">
        <div class="catalog__container">
            <div class="catalog__top">
                <h1 class="catalog__title catalog-title">
                    <span class="catalog-title__text">
                        Меню
                    </span>
                </h1>
                <p class="catalog__subtitle catalog-subtitle">
                    <span class="catalog-subtitle__text">
                        Убедитесь что в вашей корзине находится все что нужно. Можете убрать лишнее, изменить колличество
                    </span>
                </p>
            </div>
            <div class="catalog__list catalog-list">
                <div
                    v-for="(item, itemIndex) in catalogList"
                    :key="`catalog-list-item-${itemIndex}`"
                    class="catalog-list__item catalog-list-item"
                    :class="{'catalog-list-item--is-open': item.isOpen}"
                >
                    <div
                        @click="toggleDropDown(itemIndex)"
                        class="catalog-list-item__top catalog-list-item-top"
                        :class="{'catalog-list-item-top--is-open': item.isOpen}"
                    >
                        <div class="catalog-list-item-top__arrow"></div>
                        <div class="catalog-list-item-top__category">
                            {{ item.category }}
                        </div>
                        <div class="catalog-list-item-top__count">
                            всего {{ item.count }}
                        </div>
                    </div>
                    <div class="catalog-list-item__cards">
                        <Product
                            v-for="(card, cardIndex) in item.list"
                            :key="`catalog-list-item-${itemIndex}-${cardIndex}`"
                            :product="card"
                            class="catalog-list-item__card"
                        />
                    </div>
                </div>
            </div>
            <Button
                @click="redirectToBasket"
                class="catalog__btn"
            >
                Перейти в корзину
            </Button>
            <Separator class="catalog__separator" />
            <Descriptions
                :descriptions="indicators"
                mode="indicators"
                class="catalog__indicators"
            />
        </div>
    </div>
</template>

<script>
    import {
        defineComponent,
        ref,
    } from "vue";
    import {categoriesListData, products} from "../constants/categoriesListData";
    import {useRouter} from "vue-router";
    import Product from "./Product.vue";
    import Button from "./Button.vue";
    import Descriptions from "./Descriptions.vue";
    import Separator from "./Separator.vue";
    import IconButtonInnerLink from "./IconButtonInnerLink";
    import {indicators} from "./../constants/indicators";

    export default defineComponent({
        name: "Catalog",
        components: {
            IconButtonInnerLink,
            Product,
            Button,
            Descriptions,
            Separator,
        },
        setup() {
            /** Vars */
            const catalogList = ref(categoriesListData.map((item) => {
                const productsList = products.filter((product) => product.categoryId === item.id);

                return {
                    ...item,
                    count: productsList.length,
                    list: productsList,
                    isOpen: false,
                };
            }));

            /** Features */
            const router = useRouter();

            /** Methods */
            const toggleDropDown = (index) => {
               catalogList.value[index].isOpen = !catalogList.value[index].isOpen;
            };

            const redirectToBasket = () => {
                router.push('/basket');
            };

            return {
                catalogList,
                toggleDropDown,
                redirectToBasket,
                indicators,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/catalog/component";
</style>
