<template>
    <div class="quick-search">
        <div class="quick-search__top">
            <h1 class="quick-search__title quick-search-title">
                <span class="quick-search-title__text">
                    Быстрый поиск
                </span>
            </h1>
            <p class="quick-search__subtitle quick-search-subtitle">
                <span class="quick-search-subtitle__text">
                    Введите варианты для быстрого поиска по каталогу
                </span>
            </p>
        </div>
        <ul class="quick-search__list">
            <li
                v-for="(listItem, listItemIndex) in quickSearchList"
                :key="`quick-search__item-${listItemIndex}`"
                class="quick-search__item quick-search-item"
            >
                <p class="quick-search-item__name quick-search-item-name">
                        <span class="quick-search-item-name__label">
                            {{ listItem }}
                        </span>
                </p>
                <span
                    @click="onDeleteClick(listItem)"
                    class="quick-search-item__btn"
                >
                        удалить
                    </span>
            </li>
            <li class="quick-search__item quick-search-field">
                <input
                    v-model="newItem"
                    type="text"
                    placeholder="Добавить"
                    class="quick-search-field__input"
                >
            </li>
        </ul>
        <div class="quick-search__btns">
            <button
                @click="backPage"
                type="button"
                class="quick-search__cansel quick-search-cansel"
            >
                <span class="quick-search-cansel__text">
                    Отмена
                </span>
            </button>
            <Button
                @click="onSaveClick"
                theme="light"
                class="quick-search__save"
            >
                Сохранить
            </Button>
        </div>
        <Separator class="quick-search__separator" />
        <Info
            linkName="Контакты"
            link="/contacts"
            class="quick-search__info"
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
    import {defineComponent, ref, unref} from "vue";
    import {useRouter} from "vue-router";
    import Button from "./Button.vue";
    import Separator from "./Separator.vue";
    import Info from "./Info.vue";

    export default defineComponent({
        name: "QuickSearch",
        components: {
            Button,
            Separator,
            Info,
        },
        setup() {
            /** Vars */
            const quickSearchList = ref([
                'Мясо',
                'Детское',
                'Алкоголь',
                'Закуска',
                'Сладкое',
            ]);
            const newItem = ref('');

            /** Features */
            const router = useRouter();

            /** Methods */
            const onDeleteClick = (listItem) => {
                quickSearchList.value = unref(quickSearchList).filter((item) => item !== listItem);
            };
            const onSaveClick = () => {
                if (unref(newItem).trim()) {
                    quickSearchList.value.push(unref(newItem))
                    newItem.value = '';
                }
            };
            const backPage = () => {
                router.back();
            };

            return {
                quickSearchList,
                onDeleteClick,
                newItem,
                onSaveClick,
                backPage,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/quickSearch/component";
</style>
