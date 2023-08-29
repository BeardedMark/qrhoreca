<template>
    <div class="app">
        <header class="app__header"></header>
        <main class="app__main">
            <router-view></router-view>
        </main>
        <Footer class="app__footer" />
    </div>
</template>

<script>
    import { defineComponent } from "vue";
    import Footer from "./Footer.vue";

    export default defineComponent({
        name: 'AppComponent',
        components: { 
            Footer,
        },
    });
</script>
<style scoped lang="scss">
    @import "resources/scss/app.scss";
</style>