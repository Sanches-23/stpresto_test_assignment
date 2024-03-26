// import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
// import ProductReducer from "./slices/product.slice"
// import CartReducer from "./slices/cart.slice"
// import OrderReducer from "./slices/order.slice"
//
//
// export const store = configureStore({
//     reducer: {
//         product: ProductReducer,
//         cart: CartReducer,
//         order: OrderReducer,
//     },
// });
//
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
//
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
//


import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import ProductReducer from "./slices/product/product.slice"
import CartReducer from "./slices/cart/cart.slice"
import OrderReducer from "./slices/order/order.slice"
import CategoryReducer from "./slices/category/category.slice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
    order: OrderReducer,
    category: CategoryReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
