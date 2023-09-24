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
                class="product-content__quantity"
            />
        </div>
    </div>
</template>
<script>
    import {computed, defineComponent, ref, unref, toRefs} from "vue";
    import { indicators } from "./../constants/indicators";
    import Button from "./Button.vue";
    import ProductQuantity from "./ProductQuantity.vue";
    import Indicators from "./Indicators";
    import {useRouter} from "vue-router";

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

            /** Features */
            const router = useRouter();

            /** Computed */
            const getLink = computed(() => `/product/${unref(product).id}`);

            /** Methods */
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;
            const buttonHandler = () => {
                showQuantitySelection.value = true;
            };
            const hideQuantitySelection = () => {
                showQuantitySelection.value = false;
            };
            const redirectToProductPage = () => {
                router.push(`product/${unref(product).id}`);
            };

            return {
                showQuantitySelection,
                hideQuantitySelection,
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
