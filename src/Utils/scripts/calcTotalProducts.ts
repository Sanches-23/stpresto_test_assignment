import {CartItem} from "src/API/types/CartItem";

export const calcTotalProducts = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.quantity, 0);
};