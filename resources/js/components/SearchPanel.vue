<template>
    <div class="search-panel">
        <input
            type="text"
            placeholder="Поиск..."
            v-model="searchText"
            class="search-panel__input"
        />
        <IconButtonAction
            @click="sendSearchRequest"
            iconLink="/images/search-dark.png"
            alt="search"
            mod="dark"
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

            return {
                searchText,
                sendSearchRequest,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/searchPanel/component";
</style>
