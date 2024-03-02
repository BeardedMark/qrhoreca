<template>
    <form class="new-product-form-tags">
        <div class="new-product-form-tags__block">
            <CheckboxForm
                v-for="(tag, tagIndex) in tags"
                :key="`new-product-form__checkbox-${tagIndex}`"
                @updateCheckboxValue="updateTags"
                :id="`check${tagIndex}`"
                :value="tag"
                :label="tag"
                :checked="checkedTags.includes(tag)"
                class="new-product-form-tags__checkbox"
            />
        </div>
    </form>
</template>
<script>
    import {defineComponent, ref} from "vue";
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
            const updateTags = (tag, isChecked) => {
                if (isChecked) {
                    checkedTags.value.push(tag);
                } else {
                    const index = checkedTags.value.indexOf(tag);
                    if (index !== -1) {
                        checkedTags.value.splice(index, 1);
                    }
                }
                console.log(checkedTags.value);
            };

            return {
                tags,
                updateTags,
                checkedTags,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/newProductFormTags/component";
</style>
