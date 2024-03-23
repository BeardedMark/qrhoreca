<template>
    <form class="new-product-form">
        <FieldForm
            @updateInputValue="updateProductName"
            label="Наименование"
            required
            class="new-product-form__block"
        />
        <FieldForm
            label="Категория"
            class="new-product-form__block"
        >
            <template #customInput>
                <div
                    class="new-product-form__field new-product-form-field"
                >
                    <input
                        type="text"
                        v-model="category"
                        :placeholder="`не выбрано`"
                        class="new-product-form-field__input"
                    >
                    <button
                        @click="openCategorySelection"
                        type="button"
                        class="new-product-form-field__btn new-product-form-field-btn"
                    >
                        <span class="new-product-form-field-btn__text">
                            выбрать
                        </span>
                    </button>
                </div>
            </template>
        </FieldForm>
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
    import {defineComponent, ref, onMounted, watch} from "vue";
    import {siteStore} from "../constants/store";
    import {newProductCategory} from "../constants/storeGetters";
    import Button from "./Button.vue";
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
            const category = ref('');
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
            const openCategorySelection = () => {
                siteStore.openModal('ModalCategories');
            };

            /** Watchers */
            watch(newProductCategory, (val) => {
                category.value = val;
            });

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
                category,
                openCategorySelection,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/newProductForm/component";
</style>
