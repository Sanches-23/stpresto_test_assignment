import React from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "src/API/store/hook";
import {ProductSelector} from "src/API/store/slices/product/product.slice";
import {addProductToCart} from "src/Utils/scripts/cartAction";
import SnackbarCart from "src/StructureComponents/SnackbarCart";
import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";
import {Button, Typography} from "@mui/material";
import {useProductPageStyles} from "src/Pages/ProductPage/ProductPage.styles";

const ProductPage: React.FC = () => {
    const {productId} = useParams<{ productId: string }>();
    const {products} = useAppSelector(ProductSelector);
    const dispatch = useAppDispatch();
    const classes = useProductPageStyles();

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
    const [clickCount, setClickCount] = React.useState(0);

    const product = React.useMemo(() => {
        if (!productId) return null;
        return products.find(product => product.id === parseInt(productId, 10));
    }, [productId, products]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (

        <div className={classes.root}>
            <img src={product.image} alt={product.title} className={classes.image} />
            <Typography variant="h6" className={classes.title}>{product.title}</Typography>
            <Typography variant="body1" className={classes.category}>Category: {product.category}</Typography>

            <p>Stars: {product.rating.rate}; Count: {product.rating.count}</p>

            <Typography variant="body1" className={classes.description}>Description: {product.description}</Typography>
            <Typography variant="body1" className={classes.price}>Price: ${product.price}</Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.addToCartButton}
                onClick={() => {
                    addProductToCart(dispatch, product, setIsSnackbarOpen, setClickCount)
                }}
            >
                Add to Cart
            </Button>
            <SnackbarCart
                isOpen={isSnackbarOpen}
                clickCount={clickCount}
                message={"Product added to cart"}
                onClose={handleSnackbarClose(setIsSnackbarOpen, setClickCount)}
            />
        </div>

        // <div>
        //     <img src={product.image} alt={product.title} style={{width: "30px", height: "30px"}}/>
        //     <Typography variant="h6">{product.title}</Typography>
        //     <Typography variant="body1">Category: {product.category}</Typography>
        //
        //     <p>Stars: {product.rating.rate}; Count: {product.rating.count}</p>
        //
        //     <Typography variant="body1">Description: {product.description}</Typography>
        //     <Typography variant="body1">Price: ${product.price}</Typography>
        //     <Button variant="contained" color="primary" onClick={() => {
        //         addProductToCart(dispatch, product, setIsSnackbarOpen, setClickCount)
        //     }}>Add to Cart</Button>
        //     <SnackbarCart isOpen={isSnackbarOpen} clickCount={clickCount} message={"Product added to cart"}
        //                   onClose={handleSnackbarClose(setIsSnackbarOpen, setClickCount)}/>
        // </div>
    );
};

export default ProductPage;