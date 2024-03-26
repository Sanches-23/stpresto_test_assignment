import {CartItem} from "src/API/types/CartItem";

export type CartState = {
    items: CartItem[],
};

export const InitialCartState: CartState = {
    items: [],
};