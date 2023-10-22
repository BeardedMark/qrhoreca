<template>
    <div class="profile">
        <div class="profile__container">
            <div class="profile__top">
                <h1 class="profile__title profile-title">
                    <span class="profile-title__text">
                        Админпанель
                    </span>
                </h1>
                <p class="profile__subtitle profile-subtitle">
                    <span class="profile-subtitle__text">
                        Профиль: admin (admin@gmail.com)
                    </span>
                </p>
                <p class="profile__subtitle profile-subtitle">
                    <span class="profile-subtitle__text">
                        Токен: ea135929105c4f29a0f5117d2960926f
                    </span>
                </p>
            </div>
            <div
                v-for="(profileLinks, profileLinksIndex) in profileLinksLists"
                :key="`profile-links-${profileLinksIndex}`"
                class="profile__links profile-links"
            >
                <router-link
                    v-for="(profileLink, profileLinkIndex) in profileLinks"
                    :key="`profile-links-item-${profileLinkIndex}`"
                    :to="profileLink.link"
                    class="profile-links__item profile-links-item"
                >
                    <picture class="profile-links-item__icon profile-links-item-icon">
                        <img
                            :src="`images/${profileLink.icon}.png`"
                            alt="icon"
                            class="profile-links-item-icon__img"
                        >
                    </picture>
                    <p
                        class="profile-links-item__page profile-links-item-page"
                        :class="{[`profile-links-item-page--is-${profileLink.mod}`]: profileLink.mod}"
                    >
                        <span class="profile-links-item-page__text">
                            {{ profileLink.page }}
                        </span>
                    </p>
                </router-link>
            </div>
            <Separator class="profile__separator" />
            <Info
                linkName="Служба поддержки"
                link="/support"
                class="profile__info"
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
    import {defineComponent, onBeforeMount, unref} from "vue";
    import {useRouter} from "vue-router";
    import {userId} from "../constants/storeGetters";
    import Separator from "./Separator";
    import Info from "./Info";

    export default defineComponent({
        name: "Profile",
        components: {
            Info,
            Separator,
        },
        setup() {
            /** Vars */
            const profileLinksLists = [
                [
                    {
                        page: 'Новая категория',
                        link: '/category-form',
                        icon: 'add-category',
                    },
                    {
                        page: 'Новое предложение',
                        link: '/offer-form',
                        icon: 'add-offer',
                    },
                ],
                [
                    {
                        page: 'Данные компании',
                        link: '/',
                        icon: 'company-data',
                    },
                    {
                        page: 'Метки предложений',
                        link: '/',
                        icon: 'tags',
                    },
                    {
                        page: 'Быстрый поиск',
                        link: '/',
                        icon: 'quick-search',
                    },
                ],
                [
                    {
                        page: 'Сменить пароль',
                        link: '/',
                        icon: 'password-icon',
                    },
                    {
                        page: 'Сменить почту',
                        link: '/',
                        icon: 'email-icon',
                    },
                    {
                        page: 'Выйти из профиля',
                        link: '/',
                        icon: 'exit',
                        mod: 'red',
                        hasLink: false,
                    },
                ],
            ];

            /** Features */
            const router = useRouter();

            /** Life cycles */
            onBeforeMount(() => {
                if(!unref(userId)) {
                    router.push('/login');
                }
            });

            return {
                profileLinksLists,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "../../scss/components/profile/component";
</style>
