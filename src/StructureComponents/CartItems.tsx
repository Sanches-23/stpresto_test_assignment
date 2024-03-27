import React from "react";
import {CartItem} from "src/API/types/CartItem";
import {Button, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";


const useCartItemsStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    cardContent: {
        textAlign: 'left',
        padding: theme.spacing(2),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
});

type CartItemsProp = {
    item: CartItem;
    onAddToCartClick: () => void;
    onRemoveFromCartClick: () => void;
    onRemoveAllFromCartClick: () => void;
}

export const CartItems: React.FC<CartItemsProp> = ({item, onAddToCartClick, onRemoveFromCartClick, onRemoveAllFromCartClick}) => {
    const classes = useCartItemsStyles();

    return (
        <div className={classes.card}>
            <img src={item.product.image} alt={item.product.title} />
            <div className={classes.cardContent}>
                <Typography variant="h6">{item.product.title}</Typography>
                <Typography variant="body1">Price: ${item.product.price}</Typography>
                <Typography variant="body1">Quantity: {item.quantity}</Typography>
                <Typography variant="body1">
                    Total: ${(item.product.price * item.quantity).toFixed(2)}
                </Typography>
            </div>
            <div className={classes.buttons}>
                <Button variant="contained" color="success" onClick={onAddToCartClick}>
                    +++
                </Button>
                <Button variant="contained" color="warning" onClick={onRemoveFromCartClick}>
                    ---
                </Button>
                <Button variant="outlined" color="error" onClick={onRemoveAllFromCartClick}>
                    Remove
                </Button>
            </div>
            <hr />
        </div>
    );

    // return (
    //     <>
    //         <div key={item.product.id}>
    //             <img src={item.product.image} alt={item.product.title} style={{width: "30px", height: "30px"}}/>
    //
    //             <Typography variant="h6">{item.product.title}</Typography>
    //             <Typography variant="body1">Price: ${item.product.price}</Typography>
    //             <Typography variant="body1">Quantity: {item.quantity}</Typography>
    //             <Typography variant="body1">Total: ${(item.product.price * item.quantity).toFixed(2)}</Typography>
    //
    //             <Button variant="contained" color="success" onClick={onAddToCartClick}>+++</Button>
    //             <Button variant="contained" color="warning" onClick={onRemoveFromCartClick}>---</Button>
    //             <Button variant="outlined" color="error" onClick={onRemoveAllFromCartClick}>Remove</Button>
    //             <hr/>
    //         </div>
    //     </>
    // );
};

export default CartItems;