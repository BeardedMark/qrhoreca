<template>
    <div class="basket">
        <div class="basket__container">
            <div class="basket__top">
                <h1 class="basket__title basket-title">
                    <span class="basket-title__text">
                        Ваш заказ
                    </span>
                </h1>
                <p class="basket__subtitle basket-subtitle">
                    <span
                        v-if="hasProductsInOrder"
                        class="basket-subtitle__text"
                    >
                        Убедитесь что в вашем заказе находится все что нужно. Можете убрать лишнее, изменить колличество или добавить новое со страницы <router-link to="/catalog" class="basket-subtitle__link">каталога</router-link>
                    </span>
                    <span
                        v-else
                        class="basket-subtitle__text"
                    >
                        Карзина пуста. Для того, чтобы добавить товары, перейдите в каталог.
                    </span>
                </p>
            </div>
            <div
                v-if="hasProductsInOrder"
                class="basket__cards"
            >
                <Product
                    v-for="product in productsList"
                    :key="`basket-card-${product.id}`"
                    :product="product"
                    class="basket__card"
                />
            </div>
            <Button
                @click="redirectToOtherPage"
                class="basket__btn"
            >
                {{ basketBtnText }}
            </Button>
            <Separator class="basket__separator" />
            <Info
                title="Справка"
                text="После оформления заказа ваша корзина очиститься для того что бы вы могли заказать добавку"
                class="basket__info"
            />
        </div>
    </div>
</template>
<script>
    import {computed, defineComponent, unref} from "vue";
    import {getOrder} from "../constants/storeGetters";
    import {products} from "../constants/categoriesListData";
    import Product from "./Product";
    import Button from "./Button.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "Basket",
        components: {
            Product,
            Button,
            Separator,
            Info,
        },
        setup() {
            /** Features */
            const router = useRouter();

            /** Computed */
            const hasProductsInOrder = computed(() => unref(getOrder).length > 0);
            const basketBtnText = computed(() => unref(hasProductsInOrder) ? 'Оформить заказ' : 'Каталог');
            const productsList = computed(() => products.filter((product) => unref(getOrder).some((item) => item.id === product.id)));

            /** Methods */
            const redirectToOtherPage = () => {
                const page = unref(hasProductsInOrder) ? '/offer' : '/catalog';
                router.push(page);
            };

            return {
                productsList,
                redirectToOtherPage,
                hasProductsInOrder,
                basketBtnText,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/basket/component";
</style>
