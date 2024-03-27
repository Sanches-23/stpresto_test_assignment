import {createAsyncThunk} from "@reduxjs/toolkit";
import {Product} from "src/API/types/Product";
import instance from "src/API/fetchProducts/instance";
import {GetProductsResponse} from "src/API/types/GetProductsResponse";

export const getProducts = createAsyncThunk(
    "products/getAll",
    async (): Promise<GetProductsResponse> => {
        const response = await instance.get("products");
        const fetchedData: Product[] = response.data;
        return {
            products: fetchedData,
        };
    },
);