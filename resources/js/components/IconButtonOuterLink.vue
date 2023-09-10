<template>
    <IconButton
        tag="a"
        :href="to"
        :iconLink="iconLink"
        :mod="mod"
        :alt="alt"
        target="_blank"
    />
</template>
<script>
import {defineComponent} from "vue";
import IconButton from "./IconButton.vue";

export default defineComponent({
    name: "IconButtonOuterLink",
    components: {
        IconButton,
    },
    props: {
        to: {
            type: String,
            default: '',
        },
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
