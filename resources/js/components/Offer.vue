<template>
    <div class="offer">
        <div class="offer__container">
            <div class="offer__top">
                <h1 class="offer__title offer-title">
                    <span class="offer-title__text">
                        Оформление заказа
                    </span>
                </h1>
                <p class="offer__subtitle offer-subtitle">
                    <span class="offer-subtitle__text">
                        Проверьте всю информацию о вашем заказе и дополнительную информацию, которая позволит нам обеспечить для вас высокий уровень сервиса
                    </span>
                </p>
            </div>
            <OfferForm class="offer__form"/>
            <div class="offer__top">
                <h1 class="offer__title offer-title">
                    <span class="offer-title__text">
                       Личные данные
                    </span>
                </h1>
                <p class="offer__subtitle offer-subtitle">
                    <span class="offer-subtitle__text">
                        При необходимости поможет с вами связаться по вопросам относительно вашего заказа
                    </span>
                </p>
            </div>
            <OfferFormPersonal class="offer__form"/>
            <div class="offer__btns">
                <button
                    @click="backPage"
                    type="button"
                    class="offer__cansel offer-cansel"
                >
                    <span class="offer-cansel__text">
                        Отмена
                    </span>
                </button>
                <Button
                    @click="sendOrder"
                    class="offer__order"
                >
                    Заказать
                </Button>
            </div>
            <Separator class="offer__separator" />
            <Descriptions
                :descriptions="notes"
                mode="notes"
                class="offer__dscriptions"
            />
        </div>
    </div>
</template>

<script>
    import {defineComponent} from "vue";
    import {useRouter} from "vue-router";
    import {notes} from "../constants/nots";
    import OfferForm from "./OfferForm.vue";
    import OfferFormPersonal from "./OfferFormPersonal.vue";
    import Button from "./Button.vue";
    import Separator from "./Separator.vue";
    import Descriptions from "./Descriptions.vue";

    export default defineComponent({
        name: "Offer",
        components: {
            Button,
            OfferFormPersonal,
            OfferForm,
            Separator,
            Descriptions,
        },
        setup() {
            /** Features */
            const router = useRouter();

            /** Methods */
            const sendOrder = () => {
                router.push('/order');
            };
            const backPage = () => {
                router.back();
            };

            return {
                sendOrder,
                notes,
                backPage,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/offer/component";
</style>
