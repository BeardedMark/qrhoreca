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
        <div class="quick-search__list">
            <div
                v-for="(listItem, listItemIndex) in quickSearchList"
                :key="`quick-search__item-${listItemIndex}`"
                class="quick-search__item quick-search-item"
            >
                <span class="quick-search-item__name">
                    {{ listItem }}
                </span>
                <span
                    @click="onDeleteClick(listItem)"
                    class="quick-search-item__btn"
                >
                    удалить
                </span>
            </div>
            <div class="quick-search__item quick-search-item">
                <input
                    @change="newItemChange"
                    v-model="newItem"
                    type="text"
                    placeholder="Добавить"
                    class="quick-search-item__input"
                >
            </div>
        </div>
        <div class="quick-search__btns">
            <router-link
                to="/profile"
                class="quick-search__cansel quick-search-cansel"
            >
                <span class="quick-search-cansel__text">
                    Отмена
                </span>
            </router-link>
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

            /** Methods */
            const onDeleteClick = (listItem) => {
                quickSearchList.value = unref(quickSearchList).filter((item) => item !== listItem);
            };
            const newItemChange = () => {

            };

            return {
                quickSearchList,
                onDeleteClick,
                newItemChange,
                newItem,
            };
        },
    });
</script>

<style scoped lang="scss">
@import "resources/scss/components/quickSearch/component";
</style>
