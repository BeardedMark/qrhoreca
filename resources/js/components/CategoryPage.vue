<template>
    <div class="category-page">
        <div class="category-page__top">
            <h1 class="category-page__title category-page-title">
                <span class="category-page-title__text">
                    {{ category.category }}
                </span>
            </h1>
            <p class="category-page__subtitle category-page-subtitle">
                <span class="category-page-subtitle__text">
                    {{ category.descr }}
                </span>
            </p>
        </div>
        <AdminPanel
            v-if="isАuthorizedUser"
            class="category-page__admin category-page-admin"
        >
            <AdminButton
                v-for="(btn, btnIndex) in adminButtons"
                :key="`category-page-admin__btn-${btnIndex}`"
                @click="onAdminBtnClick(btnIndex)"
                :btnSettings="btn"
                class="category-page-admin__btn"
            />
        </AdminPanel>
        <div class="category-page__cards">
            <Product
                v-for="(product, productIndex) in productsList"
                :key="`category-page-dish-${productIndex}`"
                :product="product"
                class="category-page__card"
            />
        </div>
        <Button
            @click="redirectToCategories"
            theme="light"
            class="category-page__btn"
        >
            Все категории
        </Button>
        <Separator class="category-page__separator" />
        <Descriptions
            :descriptions="indicators"
            mode="indicators"
            class="category-page__indicators"
        />
    </div>
</template>
<script>
    import {
        computed,
        defineComponent,
        toRefs,
        unref,
    } from "vue";
    import {categoriesListData, products} from "../constants/categoriesListData";
    import {indicators} from "./../constants/indicators";
    import {useRouter} from "vue-router";
    import {isАuthorizedUser} from "../constants/storeGetters";
    import Product from "./Product.vue";
    import Button from "./Button.vue";
    import Descriptions from "./Descriptions.vue";
    import Separator from "./Separator.vue";
    import AdminPanel from "./AdminPanel.vue";
    import AdminButton from "./AdminButton.vue";

    export default defineComponent({
        name: "CategoryPage",
        components: {
            Product,
            Button,
            Descriptions,
            Separator,
            AdminButton,
            AdminPanel,
        },
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        setup(props) {
            /** Vars */
            const {id} = toRefs(props);

            /** Features */
            const router = useRouter();

            /** Computed */
            const category = computed(() => categoriesListData.find((item) => item.id === Number(unref(id))));
            const productsList = computed(() => products.filter((product) => product.categoryId === Number(unref(id))))

            /** Methods */
            const redirectToCategories = () => {
                router.push('/categories');
            };
            const addNewProduct = () => {
                alert('Новое предложение');
                router.push('/new-product');
            };
            const changeVisibility = () => {
                alert('Скрыть категорию');
            };
            const edit = () => {
                alert('Редактировать категорию');
                router.push('/new-category');
            };
            const duplicate = () => {
                alert('Дублировать категорию');
                router.push('/new-category');
            };
            const deleteCategory = () => {
                alert('Удалить категорию');
                router.back();
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
                    text: 'Скрыть категорию',
                    icon: 'turn-off-visibility.png',
                    classMod: '',
                    handler: changeVisibility,
                },
                {
                    text: 'Редактировать категорию',
                    icon: 'edit.png',
                    classMod: '',
                    handler: edit,
                },
                {
                    text: 'Дублировать категорию',
                    icon: 'add.png',
                    classMod: '',
                    handler: duplicate,
                },
                {
                    text: 'Удалить категорию',
                    icon: 'delete.png',
                    classMod: 'accent',
                    handler: deleteCategory,
                },
            ];

            return {
                category,
                productsList,
                redirectToCategories,
                indicators,
                isАuthorizedUser,
                adminButtons,
                onAdminBtnClick,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/categoryPage/component";
</style>
