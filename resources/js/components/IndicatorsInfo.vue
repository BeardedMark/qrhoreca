<template>
    <div class="indicators-info">
        <ul class="indicators-info__list">
            <li
                v-for="(indicator, indicatorIndex) in indicators"
                :key="`indicators-info-item-${indicatorIndex}`"
                class="indicators-info__item indicators-info-item"
            >
                <div class="indicators-info-item__title indicators-info-item-title">
                    <picture class="indicators-info-item-title__image indicators-info-item-title-image">
                        <img
                            :src="`/images/indicators/${indicator.icon}`"
                            :alt="indicator.index"
                            class="indicators-info-item-title-image__img"
                        />
                    </picture>
                    <p class="indicators-info-item-title__name">
                        {{ indicator.name }}
                    </p>
                </div>
                <div class="indicators-info-item__descr">
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
        name: "IndicatorsInfo",
        setup() {
            return {
                indicators,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/indicatorsInfo/component";
</style>
