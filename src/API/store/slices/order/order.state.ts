import {Order} from "src/API/types/Order";

export type OrderState = {
    orders: Order[];
};

export const InitialOrderState: OrderState = {
    orders: [],
};
