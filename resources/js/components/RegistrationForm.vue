<template>
    <div class="registration-form">
        <div class="registration-form__block registration-form__block--is-required">
            <p class="registration-form__placeholder registration-form-placeholder">
                <span class="registration-form-placeholder__text">
                    Логин
                </span>
            </p>
            <div class="registration-form__field">
                <input
                    @input="changeInputValue"
                    type="text"
                    v-model="loginValue"
                    required
                    class="registration-form__input"
                >
            </div>
        </div>
        <div class="registration-form__block registration-form__block--is-required">
            <p class="registration-form__placeholder registration-form-placeholder">
                <span class="registration-form-placeholder__text">
                    Почта
                </span>
            </p>
            <div class="registration-form__field">
                <input
                    @input="changeInputValue"
                    type="text"
                    v-model="emailValue"
                    required
                    class="registration-form__input"
                >
            </div>
        </div>
        <div class="registration-form__block registration-form__block--is-required">
            <p class="registration-form__placeholder registration-form-placeholder">
                <span class="registration-form-placeholder__text">
                    Пароль
                </span>
            </p>
            <div class="registration-form__field">
                <input
                    @input="changeInputValue"
                    type="password"
                    v-model="passwordValue1"
                    required
                    class="registration-form__input"
                >
            </div>
        </div>
        <div class="registration-form__block registration-form__block--is-required">
            <p class="registration-form__placeholder registration-form-placeholder">
                <span class="registration-form-placeholder__text">
                    Повтор пароля
                </span>
            </p>
            <div class="registration-form__field">
                <input
                    @input="changeInputValue"
                    type="password"
                    v-model="passwordValue2"
                    required
                    class="registration-form__input"
                >
            </div>
        </div>
    </div>
</template>
<script>
    import { defineComponent, ref, unref} from "vue";

    export default defineComponent({
        name: "RegistrationForm",
        setup(_, {emit}) {
            /** Vars */
            const loginValue = ref('');
            const emailValue = ref('');
            const passwordValue1 = ref('');
            const passwordValue2 = ref('');

            /** Methods */
            const changeInputValue = () => {
                loginValue.value = unref(loginValue).replace(/\s/g, '');
                emailValue.value = unref(emailValue).replace(/\s/g, '');
                passwordValue1.value = unref(passwordValue1).replace(/\s/g, '');
                passwordValue2.value = unref(passwordValue2).replace(/\s/g, '');

                if(!!unref(loginValue) && !!unref(emailValue) && !!unref(passwordValue1) && !!unref(passwordValue2)) {
                    emit('formIsFilled');
                } else {
                    emit('formIsNotFilled');
                }
            };


            return {
                loginValue,
                emailValue,
                passwordValue1,
                passwordValue2,
                changeInputValue,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/registrationForm/component";
</style>
