<template>
    <form class="new-category-form">
        <div class="new-category-form__body">
            <div class="new-category-form__block new-category-form__block--is-required">
                <p class="new-category-form__placeholder new-category-form-placeholder">
                <span class="new-category-form-placeholder__text">
                    Наименование
                </span>
                </p>
                <div class="new-category-form__field">
                    <input
                        type="text"
                        v-model="categoryName"
                        required
                        class="new-category-form__input"
                    >
                </div>
            </div>
            <div class="new-category-form__block">
                <p class="new-category-form__placeholder new-category-form-placeholder">
                <span class="new-category-form-placeholder__text">
                    Изображение
                </span>
                </p>
                <div class="new-category-form__field">
                    <input
                        type="text"
                        v-model="imageLink"
                        required
                        class="new-category-form__input"
                    >
                </div>
            </div>
            <div class="new-category-form__block">
                <p class="new-category-form__placeholder new-category-form-placeholder">
                <span class="new-category-form-placeholder__text">
                    Описание
                </span>
                </p>
            </div>
            <textarea ref="editor"></textarea>
        </div>
        <div class="new-category-form__btns">
            <router-link
                to="/profile"
                class="new-category-form__cansel new-category-form-cansel"
            >
                    <span class="new-category-form-cansel__text">
                        Отмена
                    </span>
            </router-link>
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
    import Button from "./Button";
    import {categories} from "../constants/storeGetters.js";

    export default defineComponent({
        name: "NewCategoryForm",
        components: {
            Button,
        },
        setup() {
            /** Vars */
            const categoryName = ref('');
            const imageLink = ref('');
            const editorData = ref('');
            const editor = ref(null);

            console.log(unref(categories));

            /** Methods */
            const onSaveClick = () => {
                alert('Сохранить');
                siteStore.setNewCategory(unref(categoryName), unref(imageLink), unref(editorData));
                console.log(unref(categories));
            };

            /** life cycles */
            onMounted(() => {
                CKEDITOR.replace(editor.value, {
                    // Настройки CKEditor
                    language: 'ru',
                    height: 300,
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
                categoryName,
                imageLink,
                editor,
                onSaveClick,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/newCategoryForm/component";
</style>
