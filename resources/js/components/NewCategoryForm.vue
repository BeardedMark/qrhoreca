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
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </div>
    </div>
</template>
<script>
    import {defineComponent, ref, onMounted} from "vue";
    // import Editor from "../htmlEditor";
    import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';
    import List from '@ckeditor/ckeditor5-list';

    // import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

    export default defineComponent({
        name: "NewCategoryForm",
        setup() {
            /** Vars */
            const categoryName = ref('');
            const imageLink = ref('');
            const editorContent = ref(null);
            const editorElement = ref(null);


            return {
                categoryName,
                imageLink,
                editorContent,
                // editor,
                editorElement,
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    plugins: [
                        List,
                    ],
                    toolbar: {
                        items: [
                            'bold',
                            'italic',
                            'link',
                            'undo',
                            'redo'
                        ],
                    },
                },
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/newCategoryForm/component";
</style>
