<template>
    <div class="offer-form-personal">
        <div class="offer-form-personal__block">
            <p class="offer-form-personal__placeholder offer-form-personal-placeholder">
                <span class="offer-form-personal-placeholder__text">
                    Ваше имя
                </span>
            </p>
            <input
                type="text"
                v-model="nameValue"
                class="offer-form-personal__input"
            >
        </div>
        <div class="offer-form-personal__block">
            <p class="offer-form-personal__placeholder offer-form-personal-placeholder">
                <span class="offer-form-personal-placeholder__text">
                    Телефон
                </span>
            </p>
            <input
                type="text"
                @input="formatPhoneNumber"
                @keydown="deleteActionOnBtn"
                placeholder="# ### ### ##-##"
                v-model="phoneValue"
                class="offer-form-personal__input"
            >
        </div>
        <div class="offer-form-personal__block">
            <p class="offer-form-personal__placeholder offer-form-personal-placeholder">
                <span class="offer-form-personal-placeholder__text">
                    Почта
                </span>
            </p>
            <input
                type="email"
                v-model="emailValue"
                class="offer-form-personal__input"
            >
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref, watch, unref } from "vue";

export default defineComponent({
    name: "OfferFormPersonal",
    setup() {
        /** Vars */
        const nameValue = ref('');
        const phoneValue = ref('');
        const phonePastValue = ref('');
        const emailValue = ref('');

        /** Methods */
        const formatPhoneNumber = (event) => {
            let input = phoneValue.value.replace(/\D/g, '').substring(0, 11); // Удалить все не цифры и ограничить ввод 11 символами

            const firstPart = input.substring(0, 1); // Первая цифра
            const middlePart1 = input.substring(1, 4); // Три цифры после первой
            const middlePart2 = input.substring(4, 7); // Три цифры после первых четырех
            const lastPart1 = input.substring(7, 9); // Две цифры после первых семи
            const lastPart2 = input.substring(9); // Оставшиеся цифры

            if (input.length > 9) {
                phoneValue.value = `${firstPart} ${middlePart1} ${middlePart2} ${lastPart1}-${lastPart2}`;
            } else if (input.length > 6) {
                phoneValue.value = `${firstPart} ${middlePart1} ${middlePart2} ${lastPart1}`;
            } else if (input.length > 3) {
                phoneValue.value = `${firstPart} ${middlePart1} ${middlePart2}`;
            } else if (input.length > 1) {
                phoneValue.value = `${firstPart} ${middlePart1}`;
            } else if (input.length > 0) {
                phoneValue.value = `${firstPart}`;
            } else {
                phoneValue.value = '';
            }
        };

        const deleteActionOnBtn = (event) => {
            if (event.keyCode === 8) {
                // event.preventDefault();
                console.log(event);
            }
        };

        watch(phoneValue, (newVal, oldVal) => {
            console.log(oldVal + ' - ' + newVal);
        });

        return {
            nameValue,
            phoneValue,
            emailValue,
            formatPhoneNumber,
            deleteActionOnBtn,
        };
    },
});
</script>

<style scoped lang="scss">
@import "../../scss/components/offerFormPersonal/component";
</style>
