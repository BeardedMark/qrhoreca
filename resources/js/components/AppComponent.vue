<template>
    <div class="app">
        <Transition>
            <component
                :is="modalName"
                v-if="modalName"
            ></component>
        </Transition>
        <div class="app__layout">
            <Header class="app__header" />
            <main class="app__main">
                <router-view></router-view>
            </main>
            <Footer class="app__footer" />
        </div>
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
    import {siteStore} from "../constants/store";
    import {getOrder, modal} from "../constants/storeGetters";
    import Footer from "./Footer.vue";
    import Header from "./Header.vue";
    import ModalAddTags from "./ModalAddTags.vue";

    export default defineComponent({
        name: 'AppComponent',
        components: {
            Footer,
            Header,
            ModalAddTags,
        },
        setup() {
            /** Computed */
            const currentOrder = computed(() => unref(getOrder));
            const modalName = computed(() => unref(modal) || null);

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

            return {
                modalName,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/app";
</style>
