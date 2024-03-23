<template>
    <component
        :is="tag"
        class="icon-button"
        :class="iconButtonClasses"
    >
        <picture class="icon-button__image icon-button-image">
            <img
                :src="iconLink"
                :alt="alt"
                class="icon-button-image__img"
            />
        </picture>
    </component>
</template>
<script>
    import { defineComponent, toRefs, computed, unref } from "vue";

    export default defineComponent({
        name: "IconButton",
        props: {
            tag: {
                type: String,
                default: 'button',
            },
            iconLink: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                default: 'icon',
            },
            mod: {
                type: String,
                default: 'light',
            },
        },
        setup(props) {
            /** Vars */
            const {mod} = toRefs(props);

            /** Computed*/
            const iconButtonClasses = computed(() => ({
                [`icon-button--${unref(mod)}`]: !!unref(mod),
            }));

            return {
                iconButtonClasses,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/iconButton/component";
</style>
