import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialCartState} from "src/API/store/slices/cart/cart.state";
import {RootState} from "src/API/store/store";
import {Product} from "src/API/types/Product";


export const CartSlice = createSlice({
    name: "cart",
    initialState: InitialCartState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.product.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ product: action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.product.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.product.id !== action.payload.id);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        removeAllFromCart: (state, action: PayloadAction<Product>) => {
            state.items = state.items.filter(item => item.product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const CartSelector = (state: RootState) => state.cart;
export const CartItemsSelector = (state: RootState) => state.cart.items;
export const { addToCart, removeFromCart, removeAllFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
