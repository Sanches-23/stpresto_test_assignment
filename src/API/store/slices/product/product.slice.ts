import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {RootState} from "src/API/store/store";
import {InitialProductState} from "src/API/store/slices/product/product.state";
import {getProducts} from "src/API/store/slices/asyncAction/getProducts";
import {GetProductsResponse} from "src/API/types/GetProductsResponse";

export const ProductSlice = createSlice({
    name: "products",
    initialState: InitialProductState,
    reducers: {
        // clearProduct: (state) => {
        //     state.products = [];
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.statuses.getStatus = "Loading";
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.statuses.getStatus = "Failed";
        });
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<GetProductsResponse>) => {
            const {products} = action.payload;
            state.products = products;
            state.statuses.getStatus = "Idle";
        });

    },
});

export const ProductSelector = (state: RootState) => state.product;
// export const { clearProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
