<template>
    <div class="page-head">
        <div
            v-if="title"
            v-html="title"
            class="page-head__title page-head-title"
        ></div>
        <div
            v-if="subtitle"
            v-html="subtitle"
            ref="subtitleRef"
            class="page-head-subtitle"
        ></div>
    </div>
</template>

<script>
    import {defineComponent, onMounted, ref} from "vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "PageHead",
        props: {
            title: {
                type: String,
                default: '',
            },
            subtitle: {
                type: String,
                default: '',
            },
        },
        setup() {
            /** Vars */
            const subtitleRef = ref(null);

            /** Features */
            const router = useRouter();

            /** Methods */
            const onInnerLinkClick = (link) => (event) => {
                event.preventDefault();
                router.push(link);
            };

            /** Life cycles */
            onMounted(() => {
                const links = subtitleRef.value.getElementsByTagName('a');

                for (const link of links) {
                    const href = link.getAttribute('href');

                    if(href) {
                        const url = new URL(href, window.location.origin);

                        if (url.host === window.location.host) {
                            link.addEventListener('click', onInnerLinkClick(url.pathname));
                        }
                    }
                }
            });

            return {
                subtitleRef,
            };
        },
    });
</script>

<style scoped lang="scss">
    @import "resources/scss/components/pageHead/component";
</style>
