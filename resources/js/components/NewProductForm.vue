<template>
    <form class="new-product-form">
        <FieldForm
            @updateInputValue="updateProductName"
            label="Наименование"
            required
            class="new-product-form__block"
        />
        <FieldForm
            @updateInputValue="updatePrice"
            label="Стоимость"
            class="new-product-form__block"
        />
        <FieldForm
            @updateInputValue="updateQuantity"
            label="Количество"
            class="new-product-form__block"
        />
        <FieldForm
            @updateInputValue="updateCookingTime"
            label="Время приготовления (мин)"
            class="new-product-form__block"
        />
        <FieldForm
            @updateInputValue="updateImageLink"
            label="Изображение"
            class="new-product-form__block"
        />
        <FieldForm
            label="Описание"
            class="new-product-form__block"
        >
            <template #customInput>
                <textarea ref="editor"></textarea>
            </template>
        </FieldForm>
    </form>
</template>
<script>
    import {defineComponent, ref, onMounted} from "vue";
    import Button from "./Button";
    import FieldForm from "./FieldForm.vue";

    export default defineComponent({
        name: "NewProductForm",
        components: {
            FieldForm,
            Button,
        },
        setup() {
            /** Vars */
            const productName = ref('');
            const price = ref('');
            const quantity = ref('');
            const cookingTime = ref('');
            const imageLink = ref('');
            const editorData = ref('');
            const editor = ref(null);

            /** Methods */
            const updateProductName = (value) => {
                productName.value = value;
            };
            const updatePrice = (value) => {
                price.value = value;
            };
            const updateQuantity = (value) => {
                quantity.value = value;
            };
            const updateCookingTime = (value) => {
                cookingTime.value = value;
            };
            const updateImageLink = (value) => {
                imageLink.value = value;
            };

            /** life cycles */
            onMounted(() => {
                CKEDITOR.replace(editor.value, {
                    // Настройки CKEditor
                    language: 'ru',
                    height: 152,
                    toolbar: [
                        ['Bold', 'Italic', 'Underline', 'Strike'],
                        ['NumberedList', 'BulletedList', 'Outdent', 'Indent'],
                        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                        ['Link', 'Unlink', 'Image', 'Table'],
                        ['Undo', 'Redo'],
                    ],
                    on: {
                        change: function (event) {
                            editorData.value = event.editor.getData();
                        }
                    }
                });
            });

            return {
                editor,
                updateProductName,
                updatePrice,
                updateQuantity,
                updateCookingTime,
                updateImageLink,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/newProductForm/component";
</style>
