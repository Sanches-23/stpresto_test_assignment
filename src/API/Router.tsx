// https://reactrouter.com/en/main/start/tutorial

import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "src/app";
import OrderPage from "src/Pages/OrderPage/OrderPage";
import CatalogPage from "src/Pages/CatalogPage/CatalogPage";
import CartPage from "src/Pages/CartPage/CartPage";
import NotFoundPage from "src/Pages/NotFound/NotFoundPage";
import React from "react";
import {store} from "src/API/store/store";
import {getProducts} from "src/API/store/slices/asyncAction/getProducts";
import ProductPage from "src/Pages/ProductPage/ProductPage";

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
        path: '*',
        element: <NotFoundPage/>,
    },
]);

// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         loader: () => store.dispatch(getProducts()),
//         children: [
//             {
//                 index: true,
//                 element: <CatalogPage />,
//             },
//             {
//                 path: 'products',
//                 loader: () => {
//                     throw new Response('', {
//                         status: 302,
//                         headers: {
//                             Location: '/',
//                         },
//                     });
//                 },
//             },
//             {
//                 path: 'products/:productId',
//                 element: <ProductPage/>
//             },
//             {
//                 path: 'order',
//                 element: <OrderPage />,
//             },
//             {
//                 path: 'cart',
//                 element: <CartPage />,
//             },
//         ],
//     },
//     {
//         path: '*',
//         element: <NotFoundPage />,
//     },
// ]);