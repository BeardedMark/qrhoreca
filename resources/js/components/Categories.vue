<template>
    <div class="categories">
        <div class="categories__container">
            <div class="categories__top">
                <h1 class="categories__title categories-title">
                    <span class="categories-title__text">
                        Категории
                    </span>
                </h1>
                <p class="categories__subtitle categories-subtitle">
                    <span class="categories-subtitle__text categories-subtitle-text">
                        Начиная от аппетитных завтраков и заканчивая изысканными десертами, каждая категория приглашает вас на неповторимое кулинарное путешествие
                    </span>
                    <span class="categories-subtitle__text categories-subtitle-text">
                        Вы можете посмотреть все
                        <router-link to="/menu" class="categories-subtitle-text__link">Меню</router-link>
                        целиком
                    </span>
                </p>
            </div>
            <div class="categories__list categories-list">
                <div
                    v-for="(category, categoryIndex) in categoriesListData"
                    :key="`categories-list-item-${categoryIndex}`"
                    class="categories-list__item"
                >
                    <Category :category="category"/>
                </div>
            </div>
            <Separator class="categories__separator" />
            <Info class="categories__info" />
        </div>
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import { categoriesListData } from "../constants/categoriesListData";
    import Category from "./Category.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info";

    export default defineComponent({
        name: "Categories",
        components: {
            Info,
            Separator,
            Category,
        },
        setup() {
            return {
                categoriesListData,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/categories/component";
</style>
