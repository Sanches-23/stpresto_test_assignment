// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import {RootState} from "src/API/store/store";
// import {InitialOrderState} from "src/API/store/slices/order.state";
// import {CartItem} from "src/API/types/CartItem";
//
//
// export const OrderSlice = createSlice({
//     name: 'order',
//     initialState: InitialOrderState,
//     reducers: {
//         placeOrder: (state, action: PayloadAction<CartItem[]>) => {
//             state.orders.push(...action.payload);
//         },
//         clearOrders: (state) => {
//             state.orders = [];
//         },
//     },
// });
//
// export const OrderSelector = (state: RootState) => state.order;
// export const { placeOrder, clearOrders } = OrderSlice.actions;
// export default OrderSlice.reducer;


import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialOrderState} from './order.state';
import {RootState} from "src/API/store/store";
import {Order} from "src/API/types/Order";
import {sendOrderEmail} from "src/Utils/scripts/emailService";

export const OrderSlice = createSlice({
    name: 'order',
    initialState: InitialOrderState,
    reducers: {
        placeOrder: (state, action: PayloadAction<Order>) => {
            // placeOrder: (state, action: PayloadAction<{ customerData: Order['customerData']; cartItems: CartItem[] }>) => {
            // state.orders.push({
            //     customerData: action.payload.customerData,
            //     cartItems: action.payload.cartItems,
            //     totalPrice: action.payload.totalPrice,
            // });
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


// export const OrderSelector = (state: RootState) => state.order;
// export const { placeOrder, clearOrders } = OrderSlice.actions;
// export default OrderSlice.reducer;
//
// // import { createAction } from '@reduxjs/toolkit';
// // import { CartState } from '../reducers/cartReducer'
// // import { createReducer } from '@reduxjs/toolkit';
// // import { placeOrder } from '../actions/orderActions';
// // import { sendOrderEmail } from '../../services/emailService';
//
//
// export const placeOrder = createAction<{ name: string; email: string; address: string; cart: CartState }>('order/placeOrder');
//
// export const orderReducer = createReducer(initialState, (builder) => {
//     builder.addCase(placeOrder, (state, action) => {
//         state.orders.push(action.payload);
//         sendOrderEmail(action.payload);
//     });
// });
