import {reactive, readonly, computed} from "vue";

const state = reactive({
    order: [],
});

const setOrder = (value) => {
    state.order = value;
};

const getOrder = computed(() => state.order);

export const siteStore = readonly({
    setOrder,
    getOrder,
});
