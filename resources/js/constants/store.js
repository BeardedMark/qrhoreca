import {reactive, readonly} from "vue";

const state = reactive({
    order: [],
    userId: 0,
});

const setOrder = (value) => {
    state.order = value;
};

export const siteStore = readonly({
    setOrder,
    state,
});
