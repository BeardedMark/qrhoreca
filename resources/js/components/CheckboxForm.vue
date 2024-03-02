<template>
    <div
        class="checkbox-form"
        :class="checkboxClasses"
    >
        <input
            @change="updateCheckboxValue"
            v-model="toggleCheckbox"
            :type="inputType"
            :name="name"
            :id="id"
            :required="required"
            :value="value"
            :checked="toggleCheckbox"
            class="checkbox-form__input"
        />
        <label
            :for="id"
            class="checkbox-form__label"
        >
            {{ label }}
            <slot></slot>
        </label>
    </div>
</template>

<script>
    import {computed, defineComponent, toRefs, unref, ref} from "vue";

    export default defineComponent({
        name: 'CheckboxForm',
        props: {
            id: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                default: '',
            },
            required: {
                type: Boolean,
                default: false,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            value: {
                type: String,
                default: '',
            },
            isNote: {
                type: Boolean,
                default: false,
            },
            isMultiple: {
                type: Boolean,
                default: true,
            },
            name: {
                type: String,
                default: '',
            },
        },
        setup(props, {emit}) {
            /** Vars */
            const {required, checked, isNote, isMultiple} = toRefs(props);
            const toggleCheckbox = ref(unref(checked));

            /** Computed */
            const inputType = computed(() => unref(isMultiple) ? 'checkbox' : 'radio');
            const checkboxClasses = computed(() => ({
                'checkbox-form--is-required': unref(required),
                'checkbox-form--is-note': unref(isNote),
            }));

            /** Methods */
            const updateCheckboxValue = () => {
                emit('updateCheckboxValue', toggleCheckbox.value);
            };

            return {
                checkboxClasses,
                updateCheckboxValue,
                toggleCheckbox,
                inputType,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/checkboxForm/component";
</style>
