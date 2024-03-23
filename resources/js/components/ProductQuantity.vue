<template>
    <div class="product-quantity">
        <Button
            @click="removeProduct"
            size="mini"
            theme="light"
            class="product-quantity__btn product-quantity__btn--less"
        >
            &minus;
        </Button>
        <p
            class="product-quantity__num product-quantity-num"
            :class="productQuantityNumClasses"
        >
            <span class="product-quantity-num__text">
                {{ quantity }}
            </span>
        </p>
        <Button
            @click="addProduct"
            size="mini"
            theme="light"
            class="product-quantity__btn product-quantity__btn--more"
        >
            +
        </Button>
    </div>
</template>
<script>
    import {defineComponent, ref, unref, toRefs, computed} from "vue";
    import Button from "./Button.vue";

    export default defineComponent({
        name: "ProductQuantity",
        components: { Button },
        props: {
            mod: {
            type: String,
            default: 'default',
            },
            startQuantity: {
                type: Number,
                default: 1,
            },
        },
        setup(props, { emit }) {
            /** Vars */
            const {mod, startQuantity} = toRefs(props);
            const quantity = ref(unref(startQuantity));

            /** Computed */
            const productQuantityNumClasses = computed(() => ({
              [`product-quantity-num--${unref(mod)}`]: !!unref(mod),
            }));

            /** Methods */
            const addProduct = () => {
                quantity.value++;

                emit('updateOrder', unref(quantity));
            };

            const removeProduct = () => {
                if(unref(quantity) > 1) {
                    quantity.value--;
                    emit('updateOrder', unref(quantity));
                    return;
                }

                emit('hideQuantitySelection');
            };

            return {
                productQuantityNumClasses,
                quantity,
                removeProduct,
                addProduct,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/productQuantity/component";
</style>
