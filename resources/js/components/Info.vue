<template>
    <div class="info">
        <div class="info__container">
            <div class="info__top">
                <picture class="info__icon info-icon">
                    <img
                        :src="`/images/info.png`"
                        alt="info icon"
                        class="info-icon__img"
                    >
                </picture>
                <p class="info__title">
                    <slot name="title">
                        Справка
                    </slot>
                </p>
            </div>
            <p class="info__text info-text">
            <span class="info-text__label">
                <slot name="text"></slot>
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
    </div>
</template>
<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Info",
        props: {
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
