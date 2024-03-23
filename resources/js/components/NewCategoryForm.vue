<template>
    <form class="new-category-form">
        <div class="new-category-form__body">
            <FieldForm
                @updateInputValue="updateCategoryName"
                label="Наименование"
                required
                class="new-category-form__block"
            />
            <FieldForm
                @updateInputValue="updateImageLink"
                label="Изображение"
                class="new-category-form__block"
            />
            <FieldForm
                label="Описание"
                class="new-category-form__block"
            >
                <template #customInput>
                    <textarea ref="editor"></textarea>
                </template>
            </FieldForm>
        </div>
        <div class="new-category-form__btns">
            <button
                @click="backPage"
                type="button"
                class="new-category-form__cansel new-category-form-cansel"
            >
                <span class="new-category-form-cansel__text">
                    Отмена
                </span>
            </button>
            <Button
                @click="onSaveClick"
                theme="light"
                class="new-category-form__save"
            >
                Сохранить
            </Button>
        </div>
    </form>
</template>
<script>
    import {defineComponent, ref, onMounted, unref} from "vue";
    import {siteStore} from "../constants/store.js";
    import {useRouter} from "vue-router";
    import Button from "./Button.vue";
    import FieldForm from "./FieldForm.vue";

    export default defineComponent({
        name: "NewCategoryForm",
        components: {
            FieldForm,
            Button,
        },
        setup() {
            /** Vars */
            const categoryName = ref('');
            const imageLink = ref('');
            const editorData = ref('');
            const editor = ref(null);

            /** Features */
            const router = useRouter();

            /** Methods */
            const updateCategoryName = (value) => {
                categoryName.value = value;
            };
            const updateImageLink = (value) => {
                imageLink.value = value;
            };
            const onSaveClick = () => {
                alert('Сохранить');
                siteStore.setNewCategory(unref(categoryName), unref(imageLink), unref(editorData));
            };
            const backPage = () => {
                router.back();
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
                onSaveClick,
                updateCategoryName,
                updateImageLink,
                backPage,

            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/newCategoryForm/component";
</style>
