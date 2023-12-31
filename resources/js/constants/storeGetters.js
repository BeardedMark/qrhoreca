import {computed} from "vue";
import {siteStore} from "./store.js";

export const getOrder = computed(() => siteStore.state.order);
