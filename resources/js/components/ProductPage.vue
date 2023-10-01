<template>
    <div class="product-page">
        <div class="product-page__image product-page-image">
            <picture class="product-page-image__picture">
                <img
                    :src="`/images/${product.image}`"
                    alt="photo"
                    class="product-page-image__img"
                >
            </picture>
        </div>
        <div class="product-page__data product-page-data">
            <h1 class="product-page-data__name">
                {{ product.name }}
            </h1>
            <p class="product-page-data__weight">
                {{ product.weight }}
            </p>
            <Indicators
                :indicators="product.indicators"
                class="product-page-data__indicators"
            />
            <div class="product-page-data__price product-page-data-price">
                <p
                    v-if="product.oldPrice"
                    class="product-page-data-price__text product-page-data-price__text--old"
                >
                    {{ product.oldPrice }}
                </p>
                <p class="product-page-data-price__text">
                    {{ product.price }}
                </p>
            </div>
        </div>
        <div
            v-if="product.description.length"
            class="product-page__descr product-page-descr"
        >
            <p
                v-for="(descr, descrIndex) in product.description"
                :key="`product-page-descr-text-${descrIndex}`"
                class="product-page-descr__text"
            >
                {{ descr }}
            </p>
        </div>
        <Button
            v-if="!showQuantitySelection"
            @click="buttonHandler"
            class="product-page__btn"
        >
            Добавить
        </Button>
        <ProductQuantity
            v-else
            @hideQuantitySelection="hideQuantitySelection"
            mod="light"
            class="product-content__quantity"
        />
        <Separator class="product-page__separator" />
        <Info
            title="Подробности"
            text="Все детали или интересующие вас вопросы по блюду вы можете задать нашим сотрудникам"
            linkName="Контакты"
            link="/contacts"
            class="product-page__info"
        />
    </div>
</template>

<script>
    import {computed, ref, toRefs, unref} from "vue";
    import {products} from "../constants/categoriesListData";
    import {indicators} from "../constants/indicators";
    import Button from "./Button";
    import Separator from "./Separator";
    import Info from "./Info";
    import Indicators from "./Indicators";
    import ProductQuantity from "./ProductQuantity.vue";

    export default {
        name: "ProductPage",
        components: {
            Indicators,
            Info,
            Button,
            Separator,
            ProductQuantity,
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
            const showQuantitySelection = ref(false);

            /** Computed */
            const product = computed(() => products.find((item) => item.id === Number(unref(id))));

            /** Methods */
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;
            const buttonHandler = () => {
                showQuantitySelection.value = true;
            };
            const hideQuantitySelection = () => {
                showQuantitySelection.value = false;
            };

          return {
              product,
              getIndicatorImage,
              buttonHandler,
              showQuantitySelection,
              hideQuantitySelection,
          };
        },
    }
</script>
<style scoped lang="scss">
@import "../../scss/components/productPage/component";
</style>
