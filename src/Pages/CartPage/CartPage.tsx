import React from "react"
import {useAppDispatch, useAppSelector} from "src/API/store/hook";
import {addToCart, CartSelector, removeAllFromCart, removeFromCart} from "src/API/store/slices/cart/cart.slice";
import {Link} from "react-router-dom";
import {calcTotalPrice} from "src/Utils/scripts/calcTotalPrice";
import CartItems from "src/StructureComponents/CartItems";
import {Button, Typography} from "@mui/material";


export const CartPage: React.FC = () => {
    const cart = useAppSelector(CartSelector);
    const dispatch = useAppDispatch();
    return (
        <div>
            <hr/>
            <h1>Cart Page</h1>
            <hr/>
            {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.items.map((item) => (
                        <CartItems key={item.product.id} item={item}
                                   onAddToCartClick={() => dispatch(addToCart(item.product))}
                                   onRemoveFromCartClick={() => dispatch(removeFromCart(item.product))}
                                   onRemoveAllFromCartClick={() => dispatch(removeAllFromCart(item.product))}/>
                    ))}
                    <Typography variant="h6">Total: ${calcTotalPrice(cart.items)}</Typography>
                    <Link to="/order">
                        <Button variant="contained" color="primary">Proceed to Checkout</Button>
                    </Link>
                </>
            )}
            {/*<button onClick={() => dispatch(clearCart())}>Clear Order</button>*/}
        </div>
    );
};

export default CartPage;