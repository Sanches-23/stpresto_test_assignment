import React from "react"
import {useAppDispatch, useAppSelector} from "src/API/store/hook";
import {addToCart, CartSelector, removeAllFromCart, removeFromCart} from "src/API/store/slices/cart/cart.slice";
import {Link} from "react-router-dom";
import {calcTotalPrice} from "src/Utils/scripts/calcTotalPrice";
import CartItems from "src/StructureComponents/CartItems";
import {Box, Button, Grid, Typography} from "@mui/material";
import {useCartPageStyles} from "src/Pages/CartPage/CartPage.style";


export const CartPage: React.FC = () => {
    const cart = useAppSelector(CartSelector);
    const dispatch = useAppDispatch();
    const classes = useCartPageStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h4" component="h1" className={classes.title}>
                Cart Page
            </Typography>
            {cart.items.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                <Box className={classes.cartGridContainer}>
                    <Grid container spacing={3}>
                        {cart.items.map((item) => (
                            <CartItems
                                key={item.product.id}
                                item={item}
                                onAddToCartClick={() => dispatch(addToCart(item.product))}
                                onRemoveFromCartClick={() => dispatch(removeFromCart(item.product))}
                                onRemoveAllFromCartClick={() => dispatch(removeAllFromCart(item.product))}
                            />
                        ))}
                    </Grid>
                </Box>
            )}
            <Typography variant="h6" className={classes.totalPrice}>
                Total: ${calcTotalPrice(cart.items)}
            </Typography>
            <Link to="/order">
                <Button variant="contained" color="primary">
                    Proceed to Checkout
                </Button>
            </Link>
        </Box>
    );
};

//     return (
//         <div>
//
//             <h1>Cart Page</h1>
//             {cart.items.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <>
//                     {cart.items.map((item) => (
//                         <CartItems key={item.product.id} item={item}
//                                    onAddToCartClick={() => dispatch(addToCart(item.product))}
//                                    onRemoveFromCartClick={() => dispatch(removeFromCart(item.product))}
//                                    onRemoveAllFromCartClick={() => dispatch(removeAllFromCart(item.product))}/>
//                     ))}
//                     <Typography variant="h6">Total: ${calcTotalPrice(cart.items)}</Typography>
//                     <Link to="/order">
//                         <Button variant="contained" color="primary">Proceed to Checkout</Button>
//                     </Link>
//                 </>
//             )}
//         </div>
//     );
// };

export default CartPage;