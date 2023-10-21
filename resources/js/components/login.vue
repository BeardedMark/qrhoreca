<template>
    <div class="login">
        <div class="login__container">
            <div class="login__top">
                <h1 class="login__title login-title">
                    <span class="login-title__text">
                        Вход
                    </span>
                </h1>
                <p class="login__subtitle login-subtitle">
                    <span class="login-subtitle__text">
                        Если у вас еще нет данных для доступа, то вы можете пройти процесс
                        <router-link
                            to="/registration"
                            class="login-subtitle__link"
                        >
                            Регистрации
                        </router-link>
                        личного профиля
                    </span>
                </p>
            </div>
            <LoginForm class="login__form" />
            <div class="login__btns">
                <router-link
                    to="/registration"
                    class="login__reg login-reg"
                >
                    <span class="login-reg__text">
                        Регистрация
                    </span>
                </router-link>
                <Button
                    @click="onAuthClick"
                    theme="light"
                    class="login__auth"
                >
                    Войти
                </Button>
            </div>
            <Separator class="login__separator" />
            <Info
                linkName="Служба поддержки"
                link="/support"
                class="login__info"
            >
                <template #Помощь>
                    Если вы забыли данные для входа то обратитесь к службе поддержки
                </template>
                <template #text>
                    Если вы забыли данные для входа то обратитесь к службе поддержки
                </template>
            </Info>
        </div>
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import LoginForm from "./loginForm.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";
    import Button from "./Button";

    export default defineComponent({
        name: "Login",
        components: {
            Button,
            LoginForm,
            Separator,
            Info,
        },
        setup() {
            /** Methods */
            const onAuthClick = () => {
                alert('Вход');
            };

            return {
                onAuthClick,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/login/component";
</style>
