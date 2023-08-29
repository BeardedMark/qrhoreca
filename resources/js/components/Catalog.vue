<template>
    <div class="catalog">
        <div class="catalog__container">
            <div class="catalog__top">
                <h1 class="catalog__title catalog-title">
                    <span class="catalog-title__text">
                        Меню
                    </span>
                </h1>
                <p class="catalog__subtitle catalog-subtitle">
                    <span class="catalog-subtitle__text">
                        Убедитесь что в вашей корзине находится все что нужно. Можете убрать лишнее, изменить колличество
                    </span>
                </p>
            </div>

            <ul class="catalog__list catalog-list">
                <li 
                    v-for="(item, itemIndex) in catalogList"
                    :key="`catalog-list-item-${itemIndex}`"
                    class="catalog-list__item catalog-list-item"
                    :class="{'catalog-list-item--is-open': item.isOpen}"
                >
                    <div 
                        @click="toggleDropDown(itemIndex)"
                        class="catalog-list-item__top catalog-list-item-top"
                        :class="{'catalog-list-item-top--is-open': item.isOpen}"
                    >
                        <div class="catalog-list-item-top__arrow"></div>
                        <div class="catalog-list-item-top__category">
                            {{ item.category }}
                        </div>
                        <div class="catalog-list-item-top__count">
                            всего {{ item.count }}
                        </div>
                    </div>
                    <div class="catalog-list-item__cards">
                        <CatalogCard 
                            v-for="(card, cardIndex) in item.list"
                            :key="`catalog-list-item-${cardIndex}`"
                            :dish="card"
                            class="catalog-list-item__card"
                        />
                    </div>
                </li>
            </ul>

            <Button class="catalog__btn">
                Перейти в корзину
            </Button>
            <CatalogIndicators class="catalog__indicators" />
        </div>
    </div>
</template>

<script>
    import { 
        defineComponent, 
        ref,
    } from "vue";
    import { catalogListData } from "../constants/catalogListData";
    import CatalogCard from "./CatalogCard.vue";
    import Button from "./Button.vue";
    import CatalogIndicators from "./CatalogIndicators.vue";

    export default defineComponent({
        name: "Catalog",
        components: { 
            CatalogCard, 
            Button,
            CatalogIndicators,
        },
        setup() {
            /** Vars */
            const catalogList = ref(catalogListData.map((item) => ({
                ...item, 
                count: item.list.length,
                isOpen: false,
            })));

            /** Methods */
            const toggleDropDown = (index) => {
               catalogList.value[index].isOpen = !catalogList.value[index].isOpen;
            };

            return {
                catalogList,
                toggleDropDown,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/catalog/component";
</style>