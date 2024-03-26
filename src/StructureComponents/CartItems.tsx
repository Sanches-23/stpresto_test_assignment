import React from "react";
import {CartItem} from "src/API/types/CartItem";
import {Button, Typography} from "@mui/material";

type CartItemsProp = {
    item: CartItem;
    onAddToCartClick: () => void;
    onRemoveFromCartClick: () => void;
    onRemoveAllFromCartClick: () => void;
}

export const CartItems: React.FC<CartItemsProp> = ({item, onAddToCartClick, onRemoveFromCartClick, onRemoveAllFromCartClick}) => {
    return (
        <>
            <div key={item.product.id}>
                <img src={item.product.image} alt={item.product.title} style={{width: "30px", height: "30px"}}/>

                <Typography variant="h6">{item.product.title}</Typography>
                <Typography variant="body1">Price: ${item.product.price}</Typography>
                <Typography variant="body1">Quantity: {item.quantity}</Typography>
                <Typography variant="body1">Total: ${(item.product.price * item.quantity).toFixed(2)}</Typography>

                <Button variant="contained" color="success" onClick={onAddToCartClick}>+++</Button>
                <Button variant="contained" color="warning" onClick={onRemoveFromCartClick}>---</Button>
                <Button variant="outlined" color="error" onClick={onRemoveAllFromCartClick}>Remove</Button>
                <hr/>
            </div>
        </>
    );
};

export default CartItems;