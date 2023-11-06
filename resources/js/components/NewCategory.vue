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
            <NewCategoryForm
                class="new-category__form"
            />
            <div class="new-category__btns">
                <router-link
                    to="/profile"
                    class="new-category__cansel new-category-cansel"
                >
                    <span class="new-category-cansel__text">
                        Отмена
                    </span>
                </router-link>
                <Button
                    @click="onSaveClick"
                    theme="light"
                    class="new-category__save"
                >
                    Сохранить
                </Button>
            </div>
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
    import Separator from "./Separator";
    import Info from "./Info";
    import Button from "./Button";

    export default defineComponent({
        name: "NewCategory",
        components: {
            NewCategoryForm,
            Separator,
            Info,
            Button,
        },
        setup() {
            const onSaveClick = () => {
                alert('Сохранить');
            };

            return {
                onSaveClick,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/newCategory/component";
</style>
