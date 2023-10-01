<template>
    <div class="info">
        <div class="info__top">
            <picture class="info__icon info-icon">
                <img
                    :src="`/images/info.png`"
                    alt="info icon"
                    class="info-icon__img"
                >
            </picture>
            <p class="info__title">
                {{ title }}
            </p>
        </div>
        <p
            v-if="text"
            class="info__text info-text"
        >
            <span class="info-text__label">
                {{ text }}
            </span>
        </p>
        <router-link
            v-if="linkName"
            :to="link"
            class="info__link info-link"
        >
            <span class="info-link__label">
                {{ linkName }}
            </span>
        </router-link>
    </div>
</template>
<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Info",
        props: {
            title: {
               type: String,
               required: true,
            },
            text: {
                type: String,
                default: '',
            },
            linkName: {
                type: String,
                default: '',
            },
            link: {
                type: String,
                default: '',
            },
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/info/component";
</style>
