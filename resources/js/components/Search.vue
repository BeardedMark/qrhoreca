<template>
    <div class="search">
        <SearchPanel
            @searchRequest="searchRequest"
            class="search__panel"
        />
    </div>
</template>
<script>
    import { defineComponent } from "vue";
    import SearchPanel from "./SearchPanel";

    export default defineComponent({
        name: "Search",
        components: {SearchPanel},
        setup() {
            const searchRequest = (searchText) => {
                console.log(searchText)
            };

            return {
                searchRequest,
            };
        },
    });
</script>
<style scoped lang="scss">
@import "resources/scss/components/search/component";
</style>
