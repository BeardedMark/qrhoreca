<template>
    <div class="search-panel">
        <div class="search-panel__field">
            <input
                type="text"
                placeholder="Поиск..."
                v-model="searchText"
                class="search-panel__input"
            />
            <div
                @click="clearSearchInput"
                class="search-panel__clear search-panel-clear"
            >
                <picture class="search-panel-clear__picture">
                    <img
                        src="/images/close.png"
                        alt="clear"
                        class="search-panel-clear__img"
                    >
                </picture>
            </div>
        </div>
        <IconButtonAction
            @click="sendSearchRequest"
            iconLink="/images/search-blue.png"
            alt="search"
            mod="frame"
            class="search-panel__btn"
        />
    </div>
</template>
<script>
    import { defineComponent, ref, unref } from "vue";
    import IconButtonAction from "./IconButtonAction";

    export default defineComponent({
        name: "SearchPanel",
        components: {IconButtonAction},
        setup(_, { emit }) {
            /** Vars */
            const searchText = ref('');

            /** Methods */
            const sendSearchRequest = () => emit('searchRequest', unref(searchText));
            const clearSearchInput = () => {
                searchText.value = '';
                sendSearchRequest();
            };

            return {
                searchText,
                sendSearchRequest,
                clearSearchInput,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/searchPanel/component";
</style>
