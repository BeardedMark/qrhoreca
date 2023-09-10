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
    import { defineComponent } from "vue";
    import Footer from "./Footer.vue";
    import Header from "./Header.vue";

    export default defineComponent({
        name: 'AppComponent',
        components: { 
            Footer,
            Header,
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/app.scss";
</style>