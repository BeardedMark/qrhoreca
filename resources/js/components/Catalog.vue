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
            <AdminPanel
                v-if="isАuthorizedUser"
                class="catalog__admin catalog-admin"
            >
                <AdminButton
                    v-for="(btn, btnIndex) in adminButtons"
                    :key="`catalog-admin__btn-${btnIndex}`"
                    @click="onAdminBtnClick(btnIndex)"
                    :btnSettings="btn"
                    class="catalog-admin__btn"
                />
            </AdminPanel>
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
    import {indicators} from "./../constants/indicators";
    import {isАuthorizedUser} from "../constants/storeGetters.js";
    import IconButtonInnerLink from "./IconButtonInnerLink.vue";
    import AdminButton from "./AdminButton.vue";
    import AdminPanel from "./AdminPanel.vue";
    import Product from "./Product.vue";
    import Button from "./Button.vue";
    import Descriptions from "./Descriptions.vue";
    import Separator from "./Separator.vue";

    export default defineComponent({
        name: "Catalog",
        components: {
            IconButtonInnerLink,
            Product,
            Button,
            Descriptions,
            Separator,
            AdminButton,
            AdminPanel,
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
            const addNewProduct = () => {
                alert('Новое предложение');
                router.push('/new-product');
            };
            const addNewCategory = () => {
                alert('Новая категория');
                router.push('/new-category');
            };
            const onAdminBtnClick = (idx) => {
                adminButtons[idx].handler();
            };

            const adminButtons = [
                {
                    text: 'Новое предложение',
                    icon: 'add-offer.png',
                    classMod: '',
                    handler: addNewProduct,
                },
                {
                    text: 'Новая категория',
                    icon: 'add-category.png',
                    classMod: '',
                    handler: addNewCategory,
                },
            ];

            return {
                catalogList,
                toggleDropDown,
                redirectToBasket,
                indicators,
                isАuthorizedUser,
                adminButtons,
                onAdminBtnClick,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/catalog/component";
</style>
