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
    import Product from "./Product.vue";
    import Button from "./Button.vue";
    import Descriptions from "./Descriptions.vue";
    import Separator from "./Separator.vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "CategoryPage",
        components: {
            Product,
            Button,
            Descriptions,
            Separator,
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

            return {
                category,
                productsList,
                redirectToCategories,
                indicators,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/categoryPage/component";
</style>
