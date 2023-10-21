<template>
    <div class="offer-form-personal">
        <div class="offer-form-personal__block">
            <p class="offer-form-personal__placeholder offer-form-personal-placeholder">
                <span class="offer-form-personal-placeholder__text">
                    Ваше имя
                </span>
            </p>
            <div class="offer-form-personal__field">
                <input
                    type="text"
                    v-model="nameValue"
                    class="offer-form-personal__input"
                >
            </div>
        </div>
        <div class="offer-form-personal__block offer-form-personal__block--is-required">
            <p class="offer-form-personal__placeholder offer-form-personal-placeholder">
                <span class="offer-form-personal-placeholder__text">
                    Телефон
                </span>
            </p>
            <div class="offer-form-personal__field">
                <input
                    type="text"
                    v-model="phoneValue"
                    required
                    class="offer-form-personal__input"
                >
            </div>
        </div>
        <div class="offer-form-personal__block offer-form-personal__block--is-required">
            <p class="offer-form-personal__placeholder offer-form-personal-placeholder">
                <span class="offer-form-personal-placeholder__text">
                    Почта
                </span>
            </p>
            <div class="offer-form-personal__field">
                <input
                    type="email"
                    v-model="emailValue"
                    required
                    class="offer-form-personal__input"
                >
            </div>
        </div>
        <div class="offer-form-personal__block">
            <div class="offer-form-personal__checkbox offer-form-personal-checkbox">
                <input
                    type="checkbox"
                    id="check3"
                    value="sendReport"
                    v-model="sendReport"
                    class="offer-form-personal-checkbox__input"
                />
                <label
                    for="check3"
                    class="offer-form-personal-checkbox__label"
                >
                    Отправить электронный отчет
                </label>
            </div>
            <div class="offer-form-personal__checkbox offer-form-personal-checkbox">
                <input
                    type="checkbox"
                    id="check4"
                    value="User agrees with the privacy policy"
                    v-model="agreement"
                    required
                    class="offer-form-personal-checkbox__input"
                />
                <label
                    for="check4"
                    class="offer-form-personal-checkbox__label offer-form-personal-checkbox__label--is-required"
                >
                    Я согласен с <a class="offer-form-personal-checkbox__link" href="#">Политикой конфидициальности</a>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "OfferFormPersonal",
    setup() {
        /** Vars */
        const nameValue = ref('');
        const phoneValue = ref('');
        const emailValue = ref('');
        const sendReport = ref(false);
        const agreement = ref(true);

        return {
            nameValue,
            phoneValue,
            emailValue,
            agreement,
            sendReport,
        };
    },
});
</script>

<style scoped lang="scss">
@import "../../scss/components/offerFormPersonal/component";
</style>
