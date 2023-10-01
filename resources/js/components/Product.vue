<template>
    <div class="product">

        <router-link
            :to="getLink"
            class="product__image product-image"
        >
            <picture class="product-image__picture">
                <img
                    :src="`/images/${product.image}`"
                    alt="product photo"
                    class="product-image__img"
                />
            </picture>
        </router-link>
        <div class="product__content product-content">
            <button
                v-if="product.description.length"
                @click="redirectToProductPage"
                type="button"
                class="product-content__more"
            ></button>
            <div class="product-content__descr">
                <router-link
                    :to="getLink"
                    class="product-content__name"
                >
                    {{ product.name }}
                </router-link>
                <p class="product-content__weight">
                    {{ product.weight }}
                </p>
                <Indicators
                    :indicators="product.indicators"
                    class="product-content__indicators"
                />
                <p class="product-content__price">
                    {{ product.price }}
                </p>
            </div>
            <Button
                v-if="!showQuantitySelection"
                @click="buttonHandler"
                size="mini"
                class="product-content__button"
            >
                +
            </Button>
            <ProductQuantity
                v-else
                @hideQuantitySelection="hideQuantitySelection"
                @updateOrder="updateOrder"
                class="product-content__quantity"
            />
        </div>
    </div>
</template>
<script>
    import {computed, defineComponent, ref, unref, toRefs, watch} from "vue";
    import { indicators } from "./../constants/indicators";
    import Button from "./Button.vue";
    import ProductQuantity from "./ProductQuantity.vue";
    import Indicators from "./Indicators";
    import {useRouter} from "vue-router";
    import {siteStore} from "../constants/store";

    export default defineComponent({
        name: "Product",
        components: {
            Button,
            ProductQuantity,
            Indicators,
        },
        props: {
            product: {
                type: Object,
                required: true,
            },
        },
        setup(props) {
            /** Var */
            const {product} = toRefs(props);
            const showQuantitySelection = ref(false);
            const productQuantity = ref(0);

            /** Features */
            const router = useRouter();

            /** Computed */
            const getLink = computed(() => `/product/${unref(product).id}`);
            const order = computed(() => siteStore.getOrder);

            /** Methods */
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;
            const buttonHandler = () => {
                showQuantitySelection.value = true;
                productQuantity.value = 1;
            };
            const hideQuantitySelection = () => {
                showQuantitySelection.value = false;
                productQuantity.value = 0;
            };
            const redirectToProductPage = () => {
                router.push(`product/${unref(product).id}`);
            };
            const updateOrder = (quantity) => {
                productQuantity.value = quantity;
            };

            /** Wathers */
            watch(productQuantity, (newValue) => {
                const currentProduct = {
                    id: unref(product).id,
                    quantity: newValue,
                };

                if(newValue !== 0) {
                    const newOrder = [...unref(order)];

                    if(newOrder.find((item) => item.id === currentProduct.id)) {
                        // Изменение количества
                        newOrder.map((item) => {
                            if(item.id === currentProduct.id) {
                                item.quantity = currentProduct.quantity;
                            }
                        });
                    } else {
                        // Добавление в заказ
                        newOrder.push(currentProduct);
                    }

                    unref(siteStore).setOrder(newOrder);
                } else {
                    // Удаление из заказа
                    const newOrder = unref(order).reduce((acc, item) => {
                        if(item.id !== currentProduct.id) {
                            acc.push(item);
                        }

                        return acc;
                    },[]);

                    unref(siteStore).setOrder(newOrder);
                }
            });

            return {
                showQuantitySelection,
                hideQuantitySelection,
                updateOrder,
                getIndicatorImage,
                buttonHandler,
                getLink,
                redirectToProductPage,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "../../scss/components/product/component";
</style>
