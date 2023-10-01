<template>
    <div class="app">
        <Header class="app__header" />
        <main class="app__main">
            <router-view></router-view>
        </main>
        <Footer class="app__footer" />
    </div>
</template>

<script>
    import {computed, defineComponent, unref, watch} from "vue";
    import Footer from "./Footer.vue";
    import Header from "./Header.vue";
    import {siteStore} from "../constants/store";

    export default defineComponent({
        name: 'AppComponent',
        components: {
            Footer,
            Header,
        },
        setup() {
            if(JSON.parse(localStorage.getItem('order')).length) {
                unref(siteStore).setOrder(JSON.parse(localStorage.getItem('order')));
            }

            /** Computed */
            const currentOrder = computed(() => siteStore.getOrder);

            /** Watchers */
            watch(currentOrder, (newValue) => {
                localStorage.setItem('order', JSON.stringify(newValue));
            });
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/app.scss";
</style>
