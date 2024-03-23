<template>
    <div class="company-data">
        <div class="company-data__top">
            <h1 class="company-data__title company-data-title">
                <span class="company-data-title__text">
                    Данные компании
                </span>
            </h1>
            <p class="company-data__subtitle company-data-subtitle">
                <span class="company-data-subtitle__text">
                    Заполните все возможные поля и буд-те открытыми для клиента и для связи с вами
                </span>
            </p>
        </div>
        <CompanyDataMainForm class="company-data__form" />
        <CompanyDataContactsForm class="company-data__form" />
        <CompanyDataSocialForm class="company-data__form" />
        <div class="company-data__btns">
            <button
                @click="backPage"
                type="button"
                class="company-data__cansel company-data-cansel"
            >
                <span class="company-data-cansel__text">
                    Отмена
                </span>
            </button>
            <Button
                @click="onSaveClick"
                theme="light"
                class="company-data__save"
            >
                Сохранить
            </Button>
        </div>
        <Separator class="company-data__separator" />
        <Info
            linkName="Контакты"
            link="/contacts"
            class="company-data__info"
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
    import {defineComponent} from "vue";
    import {useRouter} from "vue-router";
    import CompanyDataMainForm from "./CompanyDataMainForm.vue";
    import CompanyDataContactsForm from "./CompanyDataContactsForm.vue";
    import CompanyDataSocialForm from "./CompanyDataSocialForm.vue";
    import Button from "./Button.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";

    export default defineComponent({
        name: "CompanyData",
        components: {
            CompanyDataMainForm,
            CompanyDataContactsForm,
            CompanyDataSocialForm,
            Button,
            Separator,
            Info,
        },
        setup() {
            /** Features */
            const router = useRouter();

            /** Methods */
            const onSaveClick = () => {
                alert('Сохранить');
            };
            const backPage = () => {
                router.back();
            };

            return {
                onSaveClick,
                backPage,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/companyData/component";
</style>
