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
    import {
        computed,
        defineComponent,
        onMounted,
        unref,
        watch,
    } from "vue";
    import Footer from "./Footer.vue";
    import Header from "./Header.vue";
    import {siteStore} from "../constants/store";
    import {getOrder} from "../constants/storeGetters";

    export default defineComponent({
        name: 'AppComponent',
        components: {
            Footer,
            Header,
        },
        setup() {
            /** Computed */
            const currentOrder = computed(() => unref(getOrder));

            /** Watchers */
            watch(currentOrder, (newValue) => {
                localStorage.setItem('order', JSON.stringify(newValue));
            });

            /** Life cycles */
            onMounted(() => {
                if(JSON.parse(localStorage.getItem('order'))?.length) {
                    unref(siteStore).setOrder(JSON.parse(localStorage.getItem('order')));
                }
            });
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/app.scss";
</style>
