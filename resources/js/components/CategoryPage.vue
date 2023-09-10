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
                v-for="(dish, dishIndex) in category.list"
                :key="`category-page-dish-${dishIndex}`"
                :dish="dish"
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
        <IndicatorsInfo class="category-page__indicators" />
    </div>
</template>
<script>
    import {
        computed,
        defineComponent,
        toRefs,
        unref,
    } from "vue";
    import { categoriesListData } from "../constants/categoriesListData";
    import Product from "./Product.vue";
    import Button from "./Button.vue";
    import IndicatorsInfo from "./IndicatorsInfo.vue";
    import Separator from "./Separator.vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "CategoryPage",
        components: {
            Product,
            Button,
            IndicatorsInfo,
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

            const redirectToCategories = () => {
                router.push('/categories');
            };

            return {
                category,
                redirectToCategories,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/categoryPage/component";
</style>
