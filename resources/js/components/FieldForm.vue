<template>
    <div
        class="field-form"
        :class="fieldClasses"
    >
        <p
            v-if="label"
            class="field-form__placeholder field-form-placeholder"
        >
            <span class="field-form-placeholder__text">
                {{ label }}
            </span>
        </p>
        <slot
            v-if="$slots.customInput"
            name="customInput"
        ></slot>
        <div
            v-else
            class="field-form__field"
        >
            <input
                @input="updateInputValue"
                v-model="inputValue"
                :type="type"
                :required="required"
                :placeholder="placeholder"
                class="field-form__input"
            >
        </div>
    </div>
</template>

<script>
    import {computed, defineComponent, toRefs, unref, ref} from "vue";

    export default defineComponent({
        name: 'FieldForm',
        props: {
            label: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: 'text',
            },
            required: {
                type: Boolean,
                default: false,
            },
            noSpaces: {
                type: Boolean,
                default: false,
            },
            placeholder: {
                type: String,
                default: '',
            },
        },
        setup(props, {emit}) {
            /** Vars */
            const {required, noSpaces}= toRefs(props);
            const inputValue = ref('');

            /** Computed */
            const fieldClasses = computed(() => ({
                'field-form--is-required': unref(required),
            }));

            /** Methods */
            const updateInputValue = () => {
                if(noSpaces) {
                    inputValue.value = unref(inputValue).replace(/\s/g, '');
                }

                emit('updateInputValue', inputValue.value);
            };

            return {
                fieldClasses,
                inputValue,
                updateInputValue,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/fieldForm/component";
</style>
