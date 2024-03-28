import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "src/app";
import OrderPage from "src/Pages/OrderPage/OrderPage";
import CatalogPage from "src/Pages/CatalogPage/CatalogPage";
import CartPage from "src/Pages/CartPage/CartPage";
import NotFoundPage from "src/Pages/NotFound/NotFoundPage";
import React from "react";
import ProductPage from "src/Pages/ProductPage/ProductPage";

const basename = "/stpresto_test_assignment/";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "products",
                element: <CatalogPage/>,
            },
            {
                path: "",
                element: <Navigate to="products"/>,
            },
            {
                path: "products/page/:pageNumber",
                element: <CatalogPage />,
            },
            {
                path: 'products/:productId',
                element: <ProductPage/>,
            },
            {
                path: "order",
                element: <OrderPage/>,
            },
            {
                path: "cart",
                element: <CartPage/>,
            },
            {
                path: "*",
                element: <NotFoundPage/>,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage/>,
    },
], {
    basename: basename,
});