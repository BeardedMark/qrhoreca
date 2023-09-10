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
                Подробности
            </p>
        </div>
        <p class="info__text info-text">
            <span class="info-text__label">
                Все детали или интересующие вас вопросы по блюду вы можете задать нашим сотрудникам
            </span>
        </p>
        <router-link
            to="/contacts"
            class="info__link info-link"
        >
            <span class="info-link__label">
                Контакты
            </span>
        </router-link>
    </div>
</template>
<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Info",
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/info/component";
</style>
