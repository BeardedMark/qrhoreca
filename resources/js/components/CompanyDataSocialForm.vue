<template>
    <div class="company-data-social-form">
        <p class="company-data-social-form__title company-data-social-form-title">
            <span class="company-data-social-form-title__text">
                Социальные сети
            </span>
        </p>
        <div class="company-data-social-form__body">
            <FieldForm
                @updateInputValue="updateWA"
                type="tel"
                label="WhatsApp"
                class="company-data-social-form__block"
            />
            <FieldForm
                @updateInputValue="updateTelegram"
                type="tel"
                label="Telegram"
                class="company-data-social-form__block"
            />
            <FieldForm
                @updateInputValue="updateInst"
                type="tel"
                label="Instagram"
                class="company-data-social-form__block"
            />
            <FieldForm
                @updateInputValue="updateVK"
                type="tel"
                label="ВКонтакте"
                class="company-data-social-form__block"
            />
            <FieldForm
                @updateInputValue="updateWebSite"
                type="tel"
                label="Веб-сайт"
                class="company-data-social-form__block"
            />
        </div>
    </div>
</template>

<script>
    import FieldForm from "./FieldForm.vue";
    import {defineComponent, ref} from "vue";

    export default defineComponent({
        name: "CompanyDataSocialForm",
        components: {
            FieldForm,
        },
        setup() {
            /** Vars */
            const WA = ref('');
            const VK = ref('');
            const telegram = ref('');
            const inst = ref('');
            const site = ref('');


            /** Methods */
            const updateWA = (value) => {
                WA.value = value;
            };
            const updateTelegram = (value) => {
                telegram.value = value;
            };
            const updateInst = (value) => {
                inst.value = value;
            };
            const updateVK = (value) => {
                VK.value = value;
            };
            const updateWebSite = (value) => {
                site.value = value;
            };

            return {
                updateWA,
                updateTelegram,
                updateInst,
                updateVK,
                updateWebSite,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/companyDataSocialForm/component";
</style>
