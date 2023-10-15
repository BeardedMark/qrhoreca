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
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";
    import OfferForm from "./OfferForm";
    import OfferFormPersonal from "./OfferFormPersonal";

    export default defineComponent({
        name: "Offer",
        components: {
            OfferFormPersonal,
            OfferForm,
        },
        setup() {
            return {

            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/offer/component";
</style>
