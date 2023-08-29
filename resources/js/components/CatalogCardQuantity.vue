<template>
    <div class="catalog-card-quantity">
        <ButtonMini 
            @click="doLess"
            text="&minus;"
            theme="light"
            class="catalog-card-quantity__btn catalog-card-quantity__btn--less"
        />
        <p class="catalog-card-quantity__num catalog-card-quantity-num">
            <span class="catalog-card-quantity-num__text">
                {{ quantity }}
            </span>
        </p>
        <ButtonMini 
            @click="doMore"
            text="+"
            theme="light"
            class="catalog-card-quantity__btn catalog-card-quantity__btn--more"
        />
    </div>
</template>
<script>
    import { defineComponent, ref, unref } from "vue";
    import ButtonMini from "./ButtonMini.vue";

    export default defineComponent({
        name: "CatalogCardQuantity",
        components: { ButtonMini },
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
@import "resources/scss/components/catalogCardQuantity/component";
</style>