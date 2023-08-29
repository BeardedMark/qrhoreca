<template>
    <div class="catalog-indicators">
        <ul class="catalog-indicators__list">
            <li 
                v-for="(indicator, indicatorIndex) in indicators"
                :key="`catalog-indicators-item-${indicatorIndex}`"
                class="catalog-indicators__item catalog-indicators-item"
            >
                <div class="catalog-indicators-item__title catalog-indicators-item-title">
                    <picture class="catalog-indicators-item-title__image catalog-indicators-item-title-image">
                        <img 
                            :src="`./images/indicators/${indicator.icon}`"
                            :alt="indicator.index"
                            class="catalog-indicators-item-title-image__img"
                        />
                    </picture>
                    <p class="catalog-indicators-item-title__name">
                        {{ indicator.name }}
                    </p>
                </div>
                <div class="catalog-indicators-item__desr">
                    {{ indicator.descr }}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import {indicators} from "./../constants/indicators"

    export default defineComponent({
        name: "CatalogIndicators",
        setup() {
            return {
                indicators,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/catalogIndicators/component";
</style>