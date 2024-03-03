<template>
    <form class="new-product-form-tags">
        <div class="new-product-form-tags__block">
            <CheckboxForm
                v-for="(tag, tagIndex) in tags"
                @updateCheckboxValue="updateTags"
                :key="`new-product-form__checkbox-${tagIndex}`"
                :id="`check${tagIndex}`"
                :value="tag"
                :label="tag"
                :index="tagIndex"
                class="new-product-form-tags__checkbox"
            />
        </div>
    </form>
</template>
<script>
    import {defineComponent, ref, unref} from "vue";
    import CheckboxForm from "./CheckboxForm.vue";

    export default defineComponent({
        name: "NewProductFormTags",
        components: {
            CheckboxForm,
        },
        setup() {
            /** Vars */
            const tags = ['Острое', 'Вегетарианское', 'Детское', 'Со льдом', 'Новинка'];
            const checkedTags = ref([]);

            /** Methods */
            const updateTags = (value, index) => {
                if(value) {
                    checkedTags.value[index] = tags[index];

                    return;
                }

                delete checkedTags.value[index];
            };

            return {
                tags,
                updateTags,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/newProductFormTags/component";
</style>
