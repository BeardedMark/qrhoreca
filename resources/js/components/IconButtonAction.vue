<template>
    <IconButton
        :iconLink="iconLink"
        :mod="mod"
        :alt="alt"
        type="button"
    />
</template>
<script>
    import {defineComponent} from "vue";
    import IconButton from "./IconButton.vue";

export default defineComponent({
    name: "IconButtonAction",
    components: {
        IconButton,
    },
    props: {
        mod: {
            type: String,
            default: null,
        },
        iconLink: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: null,
        },
    },
});
</script>
