import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialOrderState} from './order.state';
import {RootState} from "src/API/store/store";
import {Order} from "src/API/types/Order";
import {sendOrderEmail} from "src/Utils/scripts/emailService";

export const OrderSlice = createSlice({
    name: "order",
    initialState: InitialOrderState,
    reducers: {
        placeOrder: (state, action: PayloadAction<Order>) => {
            const order = {
                customerData: action.payload.customerData,
                cartItems: action.payload.cartItems,
                totalPrice: action.payload.totalPrice,
            };
            state.orders.push(order);
            sendOrderEmail(order);
        },
        clearOrders: (state) => {
            state.orders = [];
        },
    },
});

export const OrderSelector = (state: RootState) => state.order;
export const {placeOrder, clearOrders} = OrderSlice.actions;
export default OrderSlice.reducer;