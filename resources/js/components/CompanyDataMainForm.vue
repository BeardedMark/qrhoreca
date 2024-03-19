<template>
    <div class="company-data-main-form">
        <div class="company-data-main-form__body">
            <FieldForm
                @updateInputValue="updateCompanyName"
                label="Наименование"
                required
                class="company-data-main-form__block"
            />
            <FieldForm
                @updateInputValue="updateDescription"
                label="Описание"
                class="company-data-main-form__block"
            />
            <FieldForm
                @updateInputValue="updateHomePage"
                :placeholder="placeholderText"
                label="Главная страница"
                class="company-data-main-form__block"
            />
            <FieldForm
                label="Описание"
                class="company-data-main-form__block"
            >
                <template #customInput>
                    <div class="company-data-main-form__field">
                        <textarea
                            v-model="comments"
                            class="company-data-main-form__input"
                        ></textarea>
                    </div>
                </template>
            </FieldForm>
        </div>
    </div>
</template>

<script>
    import FieldForm from "./FieldForm.vue";
    import {defineComponent, ref} from "vue";

    export default defineComponent({
        name: "CompanyDataMainForm",
        components: {
            FieldForm,
        },
        setup() {
            /** Var */
            const companyName = ref('');
            const description = ref('');
            const homePage = ref('');
            const comments = ref('');
            const placeholderText = 'по умолчанию страница каталога';

            /** Methods */
            const updateCompanyName = (value) => {
                companyName.value = value;
            };
            const updateDescription = (value) => {
                description.value = value;
            };
            const updateHomePage = (value) => {
                homePage.value = value;
            };

            return {
                updateCompanyName,
                updateDescription,
                updateHomePage,
                comments,
                placeholderText,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/companyDataMainForm/component";
</style>
