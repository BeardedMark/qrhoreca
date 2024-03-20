<template>
    <div class="about">
        <div class="about__top">
            <h1 class="about__title about-title">
                <span class="about-title__text">
                    Paradise
                </span>
            </h1>
            <p class="about__subtitle about-subtitle">
                <span class="about-subtitle__text">
                    Ресторан ООО «Парадайз»
                </span>
            </p>
        </div>
        <div class="about__content">
            <p class="about__text">
                Ресторан "Paradise" - это уютное и изысканное заведение, где каждый гость может насладиться неповторимой атмосферой роскоши и вкуса. Наш ресторан находится в самом сердце города, предлагая удобное расположение для всех, кто ищет отличное место для ужина, свадьбы, корпоративного мероприятия или романтического ужина.
            </p>
            <p class="about__text">
                Приходите в ресторан и насладитесь непередаваемым опытом вкуса и роскоши, который мы готовы предоставить каждому нашему гостю. Мы стремимся к тому, чтобы каждое ваше посещение становилось праздником для ваших чувств и воспоминанием на долгие годы.
            </p>
        </div>
        <Separator class="about__separator" />
        <Info
            linkName="Контакты"
            link="/contacts"
            class="about__info"
        >
            <template #title>
                Подробности
            </template>
            <template #text>
                Все детали или интересующие вас вопросы по блюду вы можете задать нашим сотрудникам
            </template>
        </Info>
    </div>
</template>

<script>
    import { defineComponent } from "vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";

    export default defineComponent({
        name: "About",
        components: {
            Separator,
            Info,
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/about/component";
</style>
