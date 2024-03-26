import {createAsyncThunk} from "@reduxjs/toolkit";
import instance from "src/API/fetchProducts/instance";

export const getCategories = createAsyncThunk(
    'categories/getAll',
    async (): Promise<string[]> => {
        const response = await instance.get("products/categories");
        return response.data;
    },
);