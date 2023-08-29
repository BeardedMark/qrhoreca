<template>
    <component 
        :is="tag"
        :href="link"
        :type="btnType"
        class="icon-button"
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
                default: 'a',
            },
            href: {
                type: String,
                default: '#',
            },
            iconLink: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                required: 'icon',
            },
        },
        setup(props) {
            /** Vars */
            const {tag, href} = toRefs(props);

            /** Computed*/
            const link = computed(() => unref(tag) === 'a' ? unref(href) : null);
            const btnType = computed(() => unref(tag) === 'button' ? 'button' : null);

            return {
                link,
                btnType,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/iconButton/component";
</style>