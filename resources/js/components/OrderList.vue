<template>
    <div class="order-list">
        <div
            v-for="(listItem, listItemIndex) in list"
            :key="`order-list-item-${listItemIndex}`"
            class="order-list__item order-list-item"
            :class="{'order-list-item--is-divided': listItem.isDivided}"
        >
            <p class="order-list-item__name order-list-item-name">
                <span class="order-list-item-name__label">
                    {{ listItem.name }}
                </span>
            </p>
            <p class="order-list-item__value order-list-item-value">
                <span
                    v-if="listItem.value"
                    class="order-list-item-value__text--is-full"
                >
                    {{ listItem.value }}
                </span>
                <span
                    v-if="listItem.count"
                    class="order-list-item-value__text--is-count"
                >
                    {{ listItem.count }}
                </span>
                <span
                    v-if="listItem.sum"
                    class="order-list-item-value__text--is-sum"
                >
                    {{ listItem.sum }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "OrderList",
        props: {
            list: {
                type: Array,
                required: true,
            },
        },
    });
</script>

<style scoped lang="scss">
@import "../../scss/components/orderList/component";
</style>
