<template>
    <div class="footer">
        <div class="footer__top footer-top">
            <IconButtonInnerLink
                iconLink="/images/home-light.png"
                alt="home"
                mod="dark"
                class="footer-top__btn"
            />
            <p class="footer-top__company footer-top-company">
                <span class="footer-top-company__name">
                    {{ companyData.name.text }}
                </span>
            </p>
            <IconButtonAction
                @click="scrollTop"
                iconLink="/images/arrow-up.png"
                alt="up"
                mod="dark"
                class="footer-top__btn"
            />
        </div>
        <div class="footer__middle">
            <div class="footer__links footer-links">
                <ul class="footer-links__list">
                    <li
                        v-for="(link, linkIndex) in footerLinks"
                        :key="`footer-links-item-${linkIndex}`"
                        class="footer-links__item footer-links-item"
                    >
                        <router-link
                            :to="link.link"
                            class="footer-links-item__link"
                        >
                            {{ link.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="footer__info footer-info">
                <p class="footer-info__item footer-info-item footer-info-item--name">
                    <span class="footer-info-item__text">
                        {{ companyData.fullNmae.text }}
                    </span>
                </p>
                <p class="footer-info__item footer-info-item footer-info-item--address">
                    <span class="footer-info-item__text">
                        {{ companyData.address.text }}
                    </span>
                </p>
                <a
                    :href="getPhoneLink(companyData.tel)"
                    class="footer-info__item footer-info-item footer-info-item--tel"
                >
                    <span class="footer-info-item__text">
                        {{ companyData.tel.text }}
                    </span>
                </a>
                <a
                    :href="getEmailLink(companyData.email)"
                    class="footer-info__item footer-info-item footer-info-item--email"
                >
                    <span class="footer-info-item__text">
                        {{ companyData.email.text }}
                    </span>
                </a>
                <div class="footer-info__social footer-info-social">
                    <div class="footer-info-social__wrapper">
                        <IconButtonOuterLink
                            v-for="(social, socialIndex) in companyData.social"
                            :key="`footer-info-social-link-${socialIndex}`"
                            :to="social.link"
                            :openInNewWindow="true"
                            :iconLink="`/images/${social.name}.png`"
                            :alt="social.name"
                            mod="dark"
                            class="footer-info-social__link"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__admin">
                Администрирование
            </div>
            <div class="footer__create">
                2023 ⓒ DEVIRS
            </div>
        </div>
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import { companyData } from "./../constants/companyData";
    import { footerLinks } from "../constants/footerLinks";
    import IconButtonInnerLink from "./IconButtonInnerLink.vue";
    import IconButtonOuterLink from "./IconButtonOuterLink.vue";
    import IconButtonAction from "./IconButtonAction.vue";

    export default defineComponent({
        name: "Footer",
        components: {
            IconButtonInnerLink,
            IconButtonOuterLink,
            IconButtonAction,
        },
        setup() {
            /** Methods */
            const scrollTop = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            };
            const getPhoneLink = (tel) => tel.link ? 'tel:' + tel.text.replace(/[\s()-]/g, '') : null;
            const getEmailLink = (email) => email.link ? `mailto:${email.text}` : '';

            return {
                companyData,
                scrollTop,
                footerLinks,
                getPhoneLink,
                getEmailLink,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/footer/component";
</style>
