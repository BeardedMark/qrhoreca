<template>
    <div class="new-category-form">
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
</template>
<script>
    import {defineComponent, ref, onMounted, watch} from "vue";

    export default defineComponent({
        name: "NewCategoryForm",
        setup() {
            /** Vars */
            const categoryName = ref('');
            const imageLink = ref('');
            const editor = ref(null);
            const editorData = ref('');

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

            watch(editorData, (val) => {
                console.log(val);
            });

            return {
                categoryName,
                imageLink,
                editor,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/newCategoryForm/component";
</style>
