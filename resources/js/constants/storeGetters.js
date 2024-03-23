import {computed} from "vue";
import {siteStore} from "./store.js";

export const getOrder = computed(() => siteStore.state.order);
export const userId = computed(() => siteStore.state.userId);
export const isАuthorizedUser = computed(() => Boolean(siteStore.state.userId));
export const admin = computed(() => siteStore.state.admin);
export const categories = computed(() => siteStore.state.categories);
export const modal = computed(() => siteStore.state.modal);
export const newProductCategory = computed(() => siteStore.state.newProductCategory);
