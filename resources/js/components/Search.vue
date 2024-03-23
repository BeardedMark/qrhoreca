<template>
    <div class="search">
        <SearchPanel
            @searchRequest="searchRequest"
            class="search__panel"
        />
        <div class="search__top">
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
        <AdminPanel
            v-if="isАuthorizedUser"
            class="search__admin search-admin"
        >
            <AdminButton
                v-for="(btn, btnIndex) in adminButtons"
                :key="`search-admin__btn-${btnIndex}`"
                @click="onAdminBtnClick(btnIndex)"
                :btnSettings="btn"
                class="search-admin__btn"
            />
        </AdminPanel>
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
    import {products} from "../constants/categoriesListData";
    import {searchBlanks} from "../constants/searchBlanks";
    import {isАuthorizedUser} from "../constants/storeGetters.js";
    import {useRouter} from "vue-router";
    import SearchPanel from "./SearchPanel.vue";
    import Product from "./Product.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";
    import AdminButton from "./AdminButton.vue";
    import AdminPanel from "./AdminPanel.vue";

    export default defineComponent({
        name: "Search",
        components: {
            Product,
            SearchPanel,
            Separator,
            Info,
            AdminButton,
            AdminPanel,
        },
        setup() {
            /** Vars */
            const searchRequestText = ref('');
            const selectedBlank = ref(null);

            /** Features */
            const router = useRouter();

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
            const addNewProduct = () => {
                alert('Новое предложение');
                router.push('/new-product');
            };
            const editQuickSearch = () => {
                alert('Редактировать быстрый поиск');
                router.push('/quick-search');
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
                    text: 'Редактировать быстрый поиск',
                    icon: 'edit-options.png',
                    classMod: '',
                    handler: editQuickSearch,
                },
            ];

            return {
                searchRequest,
                searchList,
                searchBlanks,
                searchBlank,
                isАuthorizedUser,
                adminButtons,
                onAdminBtnClick,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/search/component";
</style>
