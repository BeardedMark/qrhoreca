<template>
    <Button size="mini">
        {{ text }}
    </Button>
</template>
<script>
    import { defineComponent } from "vue";
    import Button from "./Button.vue";

    export default defineComponent({
        name: "ButtonMini",
        components: { Button },
        props: {
            text: {
                type: String,
                required: true,
            },
        },
    });
</script>