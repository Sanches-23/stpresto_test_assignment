import React from "react";
import {Link} from "react-router-dom";
import {Product} from "src/API/types/Product";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useProductItemsStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: theme.spacing(2),
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: theme.shape.borderRadius,
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
    },
    cardMedia: {
        paddingTop: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        justifyContent: "center",
    },
    productTitle: {
        fontSize: "1.2rem" + "!important",
        textDecoration: "none" + "!important",
        color: "inherit" + "!important",
        "&:hover": {
            textDecoration: "underline" + "!important",
        },
    },
    productCategory: {
        fontSize: "0.875rem"  + "!important",
        color: theme.palette.text.secondary  + "!important",
    },
    productPrice: {
        fontSize: "1.25rem" + "!important",
        fontWeight: 600 + "!important",
    },
});

type ProductCardProps = {
    product: Product;
    onAddToCartClick: () => void;
};

export const ProductItems: React.FC<ProductCardProps> = ({product, onAddToCartClick}) => {
    const classes = useProductItemsStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component={Link}
                        to={`/products/${product.id}`}
                        className={classes.productTitle}
                    >
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.productCategory}>
                        Category: {product.category}
                    </Typography>
                    <Typography variant="h6" component="p" className={classes.productPrice}>
                        Price: ${product.price}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onAddToCartClick}
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductItems;