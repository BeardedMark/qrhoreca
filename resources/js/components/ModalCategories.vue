<template>
    <Modal class="modal-categories">
        <div class="modal-categories__top">
            <p class="modal-categories__title modal-categories-title">
                <span class="modal-categories-title__text">
                    Заголовок попапа
                </span>
            </p>
            <p class="modal-categories__subtitle modal-categories-subtitle">
                <span class="modal-categories-subtitle__text">
                    Текс, который может сопровождать всплывающий попап
                </span>
            </p>
        </div>
        <ul class="modal-categories__list">
            <li
                v-for="(category, categoryIndex) in catalogList"
                :key="`modal-category-${categoryIndex}`"
                @click="selectCategory(categoryIndex)"
                class="modal-categories__category modal-category"
                :class="{'modal-category--is-selected': category.isSelected}"
            >
                <span class="modal-category__name">
                    {{ category.category }}
                </span>
                <span class="modal-category__amount">
                     Всего {{ category.count }}
                </span>
            </li>
        </ul>
        <div class="modal-categories__btns">
            <Button
                @click="onSaveClick"
                theme="light"
                class="modal-categories__save"
            >
                Сохранить
            </Button>
        </div>
    </Modal>
</template>

<script>
    import {defineComponent, ref, unref, computed} from "vue";
    import {siteStore} from "../constants/store";
    import {newProductCategory} from "../constants/storeGetters";
    import {categoriesListData, products} from "../constants/categoriesListData";
    import Modal from "./Modal.vue";
    import Button from "./Button.vue";
    import FieldForm from "./FieldForm.vue";

export default defineComponent({
    name: "ModalCategories",
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
        const catalogList = ref(categoriesListData.map((item) => {
            const productsList = products.filter((product) => product.categoryId === item.id);

            return {
                ...item,
                count: productsList.length,
                isSelected: item.category === unref(newProductCategory),
            };
        }));
        const selectedCategory = ref(unref(newProductCategory) ?? '');

        /** Methods */
        const hideModal = () => {
            siteStore.closeModal();
        };

        const onSaveClick = () => {
            alert('Сохранить');
            unref(siteStore).setNewProductCategory(unref(selectedCategory).category);
            hideModal();
        };

        const updateNameValue = (value) => {
            nameValue.value = value;
        };

        const updateImageLinkValue = (value) => {
            imageLink.value = value;
        };

        const selectCategory = (index) => {
            unref(catalogList).forEach((item, itemIdx) => {
                if (itemIdx === index) {
                    selectedCategory.value = item;
                    item.isSelected = true;
                } else {
                    item.isSelected = false;
                }
            });
        };

        return {
            hideModal,
            onSaveClick,
            updateNameValue,
            updateImageLinkValue,
            description,
            catalogList,
            selectCategory,
        };
    },
});
</script>

<style scoped lang="scss">
    @import "resources/scss/components/modalCategories/component";
</style>
