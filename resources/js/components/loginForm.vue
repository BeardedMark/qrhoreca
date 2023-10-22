<template>
    <div class="login-form">
        <div class="login-form__block login-form__block--is-required">
            <p class="login-form__placeholder login-form-placeholder">
                <span class="login-form-placeholder__text">
                    Логин
                </span>
            </p>
            <div class="login-form__field">
                <input
                    @input="changeInputValue"
                    type="text"
                    v-model="loginValue"
                    required
                    class="login-form__input"
                >
            </div>
        </div>
        <div class="login-form__block login-form__block--is-required">
            <p class="login-form__placeholder login-form-placeholder">
                <span class="login-form-placeholder__text">
                    Пароль
                </span>
            </p>
            <div class="login-form__field">
                <input
                    @input="changeInputValue"
                    type="password"
                    v-model="passwordValue"
                    required
                    class="login-form__input"
                >
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent, ref, unref} from "vue";

    export default defineComponent({
        name: "LoginForm",
        setup(_, {emit}) {
            /** Vars */
            const loginValue = ref('');
            const passwordValue = ref('');

            /** Methods */
            const changeInputValue = () => {
                loginValue.value = unref(loginValue).replace(/\s/g, '');
                passwordValue.value = unref(passwordValue).replace(/\s/g, '');

                if(!!unref(loginValue) && !!unref(passwordValue)) {
                    emit('formIsFilled');
                } else {
                    emit('formIsNotFilled');
                }
            };

            return {
                loginValue,
                passwordValue,
                changeInputValue,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/loginForm/component";
</style>
