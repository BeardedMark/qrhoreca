<template>
    <div class="offer-form-personal">
        <FieldForm
            @updateInputValue="updateNameValue"
            label="Ваше имя"
            class="offer-form-personal__block"
        />
        <FieldForm
            @updateInputValue="updatePhoneValue"
            type="tel"
            label="Телефон"
            required
            class="offer-form-personal__block"
        />
        <FieldForm
            @updateInputValue="updateEmailValue"
            type="email"
            label="Почта"
            required
            class="offer-form-personal__block"
        />
        <div class="offer-form-personal__block">
            <CheckboxForm
                @updateCheckboxValue="updateCheckboxValue1"
                id="check3"
                value="Send report"
                label="Отправить электронный отчет"
                class="offer-form-personal__checkbox"
            />
            <CheckboxForm
                @updateCheckboxValue="updateCheckboxValue2"
                id="check4"
                value="User agrees with the privacy policy"
                required
                checked
                class="offer-form-personal__checkbox offer-form-personal-checkbox"
            >
                Я согласен с <a class="offer-form-personal-checkbox__link" href="#">Политикой конфидициальности</a>
            </CheckboxForm>
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref } from "vue";
    import FieldForm from "./FieldForm.vue";
    import CheckboxForm from "./CheckboxForm.vue";

export default defineComponent({
    name: "OfferFormPersonal",
    components: {
        FieldForm,
        CheckboxForm,
    },
    setup() {
        /** Vars */
        const nameValue = ref('');
        const phoneValue = ref('');
        const emailValue = ref('');
        const sendReport = ref(false);
        const agreement = ref(true);

        /** Methods */
        const updateNameValue = (value) => {
            nameValue.value = value;
        };
        const updatePhoneValue = (value) => {
            phoneValue.value = value;
        };
        const updateEmailValue = (value) => {
            emailValue.value = value;
        };
        const updateCheckboxValue1 = (value) => {
            sendReport.value = value;
        };
        const updateCheckboxValue2 = (value) => {
            agreement.value = value;
        };

        return {
            updateNameValue,
            updatePhoneValue,
            updateEmailValue,
            updateCheckboxValue1,
            updateCheckboxValue2,
        };
    },
});
</script>

<style scoped lang="scss">
    @import "resources/scss/components/offerFormPersonal/component";
</style>
