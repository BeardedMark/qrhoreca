import {computed} from "vue";
import {siteStore} from "./store.js";

export const getOrder = computed(() => siteStore.state.order);
export const userId = computed(() => siteStore.state.userId);
export const admin = computed(() => siteStore.state.admin);
export const categories = computed(() => siteStore.state.categories);
