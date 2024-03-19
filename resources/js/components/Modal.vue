<template>
    <div class="modal">
        <div
            @click="hideModal"
            class="modal__overlay"
        ></div>
        <div class="modal__content">
            <div
                @click="hideModal"
                class="modal__close modal-close"
            ></div>
            писька
        </div>
    </div>
</template>

<script>
import {siteStore} from "../constants/store.js";

export default {
    name: "Modal",
    setup() {
        const hideModal = () => {
            siteStore.closeModal();
        };

        return {
            hideModal,
        };
    },
}
</script>

<style scoped lang="scss">
@import "resources/scss/components/modal/component";
</style>
