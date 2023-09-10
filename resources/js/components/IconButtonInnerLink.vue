<template>
    <IconButton
        tag="router-link"
        :to="`/${to}`"
        :iconLink="iconLink"
        :mod="mod"
        :alt="alt"
    />
</template>
<script>
    import {defineComponent} from "vue";
    import IconButton from "./IconButton.vue";

    export default defineComponent({
        name: "IconButtonInnerLink",
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
