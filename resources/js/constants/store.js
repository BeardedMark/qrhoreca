import {reactive, readonly} from "vue";

const state = reactive({
    order: [],
});

const setOrder = (value) => {
    state.order = value;
};

export const siteStore = readonly({
    setOrder,
    state,
});
