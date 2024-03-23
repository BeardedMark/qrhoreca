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
            <AdminPanel
                v-if="isАuthorizedUser"
                class="categories__admin categories-admin"
            >
                <AdminButton
                    v-for="(btn, btnIndex) in adminButtons"
                    :key="`categories-admin__btn-${btnIndex}`"
                    @click="onAdminBtnClick(btnIndex)"
                    :btnSettings="btn"
                    class="categories-admin__btn"
                />
            </AdminPanel>
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
    import {admin, isАuthorizedUser} from "../constants/storeGetters";
    import {useRouter} from "vue-router";
    import Category from "./Category.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";
    import PageHead from "./PageHead.vue";
    import AdminPanel from "./AdminPanel.vue";
    import AdminButton from "./AdminButton.vue";

    export default defineComponent({
        name: "Categories",
        components: {
            Info,
            Separator,
            Category,
            PageHead,
            AdminButton,
            AdminPanel,
        },
        setup() {
            /** Computed */
            const pageTitle = computed(() => unref(admin).find((item) => item.page.name === 'categories').page.pageTitle);
            const pageSubtitle = computed(() => unref(admin).find((item) => item.page.name === 'categories').page.pageSubtitle);

            /** Features */
            const router = useRouter();

            /** Methods */
            const addNewProduct = () => {
                alert('Новое предложение');
                router.push('/new-product');
            };
            const addNewCategory = () => {
                alert('Новая категория');
                router.push('/new-category');
            };
            const onAdminBtnClick = (idx) => {
                adminButtons[idx].handler();
            };

            const adminButtons = [
                {
                    text: 'Новое предложение',
                    icon: 'add-offer.png',
                    classMod: '',
                    handler: addNewProduct,
                },
                {
                    text: 'Новая категория',
                    icon: 'add-category.png',
                    classMod: '',
                    handler: addNewCategory,
                },
            ];

            return {
                pageTitle,
                pageSubtitle,
                categoriesListData,
                isАuthorizedUser,
                adminButtons,
                onAdminBtnClick,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/categories/component";
</style>
