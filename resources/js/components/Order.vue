<template>
    <div class="order">
        <div class="order__container">
            <div class="order__top">
                <h1 class="order__title order-title">
                    <span class="order-title__text">
                        Заказ оформлен!
                    </span>
                </h1>
                <p class="order__subtitle order-subtitle">
                    <span class="order-subtitle__text">
                        Наш сотрудник свяжется с вами для подтверждения вашего заказа
                    </span>
                    <span class="order-subtitle__text">
                        Все вопросы можно задать по номеру
                        <a
                            href="tel:+7(913)9208405"
                            class="order-subtitle__link"
                        >
                            8 (913) 920-84-05
                        </a>
                    </span>
                </p>
            </div>
            <OrderList
                :list="orderInfo"
                class="order__list"
            />
            <button
                @click="orderAdditionalChangeState"
                type="button"
                class="order__btn order-btn"
            >
                <span class="order-btn__text">
                    Дополнительная информация
                </span>
            </button>
            <div
                v-show="orderAdditionalIsVisiable"
                class="order__additional"
            >
                <OrderList
                    :list="productsInOrder"
                    class="order__list"
                />
                <OrderList
                    :list="personalInfo"
                    class="order__list"
                />
            </div>
            <Separator class="order__separator" />
            <Info class="order__info">
                <template #text>
                    После оформления заказа ваша корзина очиститься для того что бы вы могли заказать добавку
                </template>
            </Info>
        </div>
    </div>
</template>

<script>
    import {defineComponent, onMounted, ref, unref} from "vue";
    import OrderList from "./OrderList";
    import Separator from "./Separator";
    import Info from "./Info";
    import {siteStore} from "../constants/store";

    export default defineComponent({
        name: "Order",
        components: {
            Info,
            OrderList,
            Separator,
        },
        props: {
            order: {
                type: Array,
                default: [],
            },
        },
        setup() {
            /** Vars */
            const orderAdditionalIsVisiable = ref(true);
            const orderInfo = [
                {
                    name: 'Номер',
                    value: '№ 323',
                },
                {
                    name: 'Дата',
                    value: '20.10.2023',
                },
                {
                    name: 'Время',
                    value: '01:42',
                },
                {
                    name: 'Место',
                    value: 54,
                },
                {
                    name: 'Сумма',
                    sum: '1 020р',
                },
            ];

            const productsInOrder = [
                {
                    name: 'Шашлык Свинной',
                    count: '2 х 400р /',
                    sum: '800р',
                },
                {
                    name: 'CocaCola',
                    count: '1 х 120р /',
                    sum: '120р',
                },
                {
                    name: 'Лимонад Мохито',
                    count: '1 х 100р /',
                    sum: '100р',
                },
            ];

            const personalInfo = [
                {
                    name: 'Имя',
                    value: 'Синельщиков Марк Романович'
                },
                {
                    name: 'Телефон',
                    value: '8 (913) 920-84-05',
                },
                {
                    name: 'Почта',
                    value: 'email@gmail.com',
                },
                {
                    name: 'Комментарий',
                    value: 'После оформления заказа ваша корзина очиститься для того что бы вы могли заказать добавку',
                    isDivided: true,
                },
            ];

            /** Methods */
            const orderAdditionalChangeState = () => {
                orderAdditionalIsVisiable.value = !unref(orderAdditionalIsVisiable);
            };

            /** Life cycles */
            onMounted(() => {
                unref(siteStore).setOrder(JSON.parse('[]'));
            });

            return {
                orderInfo,
                productsInOrder,
                personalInfo,
                orderAdditionalChangeState,
                orderAdditionalIsVisiable,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/order/component";
</style>
