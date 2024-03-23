<template>
    <div class="contacts">
        <div class="contacts__top">
            <h1 class="contacts__title contacts-title">
                <span class="contacts-title__text">
                    Контакты
                </span>
            </h1>
            <p class="contacts__subtitle contacts-subtitle">
                <span class="contacts-subtitle__text">
                    Ресторан на ул. Выборная 158/1
                </span>
            </p>
        </div>
        <div class="contacts__block">
            <a
                v-for="(item, itemIndex) in contactsList1"
                :key="`contacts-item-${itemIndex}`"
                :href="item.link"
                target="_blank"
                class="contacts__item contacts-item"
            >
                <picture class="contacts-item__icon contacts-item-icon">
                    <img
                        :src="`images/${item.icon}.png`"
                        alt="icon"
                        class="contacts-item-icon__img"
                    >
                </picture>
                <p class="contacts-item__text">
                    {{ item.text }}
                </p>
            </a>
        </div>
        <div class="contacts__block">
            <div class="contacts__map contacts-map">
                <iframe
                    class="contacts-map__frame"
                    :src="address.map"
                    frameborder="0"
                ></iframe>
            </div>
            <div class="contacts__address contacts-address">
                <picture class="contacts-address__image">
                    <img
                        :src="`images/${address.icon}.png`"
                        alt="icon"
                        class="contacts-address__icon"
                    >
                </picture>
                <p class="contacts-address__location contacts-address-location">
                    <span class="contacts-address-location__text">
                        {{ address.text }}
                    </span>
                </p>
            </div>
        </div>
        <div class="contacts__block">
            <a
                v-for="(item, itemIndex) in contactsList2"
                :key="`contacts-item-${itemIndex}`"
                :href="item.link"
                target="_blank"
                class="contacts__item contacts-item"
            >
                <picture class="contacts-item__icon contacts-item-icon">
                    <img
                        :src="`images/${item.icon}.png`"
                        alt="icon"
                        class="contacts-item-icon__img"
                    >
                </picture>
                <p class="contacts-item__text">
                    {{ item.text }}
                </p>
            </a>
        </div>
        <Button
            @click="onWriteClick"
            theme="light"
            class="contacts__btn"
        >
            Написать нам
        </Button>
        <Separator class="contacts__separator" />
        <Info
            linkName="Контакты"
            link="/contacts"
            class="contacts__info"
        >
            <template #title>
                Подробности
            </template>
            <template #text>
                Все детали или интересующие вас вопросы по блюду вы можете задать нашим сотрудникам
            </template>
        </Info>
    </div>
</template>

<script>
    import { defineComponent } from "vue";
    import Info from "./Info.vue";
    import Separator from "./Separator.vue";
    import Button from "./Button.vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "Contacts",
        components: {
            Info,
            Separator,
            Button,
        },
        setup() {
            /** Vars */
            const contactsList = {
                phone: {
                    text: '8 (913) 920-84-05',
                    link: 'tel:89139208405',
                    icon: 'contacts-dark',
                },
                email: {
                    text: 'paradise@gmail.com',
                    link: 'mailto:paradise@gmail.com',
                    icon: 'email-icon',
                },
                address: {
                    text: 'Новосибирск, ул. Выборная 158/1',
                    icon: 'location',
                    map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Acb020bb0367e3f893fdfcbea9961c6e64042b4a6bd9d9641fbf3d57c19e464ad&amp;source=constructor',
                },
                wa: {
                    text: 'WhatsApp',
                    link: 'https://wa.me/89139208405',
                    icon: 'wa',
                },
                tg: {
                    text: 'Telegram',
                    link: '',
                    icon: 'tg',
                },
                inst: {
                    text: 'Instagram',
                    link: '',
                    icon: 'inst',
                },
                vk: {
                    text: 'ВКонтакте',
                    link: '',
                    icon: 'vk',
                },
                site: {
                    text: 'Веб-сайт',
                    link: '',
                    icon: 'web',
                },
            };
            const contactsList1 = [contactsList.phone, contactsList.email];
            const contactsList2 = [contactsList.wa, contactsList.tg, contactsList.inst, contactsList.vk, contactsList.site];
            const address = contactsList.address;

            /** Features */
            const router = useRouter();

            /** Methods */
            const onWriteClick = () => {
                router.push('/feedback');
            };

            return {
                contactsList1,
                contactsList2,
                address,
                onWriteClick,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/contacts/component";
</style>
