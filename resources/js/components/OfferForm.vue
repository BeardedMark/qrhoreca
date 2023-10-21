<template>
    <div class="offer-form">
        <div class="offer-form__block offer-form__block--is-required">
            <p class="offer-form__placeholder offer-form-placeholder">
                <span class="offer-form-placeholder__text">
                    Место
                </span>
            </p>
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
        </div>
        <div class="offer-form__block">
            <p class="offer-form__placeholder offer-form-placeholder">
                <span class="offer-form-placeholder__text">
                    Комментарий
                </span>
            </p>
            <div class="offer-form__field offer-form__field--comment">
                <textarea
                    v-model="commentValue"
                    class="offer-form__input"
                ></textarea>
            </div>
        </div>
        <div class="offer-form__block">
            <div class="offer-form__checkbox offer-form-checkbox">
                <input
                    type="checkbox"
                    id="check1"
                    value="packWithYou"
                    v-model="packWithYou"
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
                    type="checkbox"
                    id="check2"
                    value="takeOutWhenReady"
                    v-model="takeOutWhenReady"
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
    import { defineComponent, ref, watch } from "vue";
    import {placeNum} from "../constants";

    export default defineComponent({
        name: "OfferForm",
        setup() {
            /** Vars */
            const placeValue = ref(placeNum);
            const commentValue = ref('');
            const packWithYou = ref(false);
            const takeOutWhenReady = ref(false);

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
                packWithYou,
                takeOutWhenReady,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/offerForm/component";
</style>
