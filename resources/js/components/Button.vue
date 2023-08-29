<template>
    <button 
        type="button"
        class="button"
        :class="buttonClasses"
    >
        <span class="button__text">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import { computed, defineComponent, toRefs, unref } from "vue";

    export default defineComponent({
        name: "Button",
        props: {
            size: {
                type: String,
                default: 'default',
            },
            theme: {
                type: String,
                default: 'accent',
            },
        },
        setup(props) {
            /** Vars */
            const {size, theme} = toRefs(props);

            /** Computed */
            const buttonClasses = computed(() => ({
                [`button--size-${unref(size)}`] : !!unref(size),
                [`button--theme-${unref(theme)}`] : !!unref(theme),
            }));

            return {
                buttonClasses,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/button/component";
</style>