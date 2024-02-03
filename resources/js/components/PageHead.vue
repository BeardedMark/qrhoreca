<template>
    <div class="page-head">
        <div
            v-if="title"
            class="page-head__title page-head-title"
            v-html="title"
        ></div>
        <div
            v-if="subtitle"
            class="page-head__subtitle page-head-subtitle"
            v-html="subtitle"
        ></div>
    </div>
</template>

<script>
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "PageHead",
        props: {
            title: {
                type: String,
                default: '',
            },
            subtitle: {
                type: String,
                default: '',
            },
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/pageHead/component";
</style>
