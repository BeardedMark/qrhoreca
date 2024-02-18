<template>
    <div class="registration-form">
        <FieldForm
            @updateInputValue="updateLoginValue"
            label="Логин"
            required
            noSpaces
            class="registration-form__block"
        />
        <FieldForm
            @updateInputValue="updateEmailValue"
            label="Почта"
            type="email"
            required
            noSpaces
            class="registration-form__block"
        />
        <FieldForm
            @updateInputValue="updatePasswordValue1"
            label="Пароль"
            type="password"
            required
            noSpaces
            class="registration-form__block"
        />
        <FieldForm
            @updateInputValue="updatePasswordValue2"
            label="Повтор пароля"
            type="password"
            required
            noSpaces
            class="registration-form__block"
        />
    </div>
</template>
<script>
    import { defineComponent, ref, unref} from "vue";
    import FieldForm from "./FieldForm.vue";

    export default defineComponent({
        name: "RegistrationForm",
        components: {FieldForm},
        setup(_, {emit}) {
            /** Vars */
            const loginValue = ref('');
            const emailValue = ref('');
            const passwordValue1 = ref('');
            const passwordValue2 = ref('');

            /** Methods */
            const changeInputValue = () => {
                if(!!unref(loginValue) && !!unref(emailValue) && !!unref(passwordValue1) && !!unref(passwordValue2)) {
                    emit('formIsFilled');
                } else {
                    emit('formIsNotFilled');
                }
            };
            const updateLoginValue = (value) => {
                loginValue.value = value;
                changeInputValue();
            };
            const updateEmailValue = (value) => {
                emailValue.value = value;
                changeInputValue();
            };
            const updatePasswordValue1 = (value) => {
                passwordValue1.value = value;
                changeInputValue();
            };
            const updatePasswordValue2 = (value) => {
                passwordValue2.value = value;
                changeInputValue();
            };

            return {
                changeInputValue,
                updateLoginValue,
                updateEmailValue,
                updatePasswordValue1,
                updatePasswordValue2,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/registrationForm/component";
</style>
