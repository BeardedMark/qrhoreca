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
        <AdminPanel
            v-if="isАuthorizedUser"
            class="product-page__admin product-page-admin"
        >
            <AdminButton
                v-for="(btn, btnIndex) in adminButtons"
                :key="`product-page-admin__btn-${btnIndex}`"
                @click="onAdminBtnClick(btnIndex)"
                :btnSettings="btn"
                class="product-page-admin__btn"
            />
        </AdminPanel>
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
    import {getOrder} from "../constants/storeGetters";
    import {changeOrderFunc} from "../constants/changeOrderFunc";
    import {isАuthorizedUser} from "../constants/storeGetters";
    import {useRouter} from "vue-router";
    import Button from "./Button.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";
    import Indicators from "./Indicators.vue";
    import ProductQuantity from "./ProductQuantity.vue";
    import AdminPanel from "./AdminPanel.vue";
    import AdminButton from "./AdminButton.vue";

    export default {
        name: "ProductPage",
        components: {
            AdminButton,
            AdminPanel,
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

            /** Features */
            const router = useRouter();

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
            const edit = () => {
                alert('Редактировать предложение');
                router.push('/new-product');
            };
            const changeVisibility = () => {
                alert('Раскрыть предложение');
            };
            const duplicate = () => {
                alert('Дублировать предложение');
                router.push('/new-product');
            };
            const deleteProduct = () => {
                alert('Удалить предложение');
                router.back();
            };
            const onAdminBtnClick = (idx) => {
                adminButtons[idx].handler();
            };

            const adminButtons = [
                {
                    text: 'Редактировать предложение',
                    icon: 'edit.png',
                    classMod: '',
                    handler: edit,
                },
                {
                    text: 'Раскрыть предложение',
                    icon: 'visibility-enable.png',
                    classMod: '',
                    handler: changeVisibility,
                },
                {
                    text: 'Дублировать предложение',
                    icon: 'add.png',
                    classMod: '',
                    handler: duplicate,
                },
                {
                    text: 'Удалить предложение',
                    icon: 'delete.png',
                    classMod: 'accent',
                    handler: deleteProduct,
                },
            ];

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
                isАuthorizedUser,
                adminButtons,
                onAdminBtnClick,
            };
        },
    }
</script>

<style scoped lang="scss">
    @import "resources/scss/components/productPage/component";
</style>
