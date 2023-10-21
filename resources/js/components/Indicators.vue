<template>
    <div class="indicators">
        <div
            v-for="(indicator, indicatorIndex) in indicators"
            :key="`indicators-item-${indicatorIndex}`"
            class="indicators__item indicators-item"
        >
            <picture class="indicators-item__image indicators-item-image">
                <img
                    :src="`/images/${getIndicatorImage(indicator)}`"
                    :alt="indicator"
                    class="indicators-item-image__img"
                />
            </picture>
        </div>
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import {indicators} from "./../constants/indicators"

    export default defineComponent({
        name: "Indicators",
        props: {
            indicators: {
               type: Array,
                default: [],
            },
        },
        setup() {
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;

            return {
                getIndicatorImage,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/indicators/component";
</style>
