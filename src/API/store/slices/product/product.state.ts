import {Product} from "src/API/types/Product";

export type ProductState = {
    products: Product[],
    statuses: { getStatus: "Idle" | "Loading" | "Failed"},
};

export const InitialProductState: ProductState = {
    products: [],
    statuses: {getStatus: "Idle"},
};