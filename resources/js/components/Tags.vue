<template>
    <div class="tags">
        <div class="tags__top">
            <h1 class="tags__title tags-title">
                <span class="tags-title__text">
                    Метки предложений
                </span>
            </h1>
            <p class="tags__subtitle tags-subtitle">
                <span class="tags-subtitle__text">
                    Введите варианты для быстрого поиска по каталогу
                </span>
            </p>
        </div>
        <div class="tags__list">
            <div
                v-for="(tag, tagIndex) in indicators"
                :key="`tag-${tagIndex}`"
                class="tags__item tag"
            >
                <picture class="tag__picture">
                    <img
                        :src="`/images/${tag.icon}`"
                        :alt="tag.name"
                        class="tag__img"
                    />
                </picture>
                <p class="tag__name">
                    {{ tag.name }}
                </p>
            </div>
        </div>
        <div class="tags__btns">
            <button
                @click="backPage"
                type="button"
                class="tags__back tags-back"
            >
                <span class="tags-back__text">
                    Назад
                </span>
            </button>
            <Button
                @click="addTag"
                theme="light"
                class="tags__add"
            >
                Добавить
            </Button>
        </div>
        <Separator class="tags__separator" />
        <Info
            linkName="Контакты"
            link="/contacts"
            class="tags__info"
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
    import {indicators} from "../constants/indicators.js";
    import {siteStore} from "../constants/store.js";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";
    import Button from "./Button.vue";
    import {defineComponent} from "vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "Tags",
        components: {
            Separator,
            Info,
            Button,
        },
        setup() {
            /** Features */
            const router = useRouter();

            /** Mthods */
            const backPage = () => {
                router.back();
            };
            const addTag = () => {
                siteStore.openModal('ModalAddTags');
            };

            return {
                indicators,
                addTag,
                backPage,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/tags/component";
</style>
