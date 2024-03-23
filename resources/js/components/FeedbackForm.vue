<template>
    <div class="feedback-form">
        <div class="feedback-form__body">
            <FieldForm
                label="Сообщение"
                class="feedback-form__block"
            >
                <template #customInput>
                    <div class="feedback-form__field">
                    <textarea
                        v-model="comments"
                        class="feedback-form__input"
                    ></textarea>
                    </div>
                </template>
            </FieldForm>
            <FieldForm
                @updateInputValue="updateNameValue"
                label="Ваше имя"
                class="feedback-form__block"
            />
            <FieldForm
                @updateInputValue="updatePhoneValue"
                type="tel"
                label="Телефон"
                required
                class="feedback-form__block"
            />
            <FieldForm
                @updateInputValue="updateEmailValue"
                type="email"
                label="Почта"
                required
                class="feedback-form__block"
            />
            <CheckboxForm
                @updateCheckboxValue="updateCheckboxValue"
                id="check1"
                value="User agrees with the privacy policy"
                required
                checked
                class="feedback-form__checkbox feedback-form-checkbox"
            >
                Я согласен с <a class="feedback-form-checkbox__link" href="#">Политикой конфидициальности</a>
            </CheckboxForm>
        </div>
        <div class="feedback-form__btns">
            <button
                @click="backPage"
                type="button"
                class="feedback-form__back feedback-form-back"
            >
                <span class="feedback-form-back__text">
                    Отмена
                </span>
            </button>
            <Button
                @click="onSendClick"
                theme="light"
                class="feedback-form__send"
            >
                Отправить
            </Button>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from "vue";
    import {useRouter} from "vue-router";
    import FieldForm from "./FieldForm.vue";
    import CheckboxForm from "./CheckboxForm.vue";
    import Button from "./Button.vue";

    export default defineComponent({
        name: "FeedbackForm",
        components: {
            FieldForm,
            CheckboxForm,
            Button,
        },
        setup() {
            /** Vars */
            const comments = ref('');
            const nameValue = ref('');
            const phoneValue = ref('');
            const emailValue = ref('');
            const agreement = ref(true);

            /** Features */
            const router = useRouter();

            /** Methods */
            const updateNameValue = (value) => {
                nameValue.value = value;
            };
            const updatePhoneValue = (value) => {
                phoneValue.value = value;
            };
            const updateEmailValue = (value) => {
                emailValue.value = value;
            };
            const updateCheckboxValue = (value) => {
                agreement.value = value;
            };
            const backPage = () => {
                router.back();
            };
            const onSendClick = () => {
                alert('Отправить');
            };

            return {
                updateNameValue,
                updatePhoneValue,
                updateEmailValue,
                updateCheckboxValue,
                comments,
                onSendClick,
                backPage,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/feedbackForm/component";
</style>
