<template>
    <div class="product">
        <picture class="product__image product-image">
            <img
                :src="`/images/${dish.image}`"
                alt="product photo"
                class="product-image__img"
            />
        </picture>
        <div class="product__content product-content">
            <button
                type="button"
                class="product-content__more"
            ></button>
            <div class="product-content__descr">
                <p class="product-content__name">
                    {{ dish.name }}
                </p>
                <p class="product-content__weight">
                    {{ dish.weight }}
                </p>
                <div class="product-content__indicators product-content-indicators">
                    <div
                        v-for="(indicator, indicatorIndex) in dish.indicators"
                        :key="`product-content-indicators-item-${indicatorIndex}`"
                        class="product-content-indicators__item product-content-indicators-item"
                    >
                        <picture class="product-content-indicators-item__image product-content-indicators-item-image">
                            <img
                                :src="`/images/indicators/${getIndicatorImage(indicator)}`"
                                :alt="indicator"
                                class="product-content-indicators-item-image__img"
                            />
                        </picture>
                    </div>
                </div>
                <p class="product-content__price">
                    {{ dish.price }}
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
    import { defineComponent, ref } from "vue";
    import { indicators } from "./../constants/indicators";
    import Button from "./Button.vue";
    import ProductQuantity from "./ProductQuantity.vue";

    export default defineComponent({
        name: "Product",
        components: {
            Button,
            ProductQuantity,
        },
        props: {
            dish: {
                type: Object,
                required: true,
            },
        },
        setup() {
            /** Var */
            const showQuantitySelection = ref(false);

            /** Methods */
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;
            const buttonHandler = () => {
                showQuantitySelection.value = true;
            };
            const hideQuantitySelection = () => {
                showQuantitySelection.value = false;
            };

            return {
                showQuantitySelection,
                hideQuantitySelection,
                getIndicatorImage,
                buttonHandler,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "../../scss/components/product/component";
</style>
