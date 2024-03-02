<template>
    <div class="offer-form">
        <FieldForm
            label="Место"
            required
            class="offer-form__block"
        >
            <template #customInput>
                <div class="offer-form__field offer-form__field--place">
                    <input
                        type="text"
                        v-model="placeValue"
                        readonly
                        required
                        class="offer-form__input"
                    >
                    <button
                        type="button"
                        class="offer-form__btn offer-form-btn"
                    >
                        <span class="offer-form-btn__text">
                            QR-code
                        </span>
                    </button>
                </div>
            </template>
        </FieldForm>
        <FieldForm
            label="Комментарий"
            class="offer-form__block"
        >
            <template #customInput>
                <div class="offer-form__field offer-form__field--comment">
                    <textarea
                        v-model="commentValue"
                        class="offer-form__input"
                    ></textarea>
                </div>
            </template>
        </FieldForm>
        <div class="offer-form__block">
            <CheckboxForm
                @updateCheckboxValue="updateSubmittingOrder"
                id="check1"
                value="Pack with you"
                label="Упаковать с собой"
                name="submittingOrder"
                class="offer-form__checkbox"
                :isMultiple="false"
            />
            <CheckboxForm
                @updateCheckboxValue="updateSubmittingOrder"
                id="check2"
                value="Take out when ready"
                label="Выносить по готовности"
                name="submittingOrder"
                :checked="true"
                :isMultiple="false"
                isNote
                class="offer-form__checkbox"
            />
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref } from "vue";
    import {placeNum} from "../constants";
    import FieldForm from "./FieldForm.vue";
    import CheckboxForm from "./CheckboxForm.vue";

    export default defineComponent({
        name: "OfferForm",
        components: {
            FieldForm,
            CheckboxForm,
        },
        setup() {
            /** Vars */
            const placeValue = ref(placeNum);
            const commentValue = ref('');
            const submittingOrder = ref('Take out when ready');

            /** Methods */
            const updateSubmittingOrder = (value) => {
                submittingOrder.value = value;
            };

            return {
                placeValue,
                commentValue,
                updateSubmittingOrder,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/offerForm/component";
</style>
