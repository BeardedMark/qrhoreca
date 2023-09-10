<template>
    <div class="product-quantity">
        <Button
            @click="doLess"
            size="mini"
            theme="light"
            class="product-quantity__btn product-quantity__btn--less"
        >
            &minus;
        </Button>
        <p class="product-quantity__num product-quantity-num">
            <span class="product-quantity-num__text">
                {{ quantity }}
            </span>
        </p>
        <Button
            @click="doMore"
            size="mini"
            theme="light"
            class="product-quantity__btn product-quantity__btn--more"
        >
            +
        </Button>
    </div>
</template>
<script>
    import { defineComponent, ref, unref } from "vue";
    import Button from "./Button.vue";

    export default defineComponent({
        name: "ProductQuantity",
        components: { Button },
        setup(_, { emit }) {
            /** Vars */
            const quantity = ref(1);

            /** Methods */
            const doMore = () => quantity.value++;
            const doLess = () => {
                if(unref(quantity) > 1) {
                    return quantity.value--;
                }

                emit('hideQuantitySelection');
            };

            return {
                doMore,
                doLess,
                quantity,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/productQuantity/component";
</style>
