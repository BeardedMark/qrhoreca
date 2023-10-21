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
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        name: "LoginForm",
        setup() {
            const loginValue = ref('');
            const passwordValue = ref('');

            return {
                loginValue,
                passwordValue,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/loginForm/component";
</style>
