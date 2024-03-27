import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "src/API/store/store";
import {getCategories} from "src/API/store/slices/asyncAction/getCategory";
import {InitialCategoryState} from "src/API/store/slices/category/category.state";


export const CategorySlice = createSlice({
    name: "categories",
    initialState: InitialCategoryState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, () => {
        });
        builder.addCase(getCategories.rejected, () => {
        });
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        });
    },
});

export const CategorySelector = (state: RootState) => state.category;
export default CategorySlice.reducer;
