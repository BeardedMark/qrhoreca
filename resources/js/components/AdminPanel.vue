<template>
    <div class="admin-panel">
        <slot></slot>
    </div>
</template>

<script>
    import {defineComponent} from "vue";

    export default defineComponent({
        name: "AdminPanel",
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/adminPanel/component";
</style>
