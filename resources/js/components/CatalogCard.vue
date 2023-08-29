<template>
    <div class="catalog-card">
        <picture class="catalog-card__image catalog-card-image">
            <img 
                :src="`./images/${dish.image}`"
                alt="photo"
                class="catalog-card-image__img"
            />
        </picture>
        <div class="catalog-card__content catalog-card-content">
            <button 
                type="button"
                class="catalog-card-content__more"
            ></button>
            <div class="catalog-card-content__descr">
                <p class="catalog-card-content__name">
                    {{ dish.name }}
                </p>
                <p class="catalog-card-content__weight">
                    {{ dish.weight }}
                </p>
                <div class="catalog-card-content__indicators catalog-card-content-indicators">
                    <div 
                        v-for="(indicator, indicatorIndex) in dish.indicators"
                        :key="`catalog-card-content-indicators-item-${indicatorIndex}`"
                        class="catalog-card-content-indicators__item catalog-card-content-indicators-item"
                    >
                        <picture class="catalog-card-content-indicators-item__image catalog-card-content-indicators-item-image">
                            <img 
                                :src="`./images/indicators/${getIndicatorImage(indicator)}`"
                                :alt="indicator"
                                class="catalog-card-content-indicators-item-image__img"
                            />
                        </picture>
                    </div>
                </div>
                <p class="catalog-card-content__price">
                    {{ dish.price }}
                </p>
            </div>
            <ButtonMini 
                v-if="!showQuantitySelection"
                @click="buttonHandler"
                text="+"
                class="catalog-card-content__button"
            />
            <CatalogCardQuantity 
                v-else 
                @hideQuantitySelection="hideQuantitySelection"
                class="catalog-card-content__quantity"
            />
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref } from "vue";
    import { indicators } from "./../constants/indicators";
    import ButtonMini from "./ButtonMini.vue";
    import CatalogCardQuantity from "./CatalogCardQuantity.vue";

    export default defineComponent({
        name: "CatalogCard",
        components: { 
            ButtonMini,
            CatalogCardQuantity,
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
@import "resources/scss/components/catalogCard/component";
</style>