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
                @updateCheckboxValue="updateCheckboxValue1"
                id="check1"
                value="Pack with you"
                label="Упаковать с собой"
                class="offer-form__checkbox"
            />
            <CheckboxForm
                @updateCheckboxValue="updateCheckboxValue2"
                id="check2"
                value="Take out when ready"
                label="Выносить по готовности"
                isNote
                checked
                class="offer-form__checkbox"
            />
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref, watch } from "vue";
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
            const packWithYou = ref(false);
            const takeOutWhenReady = ref(false);

            /** Methods */
            const updateCheckboxValue1 = (value) => {
                packWithYou.value = value;
            };
            const updateCheckboxValue2 = (value) => {
                takeOutWhenReady.value = value;
            };

            /** Watchers */
            watch(packWithYou, (newValue) => {
                if(newValue) {
                    takeOutWhenReady.value = false;
                }
            });

            watch(takeOutWhenReady, (newValue) => {
                if(newValue) {
                    packWithYou.value = false;

                }
            });

            return {
                placeValue,
                commentValue,
                updateCheckboxValue1,
                updateCheckboxValue2,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/offerForm/component";
</style>
