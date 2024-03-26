import {Product} from "src/API/types/Product";

export type CartItem = {
    product: Product,
    quantity: number,
};