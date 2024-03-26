import {Product} from "src/API/types/Product";
import {addToCart} from "src/API/store/slices/cart/cart.slice";
import {Dispatch} from "@reduxjs/toolkit";
import React from "react";

export const addProductToCart = (dispatch: Dispatch, product: Product, setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>, setClickCount: React.Dispatch<React.SetStateAction<number>>) => {
    dispatch(addToCart(product));
    setIsSnackbarOpen(true);
    setClickCount(prevCount => prevCount + 1);
};