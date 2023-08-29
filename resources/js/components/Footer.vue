<template>
    <div class="footer">
        <div class="footer__top footer-top">
            <a 
                href="/"
                class="footer-top__btn footer-top-btn"
            >
                <picture class="footer-top-btn__image footer-top-btn-image">
                    <img 
                        :src="`./images/home.png`" 
                        alt="home"
                        class="footer-top-btn__img"
                    />
                </picture>
            </a>
            <p class="footer-top__company footer-top-company">
                <span class="footer-top-company__name">
                    {{ companyData.name }}
                </span>
            </p>
            <button 
                @click="scrollTop"
                type="button"
                class="footer-top__btn footer-top-btn"
            >
                <picture class="footer-top-btn__image footer-top-btn-image">
                    <img 
                        :src="`./images/arrow-up.png`" 
                        alt="up"
                        class="footer-top-btn__img"
                    />
                </picture>
            </button>
        </div>
        <div class="footer__middle"></div>
        <div class="footer__bottom"></div>
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import { companyData } from "./../constants/companyData";

    export default defineComponent({
        name: "Footer",
        setup() {
            /** Methods */
            const scrollTop = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            };

            return {
                companyData,
                scrollTop,
            };
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/components/footer/component";
</style>