<template>
    <div class="product">
        <router-link
            :to="productLink"
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
            <router-link
                v-if="product.description.length"
                :to="productLink"
                class="product-content__more"
            ></router-link>
            <div class="product-content__descr">
                <router-link
                    :to="productLink"
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
                :startQuantity="productQuantity"
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
    import {getOrder} from "../constants/storeGetters";
    import {changeOrderFunc} from "../constants/changeOrderFunc";

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
            const productId = unref(product).id;
            const productLink = `/product/${productId}`;
            const productQuantity = ref(unref(getOrder).find((item) => item.id === productId)?.quantity || 0);

            /** Computed */
            const showQuantitySelection = computed(() => unref(productQuantity) >= 1);

            /** Methods */
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;
            const updateOrder = (quantity) => {
                productQuantity.value = quantity;
            };
            const buttonHandler = () => {
                updateOrder(1);
            };
            const hideQuantitySelection = () => {
                updateOrder(0);
            };

            /** Wathers */
            watch(productQuantity, (newValue) => {
                changeOrderFunc(newValue, productId);
            });

            return {
                showQuantitySelection,
                hideQuantitySelection,
                updateOrder,
                getIndicatorImage,
                buttonHandler,
                productLink,
                productQuantity,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/product/component";
</style>
