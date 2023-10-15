import {unref} from "vue";
import {siteStore} from "./store.js";
import {getOrder} from "../constants/storeGetters.js";

/** Функция - говно */
export const changeOrderFunc = (quantity, id) => {
    const order = unref(getOrder);

    const currentProduct = {
        id: id,
        quantity: quantity,
    };

    if(currentProduct.quantity !== 0) {
        const newOrder = [...unref(order)];

        if(newOrder.find((item) => item.id === currentProduct.id)) {
            // Изменение количества
            /** Пришлось заменять newOrder другим массивом,
             * потому что не получалось изменить свойство quantity
             * одного из элементов массива newOrder */
            const newOrderUpdated = [];

            newOrder.forEach((item) => {
                if(item.id === currentProduct.id) {
                    newOrderUpdated.push({
                        id: currentProduct.id,
                        quantity: currentProduct.quantity,
                    });
                }
                else {
                    newOrderUpdated.push(item);
                }
            });

            unref(siteStore).setOrder(newOrderUpdated);
        } else {
            // Добавление в заказ
            newOrder.push(currentProduct);
            unref(siteStore).setOrder(newOrder);
        }
    } else {
        // Удаление из заказа
        const newOrder = unref(order).reduce((acc, item) => {
            if(item.id !== currentProduct.id) {
                acc.push(item);
            }

            return acc;
        },[]);

        unref(siteStore).setOrder(newOrder);
    }
};
