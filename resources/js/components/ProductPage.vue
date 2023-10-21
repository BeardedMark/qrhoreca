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
            @updateOrder="updateOrder"
            :startQuantity="productQuantity"
            mod="light"
            class="product-content__quantity"
        />
        <Separator class="product-page__separator" />
        <Info
            linkName="Контакты"
            link="/contacts"
            class="product-page__info"
        >
            <template #title>
                Подробности
            </template>
            <template #text>
                Все детали или интересующие вас вопросы по блюду вы можете задать нашим сотрудникам
            </template>
        </Info>
    </div>
</template>

<script>
    import {computed, ref, toRefs, unref, watch} from "vue";
    import {products} from "../constants/categoriesListData";
    import {indicators} from "../constants/indicators";
    import Button from "./Button";
    import Separator from "./Separator";
    import Info from "./Info";
    import Indicators from "./Indicators";
    import ProductQuantity from "./ProductQuantity.vue";
    import {getOrder} from "../constants/storeGetters";
    import {changeOrderFunc} from "../constants/changeOrderFunc";

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
            const productQuantity = ref(unref(getOrder).find((item) => item.id === Number(unref(id)))?.quantity || 0);

            /** Computed */
            const showQuantitySelection = computed(() => unref(productQuantity) >= 1);
            const product = computed(() => products.find((item) => item.id === Number(unref(id))));

            /** Methods */
            const getIndicatorImage = (index) => indicators.find((item) => item.index === index).icon;
            const updateOrder = (quantity) => {
                productQuantity.value = quantity;
            };
            const buttonHandler = () => {
                updateOrder(1);
            };
            const hideQuantitySelection = () => {
                updateOrder(0);
            };

            /** Wathers */
            watch(productQuantity, (newValue) => {
                changeOrderFunc(newValue, Number(unref(id)));
            });

            return {
              product,
              getIndicatorImage,
              buttonHandler,
              showQuantitySelection,
              hideQuantitySelection,
              productQuantity,
              updateOrder,
            };
        },
    }
</script>
<style scoped lang="scss">
@import "../../scss/components/productPage/component";
</style>
