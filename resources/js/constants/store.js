import {reactive, readonly} from "vue";

const state = reactive({
    order: [],
    userId: 1,
});

const setOrder = (value) => {
    state.order = value;
};

const logOut = () => {
    state.userId = 0;
};

export const siteStore = readonly({
    setOrder,
    state,
    logOut,
});
