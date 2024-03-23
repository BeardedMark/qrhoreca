<template>
    <button
        type="button"
        class="admin-button"
        :class="getBtnClass(btnSettings.classMod)"
    >
        <picture class="admin-button__image">
            <img
                :src="`/images/${btnSettings.icon}`"
                alt="icon"
                class="admin-button__icon"
            >
        </picture>
        <span class="admin-button__text">
            {{ btnSettings.text }}
        </span>
    </button>
</template>

<script>
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "AdminButton",
        props: {
            btnSettings: {
                type: Array,
                required: true,
            },
        },
        setup() {
            /** Methods */
            const getBtnClass = (classMod) => Boolean(classMod) ? `admin-button--${classMod}` : '';

            return {
                getBtnClass,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/adminButton/component";
</style>
