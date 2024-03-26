import React from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "src/API/store/hook";
import {ProductSelector} from "src/API/store/slices/product/product.slice";
import {addProductToCart} from "src/Utils/scripts/cartAction";
import SnackbarCart from "src/StructureComponents/SnackbarCart";
import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";

const ProductPage: React.FC = () => {
    const {productId} = useParams<{ productId: string }>();
    const {products} = useAppSelector(ProductSelector);
    const dispatch = useAppDispatch();

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [clickCount, setClickCount] = React.useState(0);

    const product = React.useMemo(() => {
        if (!productId) return null;
        return products.find(product => product.id === parseInt(productId, 10));
    }, [productId, products]);

    if (!product) {
        return <div>Product not found</div>;
    }

    // if (!productId) {
    //     return <div>Product not found</div>;
    // }
    // const product = products.find(product => product.id === parseInt(productId, 10));
    // const handleAddToCart = () => {
    //     addProductToCart(dispatch, product);
    //     setIsSnackbarOpen(true);
    //     setClickCount(prevCount => prevCount + 1);
    // };
    // const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setIsSnackbarOpen(false);
    //     if (reason === 'timeout') {
    //         setClickCount(0);
    //     }
    // };

    return (
        <div>
            <img src={product.image} alt={product.title} style={{width: "30px", height: "30px"}}/>
            <h1>{product.title}</h1>
            <h3>Category: {product.category}</h3>

            <p>Stars: {product.rating.rate}; Count: {product.rating.count}</p>

            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => {
                addProductToCart(dispatch, product, setIsSnackbarOpen, setClickCount)
            }}>Add to Cart
            </button>
            <SnackbarCart isOpen={isSnackbarOpen} clickCount={clickCount} message={"Product added to cart"}
                          onClose={handleSnackbarClose(setIsSnackbarOpen, setClickCount)}/>
        </div>
    );
};

export default ProductPage;