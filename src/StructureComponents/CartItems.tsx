import React from "react";
import {CartItem} from "src/API/types/CartItem";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";


const useCartItemsStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        marginBottom: theme.spacing(2),
    },
    cardMedia: {
        width: 150,
        height: 150,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: theme.spacing(1),
        margin: "auto",
        marginLeft: theme.spacing(1),
    },
    cardContent: {
        flex: 1,
        padding: theme.spacing(2),
        textAlign: "left"
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    button: {
        width: "100%",
        margin: theme.spacing(0)  + "!important",
    },
});

type CartItemsProp = {
    item: CartItem;
    onAddToCartClick: () => void;
    onRemoveFromCartClick: () => void;
    onRemoveAllFromCartClick: () => void;
}

export const CartItems: React.FC<CartItemsProp> = ({
                                                       item,
                                                       onAddToCartClick,
                                                       onRemoveFromCartClick,
                                                       onRemoveAllFromCartClick
                                                   }) => {
    const classes = useCartItemsStyles();

    return (

        <Grid item xs={12} sm={12} md={6} key={item.product.id}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={item.product.image}
                    title={item.product.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{item.product.title}</Typography>
                    <Typography variant="body1">Price: ${item.product.price}</Typography>
                    <Typography variant="body1">Quantity: {item.quantity}</Typography>
                    <Typography variant="body1">
                        Total: ${(item.product.price * item.quantity).toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions className={classes.buttons}>
                    <Button className={classes.button} variant="contained" color="success"
                            onClick={onAddToCartClick}>+++</Button>
                    <Button className={classes.button} variant="contained" color="warning"
                            onClick={onRemoveFromCartClick}>---</Button>
                    <Button className={classes.button} variant="outlined" color="error"
                            onClick={onRemoveAllFromCartClick}>Remove</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CartItems;