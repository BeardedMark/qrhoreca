<template>
    <div class="company-data-contacts-form">
        <p class="company-data-contacts-form__title company-data-contacts-form-title">
            <span class="company-data-contacts-form-title__text">
                Контакты
            </span>
        </p>
        <div class="company-data-contacts-form__body">
            <FieldForm
                @updateInputValue="updatePhone"
                type="tel"
                label="Телефон"
                class="company-data-contacts-form__block"
            />
            <FieldForm
                @updateInputValue="updateEmail"
                type="email"
                label="Почта"
                class="company-data-contacts-form__block"
            />
            <FieldForm
                @updateInputValue="updateAddress"
                label="Адрес"
                class="company-data-contacts-form__block"
            />
        </div>
    </div>
</template>

<script>
    import FieldForm from "./FieldForm.vue";
    import {defineComponent, ref} from "vue";

    export default defineComponent({
        name: "CompanyDataContactsForm",
        components: {
            FieldForm,
        },
        setup() {
            /** Vars */
            const phone = ref('');
            const email = ref('');
            const address = ref('');

            /** Methods */
            const updatePhone = (value) => {
                phone.value = value;
            };
            const updateEmail = (value) => {
                email.value = value;
            };
            const updateAddress = (value) => {
                address.value = value;
            };

            return {
                updatePhone,
                updateEmail,
                updateAddress,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/companyDataContactsForm/component";
</style>
