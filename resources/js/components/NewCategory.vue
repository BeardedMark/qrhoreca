<template>
    <div class="new-category">
        <div class="new-category__container">
            <div class="new-category__top">
                <h1 class="new-category__title new-category-title">
                    <span class="new-category-title__text">
                        Создание категории
                    </span>
                </h1>
                <p class="new-category__subtitle new-category-subtitle">
                    <span class="new-category-subtitle__text">
                        Заполните форму, чтобы создать новую категорию
                    </span>
                </p>
            </div>
            <NewCategoryForm class="new-category__form"/>
            <Separator class="new-category__separator" />
            <Info
                linkName="Контакты"
                link="/contacts"
                class="new-category__info"
            >
                <template #title>
                    Подробности
                </template>
                <template #text>
                    Все детали или интересующие вас вопросы по блюду вы можете задать нашим сотрудникам
                </template>
            </Info>
        </div>
    </div>
</template>
<script>
    import {defineComponent} from "vue";
    import NewCategoryForm from "./NewCategoryForm.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";

    export default defineComponent({
        name: "NewCategory",
        components: {
            NewCategoryForm,
            Separator,
            Info,
        },
        setup() {

        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/newCategory/component";
</style>
