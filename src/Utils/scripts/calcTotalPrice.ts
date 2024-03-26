import {CartItem} from "src/API/types/CartItem";

export const calcTotalPrice = (items: CartItem[]) => {
    const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return parseFloat(totalPrice.toFixed(2));
};
