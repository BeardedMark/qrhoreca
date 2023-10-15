<template>
    <div class="offer-form">
        <div class="offer-form__block offer-form__block--is-required">
            <p class="offer-form__placeholder offer-form-placeholder">
                <span class="offer-form-placeholder__text">
                    Место
                </span>
            </p>
            <div class="offer-form__field">
                <input
                    type="text"
                    v-model="placeValue"
                    readonly
                    required
                    class="offer-form__input offer-form__input--place"
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
        </div>
        <div class="offer-form__block">
            <p class="offer-form__placeholder offer-form-placeholder">
                <span class="offer-form-placeholder__text">
                    Комментарий
                </span>
            </p>
            <textarea
                v-model="commentValue"
                class="offer-form__input offer-form__input--comment"
            ></textarea>
        </div>
        <div class="offer-form__block">
            <div class="offer-form__checkbox offer-form-checkbox">
                <input
                    type="radio"
                    id="check1"
                    value="packWithYou"
                    v-model="checkboxValue"
                    class="offer-form-checkbox__input"
                />
                <label
                    for="check1"
                    class="offer-form-checkbox__label"
                >
                    Упаковать с собой
                </label>
            </div>
            <div class="offer-form__checkbox offer-form-checkbox">
                <input
                    type="radio"
                    id="check2"
                    value="takeOutWhenReady"
                    v-model="checkboxValue"
                    class="offer-form-checkbox__input"
                />
                <label
                    for="check2"
                    class="offer-form-checkbox__label offer-form-checkbox__label--has-note"
                >
                    Выносить по готовности
                </label>
            </div>
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref } from "vue";
    import {placeNum} from "../constants";

    export default defineComponent({
        name: "OfferForm",
        setup() {
            const placeValue = ref(placeNum);
            const commentValue = ref('');
            const checkboxValue = ref(null);

            return {
                placeValue,
                commentValue,
                checkboxValue,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/offerForm/component";
</style>
