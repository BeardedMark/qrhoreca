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
                <component
                    v-for="(profileLink, profileLinkIndex) in profileLinks"
                    :key="`profile-links-item-${profileLinkIndex}`"
                    :is="getLinkTag(profileLink.isLink)"
                    :to="profileLink.link"
                    @click="profileLink.onClickAction"
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
                </component>
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
    import {isАuthorizedUser} from "../constants/storeGetters";
    import Separator from "./Separator";
    import Info from "./Info";
    import {siteStore} from "../constants/store";

    export default defineComponent({
        name: "Profile",
        components: {
            Info,
            Separator,
        },
        setup() {
            /** Features */
            const router = useRouter();

            /** Methods */
            const getLinkTag = (isLink) => isLink ? 'router-link' : 'button';
            const logOut = () => {
                unref(siteStore).logOut();
                router.push('/');
            };

            /** Vars */
            const profileLinksLists = [
                [
                    {
                        page: 'Новая категория',
                        link: '/new-category',
                        icon: 'add-category',
                        isLink: true,
                    },
                    {
                        page: 'Новое предложение',
                        link: '/new-product',
                        icon: 'add-offer',
                        isLink: true,
                    },
                ],
                [
                    {
                        page: 'Данные компании',
                        link: '/company-data',
                        icon: 'company-data',
                        isLink: true,
                    },
                    {
                        page: 'Метки предложений',
                        link: '/tags',
                        icon: 'tags',
                        isLink: true,
                    },
                    {
                        page: 'Быстрый поиск',
                        link: '/quick-search',
                        icon: 'quick-search',
                        isLink: true,
                    },
                ],
                [
                    {
                        page: 'Сменить пароль',
                        link: '/',
                        icon: 'password-icon',
                        isLink: true,
                    },
                    {
                        page: 'Сменить почту',
                        link: '/',
                        icon: 'email-icon',
                        isLink: true,
                    },
                    {
                        page: 'Выйти из профиля',
                        link: '/',
                        icon: 'exit',
                        mod: 'red',
                        isLink: false,
                        onClickAction: () => {
                            logOut();
                        },
                    },
                ],
            ];



            /** Life cycles */
            onBeforeMount(() => {
                if(!unref(isАuthorizedUser)) {
                    router.push('/login');
                }
            });

            return {
                profileLinksLists,
                getLinkTag,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/profile/component";
</style>
