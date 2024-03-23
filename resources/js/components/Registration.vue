<template>
    <div class="registration">
        <div class="registration__container">
            <div class="registration__top">
                <h1 class="registration__title registration-title">
                    <span class="registration-title__text">
                        Регистрация
                    </span>
                </h1>
                <p class="registration__subtitle registration-subtitle">
                    <span class="registration-subtitle__text">
                        Если у вас уже есть данные для доступа, то вы можете использовать их для
                        <router-link
                            to="/login"
                            class="registration-subtitle__link"
                        >
                            Входа
                        </router-link>
                        в личный профиль
                    </span>
                </p>
                <p class="registration__subtitle registration-subtitle">
                    <span class="registration-subtitle__text">
                        Регистрируясь на сайте, вы автоматически подтверждаете свое согласие с
                        <router-link
                            to="/agreement"
                            class="registration-subtitle__link"
                        >
                            Пользовательским соглашением
                        </router-link>
                    </span>
                </p>
            </div>
            <RegistrationForm
                class="registration__form"
                @formIsFilled="regFormIsFilled"
                @formIsNotFilled="regFormIsNotFilled"
            />
            <div class="registration__btns">
                <router-link
                    to="/login"
                    class="registration__login registration-login"
                >
                    <span class="registration-login__text">
                        Войти
                    </span>
                </router-link>
                <Button
                    @click="onRegistrationClick"
                    :disabled="isDisabledRegBtn"
                    theme="light"
                    class="registration__reg"
                >
                    Регистрация
                </Button>
            </div>
            <Separator class="registration__separator" />
            <Info
                linkName="Служба поддержки"
                link="/support"
                class="registration__info"
            >
                <template #title>
                    Помощь
                </template>
                <template #text>
                    Если вы забыли данные для входа то обратитесь к службе поддержки
                </template>
            </Info>
        </div>
    </div>
</template>
<script>
    import {defineComponent, onBeforeMount, ref, unref} from "vue";
    import RegistrationForm from "./RegistrationForm";
    import Separator from "./Separator";
    import Info from "./Info";
    import Button from "./Button";
    import {isАuthorizedUser} from "../constants/storeGetters";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "Registration",
        components: {
            RegistrationForm,
            Separator,
            Info,
            Button,
        },
        setup() {
            /** Vars */
            const isDisabledRegBtn = ref(true);

            /** Features */
            const router = useRouter();

            /** Methods */
            const onRegistrationClick = () => {
                alert('Зарегистрироваться');
            };

            const regFormIsFilled = () => {
                isDisabledRegBtn.value = false;
            };

            const regFormIsNotFilled = () => {
                isDisabledRegBtn.value = true;
            };

            /** Life cycles */
            onBeforeMount(() => {
                if(unref(isАuthorizedUser)) {
                    router.push('/profile');
                }
            });

            return {
                onRegistrationClick,
                isDisabledRegBtn,
                regFormIsFilled,
                regFormIsNotFilled,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/registration/component";
</style>
