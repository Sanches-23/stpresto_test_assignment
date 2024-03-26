import {CartItem} from "src/API/types/CartItem";

export type Order = {
    customerData: {
        name: string;
        email: string;
        phone: string;
    };
    cartItems: CartItem[];
    totalPrice: number;
};
