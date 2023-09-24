<template>
    <router-link
        :to="getLink"
        class="category"
    >
       <picture class="category__image category-image">
            <img
                :src="`/images/${category.image}`"
                alt="photo"
                class="category-image__img"
            />
        </picture>
        <div class="category__descr">
            <p class="category__name">
                {{ category.category }}
            </p>
            <p class="category__count">
                Всего {{ categoryCount }}
            </p>
        </div>
    </router-link>
</template>
<script>
    import { computed, defineComponent, toRefs, unref } from "vue";
    import {products} from "../constants/categoriesListData";

    export default defineComponent({
        name: "Category",
        props: {
            category: {
                type: Object,
                required: true,
            },
        },
        setup(props) {
            /** Vars */
            const {category} = toRefs(props);

            /** Computed */
            const categoryCount = computed(() => products.filter((item) => item.categoryId === unref(category).id)?.length || 0);
            const getLink = computed(() => `/category/${unref(category).id}`);

            return {
                categoryCount,
                getLink,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/category/component";
</style>
