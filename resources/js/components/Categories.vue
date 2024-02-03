<template>
    <div class="categories">
        <div class="categories__container">
            <div class="categories__top">
                <PageHead
                    :title="pageTitle"
                    :subtitle="pageSubtitle"
                    class="categories__title"
                />
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
            <Info
                linkName="Контакты"
                link="/contacts"
                class="categories__info"
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
    import { defineComponent, unref, computed } from "vue";
    import { categoriesListData } from "../constants/categoriesListData";
    import Category from "./Category.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info";
    import PageHead from "./PageHead";
    import {admin} from "../constants/storeGetters";

    export default defineComponent({
        name: "Categories",
        components: {
            Info,
            Separator,
            Category,
            PageHead,
        },
        setup() {
            const pageTitle = computed(() => unref(admin).find((item) => item.page.name === 'categories').page.pageTitle);
            const pageSubtitle = computed(() => unref(admin).find((item) => item.page.name === 'categories').page.pageSubtitle);

            return {
                pageTitle,
                pageSubtitle,
                categoriesListData,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/categories/component";
</style>
