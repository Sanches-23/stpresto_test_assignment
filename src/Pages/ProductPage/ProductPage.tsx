import React from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "src/API/store/hook";
import {ProductSelector} from "src/API/store/slices/product/product.slice";
import {addProductToCart} from "src/Utils/scripts/cartAction";
import SnackbarCart from "src/StructureComponents/SnackbarCart";
import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";
import {Button, Grid, Typography} from "@mui/material";
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
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={6} md={4}>
                <div className={classes.imageContainer}>
                    <img src={product.image} alt={product.title} className={classes.image}/>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Typography variant="h6" className={classes.title}>{product.title}</Typography>
                <Typography variant="body1" className={classes.category}>Category: {product.category}</Typography>
                <Typography variant="body1">Stars: {product.rating.rate}; Count: {product.rating.count}</Typography>
                <Typography variant="body1"
                            className={classes.description}>Description: {product.description}</Typography>
                <Typography variant="body1" className={classes.price}>Price: ${product.price}</Typography>
                <Button variant="contained" color="primary" className={classes.addToCartButton} onClick={() => {
                    addProductToCart(dispatch, product, setIsSnackbarOpen, setClickCount)
                }}>
                    Add to Cart
                </Button>
                <SnackbarCart isOpen={isSnackbarOpen} clickCount={clickCount} message={"Product added to cart"}
                              onClose={handleSnackbarClose(setIsSnackbarOpen, setClickCount)}/>
            </Grid>
        </Grid>
    );
};

export default ProductPage;