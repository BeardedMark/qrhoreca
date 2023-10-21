<template>
    <div class="search">
        <SearchPanel
            @searchRequest="searchRequest"
            class="search__panel"
        />
        <div class="search__order">
            <h1 class="search__title search-title">
                <span class="search-title__text">
                    Наши предложения
                </span>
            </h1>
            <p class="search__subtitle search-subtitle">
                <span class="search-subtitle__text">
                    Убедитесь что в вашей корзине находится все что нужно. Можете убрать лишнее, изменить колличество
                </span>
            </p>
        </div>
        <div class="search__list search-list">
            <Product
                v-for="(searchItem, searchItemIndex) in searchList"
                :key="`search-list-item-${searchItemIndex}`"
                :product="searchItem"
                class="search-list__item"
            />
        </div>
        <div class="search__blanks">
            <div
                v-for="(blank, blankIndex) in searchBlanks"
                @click="searchBlank(blank)"
                :key="`search-blank-${blankIndex}`"
                class="search__blank search-blank"
            >
                <p class="search-blank__text">
                    {{ blank }}
                </p>
            </div>
        </div>
        <Separator class="search__separator" />
        <Info class="search__info">
            <template #title>
                Как работает поиск
            </template>
            <template #text>
                Введеные вами слова в поле будут по отдельности искаться во всей информации о каждом блюде
            </template>
        </Info>
    </div>
</template>
<script>
    import { defineComponent, computed, ref, unref } from "vue";
    import SearchPanel from "./SearchPanel";
    import Product from "./Product";
    import Separator from "./Separator.vue";
    import Info from "./Info";
    import {products} from "../constants/categoriesListData";
    import {searchBlanks} from "../constants/searchBlanks";

    export default defineComponent({
        name: "Search",
        components: {
            Product,
            SearchPanel,
            Separator,
            Info,
        },
        setup() {
            /** Vars */
            const searchRequestText = ref('');
            const selectedBlank = ref(null);

            /** Computed */
            const searchList = computed(() => {
                if(unref(selectedBlank)) {
                    return products.filter((item) => item.blank === unref(selectedBlank));
                }

                return products.filter((item) => new RegExp(unref(searchRequestText), 'i').test(item.name));
            });

            /** Methods */
            const searchRequest = (searchText) => {
                searchRequestText.value = searchText;
            };
            const searchBlank = (blank) => {
                selectedBlank.value = blank;
            };

            return {
                searchRequest,
                searchList,
                searchBlanks,
                searchBlank,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/search/component";
</style>
