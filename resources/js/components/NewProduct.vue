<template>
    <div class="new-product">
        <div class="new-product__container">
            <div class="new-product__top">
                <h1 class="new-product__title new-product-title">
                    <span class="new-product-title__text">
                        Новое предложение
                    </span>
                </h1>
                <p class="new-product__subtitle new-product-subtitle">
                    <span class="new-product-subtitle__text">
                        Проверьте всю информацию о вашем заказе и дополнительную информацию, которая позволит нам обеспечить для вас высокий уровень сервиса
                    </span>
                </p>
            </div>
            <NewProductForm class="new-product__form"/>
            <div class="new-product__top">
                <h1 class="new-product__title new-product-title">
                    <span class="new-product-title__text">
                        Метки предложеня
                    </span>
                </h1>
                <p class="new-product__subtitle new-product-subtitle">
                    <span class="new-product-subtitle__text">
                        При необходимости можете
                        <router-link
                            to="/tags"
                            class="new-product-subtitle__link"
                        >
                            редактировать
                        </router-link>
                        список меток
                    </span>
                </p>
            </div>
            <NewProductFormTags class="new-product__form"/>
            <div class="new-product__btns">
                <button
                    @click="backPage"
                    type="button"
                    class="new-product__cansel new-product-cansel"
                >
                    <span class="new-product-cansel__text">
                        Отмена
                    </span>
                </button>
                <Button
                    @click="onSaveClick"
                    theme="light"
                    class="new-product__save"
                >
                    Сохранить
                </Button>
            </div>
            <Separator class="new-product__separator" />
        </div>
    </div>
</template>
<script>
    import {defineComponent} from "vue";
    import {useRouter} from "vue-router";
    import NewProductForm from "./NewProductForm.vue";
    import NewProductFormTags from "./NewProductFormTags.vue";
    import Separator from "./Separator.vue";
    import Button from "./Button.vue";

    export default defineComponent({
        name: "NewProduct",
        components: {
            NewProductForm,
            NewProductFormTags,
            Separator,
            Button,
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
    @import "resources/scss/components/newProduct/component";
</style>
