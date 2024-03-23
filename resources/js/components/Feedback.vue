<template>
    <div class="feedback">
        <div class="feedback__top">
            <h1 class="feedback__title feedback-title">
                <span class="feedback-title__text">
                    Обратная связь
                </span>
            </h1>
            <p class="feedback__subtitle feedback-subtitle">
                <span class="feedback-subtitle__text">
                    Напишите нам отзыв, предложение или задайте интересующий вас вопрос
                </span>
            </p>
        </div>
        <FeedbackForm class="feedback__form" />
        <Separator class="feedback__separator" />
        <Info
            linkName="Контакты"
            link="/feedback"
            class="feedback__info"
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
    import Info from "./Info.vue";
    import Separator from "./Separator.vue";
    import Button from "./Button.vue";
    import FeedbackForm from "./FeedbackForm.vue";

    export default defineComponent({
        name: "Feedback",
        components: {
            FeedbackForm,
            Info,
            Separator,
            Button,
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/feedback/component";
</style>
