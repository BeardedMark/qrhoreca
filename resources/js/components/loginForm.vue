<template>
    <div class="login-form">
        <FieldForm
            @updateInputValue="updateLoginValue"
            label="Логин"
            required
            noSpaces
            class="login-form__block"
        />
        <FieldForm
            @updateInputValue="updatePasswordValue"
            label="Пароль"
            type="password"
            required
            noSpaces
            class="login-form__block"
        />
    </div>
</template>
<script>
import {defineComponent, ref, unref} from "vue";
import FieldForm from "./FieldForm.vue";

    export default defineComponent({
        name: "LoginForm",
        components: {FieldForm},
        setup(_, {emit}) {
            /** Vars */
            const loginValue = ref('');
            const passwordValue = ref('');

            /** Methods */
            const changeInputValue = () => {
                if(!!unref(loginValue) && !!unref(passwordValue)) {
                    emit('formIsFilled');
                } else {
                    emit('formIsNotFilled');
                }
            };

            const updateLoginValue = (value) => {
                loginValue.value = value;
                changeInputValue();
            };
            const updatePasswordValue = (value) => {
                passwordValue.value = value;
                changeInputValue();
            };

            return {
                changeInputValue,
                updateLoginValue,
                updatePasswordValue,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/loginForm/component";
</style>
