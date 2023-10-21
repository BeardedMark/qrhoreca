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
                <router-link
                    to="/basket"
                    class="offer__cansel offer-cansel"
                >
                    <span class="offer-cansel__text">
                        Отмена
                    </span>
                </router-link>
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
import {defineComponent, unref} from "vue";
    import {useRouter} from "vue-router";
    import OfferForm from "./OfferForm";
    import OfferFormPersonal from "./OfferFormPersonal";
    import Button from "./Button";
    import Separator from "./Separator";
    import Descriptions from "./Descriptions.vue";
    import {notes} from "../constants/nots";

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

            return {
                sendOrder,
                notes,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/offer/component";
</style>
