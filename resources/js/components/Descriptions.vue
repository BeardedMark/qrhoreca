<template>
    <div class="descriptions">
        <ul class="descriptions__list">
            <li
                v-for="(item, itemIndex) in descriptions"
                :key="`descriptions-item-${itemIndex}`"
                class="descriptions__item descriptions-item"
            >
                <div
                    class="descriptions-item__title descriptions-item-title"
                    :class="descriptionsItemTitle"
                >
                    <picture class="descriptions-item-title__image descriptions-item-title-image">
                        <img
                            :src="`/images/${item.icon}`"
                            alt="Иконка"
                            class="descriptions-item-title-image__img"
                        />
                    </picture>
                    <p class="descriptions-item-title__name">
                        {{ item.name }}
                    </p>
                </div>
                <div class="descriptions-item__descr">
                    {{ item.descr }}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {computed, defineComponent, toRefs, unref} from "vue";

    export default defineComponent({
        name: "Descriptions",
        props: {
            descriptions: {
                type: Array,
                required: true,
            },
            mode: {
                type: String,
                default: '',
            },
        },
        setup(props) {
            /** Var */
            const {mode} = toRefs(props);

            /** Computed */
            const descriptionsItemTitle = computed(() => ({
                [`descriptions-item-title--${unref(mode)}`]: !!unref(mode),
            }));

            return {
                descriptionsItemTitle,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "../../scss/components/descriptions/component";
</style>
