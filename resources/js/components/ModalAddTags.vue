<template>
    <Modal class="modal-add-tags">
        <div class="modal-add-tags__top">
            <p class="modal-add-tags__title modal-add-tags-title">
                <span class="modal-add-tags-title__text">
                    Новая метка предложений
                </span>
            </p>
            <p class="modal-add-tags__subtitle modal-add-tags-subtitle">
                <span class="modal-add-tags-subtitle__text">
                    Введите варианты для быстрого поиска по каталогу
                </span>
            </p>
        </div>
        <div class="modal-add-tags__scroll">
            <div class="modal-add-tags__form">
                <FieldForm
                    @updateInputValue="updateNameValue"
                    label="Наименование"
                    required
                    class="modal-add-tags__block"
                />
                <FieldForm
                    @updateInputValue="updateImageLinkValue"
                    label="Иконка"
                    required
                    class="modal-add-tags__block"
                />
                <FieldForm
                    label="Описание"
                    class="modal-add-tags__block"
                >
                    <template #customInput>
                        <div class="modal-add-tags__field">
                        <textarea
                            v-model="description"
                            class="modal-add-tags__input"
                        ></textarea>
                        </div>
                    </template>
                </FieldForm>
            </div>
            <div class="modal-add-tags__btns">
                <button
                    @click="hideModal"
                    type="button"
                    class="modal-add-tags__back modal-add-tags-back"
                >
                    <span class="modal-add-tags-back__text">
                        Отмена
                    </span>
                </button>
                <Button
                    @click="onSaveClick"
                    theme="light"
                    class="modal-add-tags__save"
                >
                    Сохранить
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script>
    import {siteStore} from "../constants/store.js";
    import Modal from "./Modal.vue";
    import Button from "./Button.vue";
    import FieldForm from "./FieldForm.vue";
    import {ref} from "vue";

export default {
    name: "ModalTags",
    components: {
        Modal,
        Button,
        FieldForm,
    },
    setup() {
        /** Vars */
        const nameValue = ref('');
        const imageLink = ref('');
        const description = ref('');

        /** Methods */
        const hideModal = () => {
            siteStore.closeModal();
        };

        const onSaveClick = () => {
            alert('Сохранить');
            hideModal();
        };

        const updateNameValue = (value) => {
            nameValue.value = value;
        };

        const updateImageLinkValue = (value) => {
            imageLink.value = value;
        };

        return {
            hideModal,
            onSaveClick,
            updateNameValue,
            updateImageLinkValue,
            description,
        };
    },
}
</script>

<style scoped lang="scss">
    @import "resources/scss/components/modalAddTags/component";
</style>
