import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "src/API/store/hook";
import {FormData} from "src/API/types/FormData";
import {CartItemsSelector, clearCart} from "src/API/store/slices/cart/cart.slice";
import {placeOrder} from "src/API/store/slices/order/order.slice";
import {calcTotalPrice} from "src/Utils/scripts/calcTotalPrice";
import SnackbarCart from "src/StructureComponents/SnackbarCart";
import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import FormProvider from "src/Components/FormProvider";


export const OrderPage: React.FC = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useAppSelector(CartItemsSelector);
    const totalPrice = calcTotalPrice(cartItems);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

    const onSubmit = (data: FormData) => {
        dispatch(placeOrder({customerData: data, cartItems, totalPrice}));
        setIsSnackbarOpen(true);
        dispatch(clearCart());
        // navigate("/");
    };
    return (
        <>
            <hr/>
            <h1>OrderPage</h1>
            <hr/>
            <FormProvider onSubmit={onSubmit} cartItemsCount={cartItems.length}/>
            <SnackbarCart isOpen={isSnackbarOpen} message={"The order has been placed successfully"}
                          onClose={handleSnackbarClose(setIsSnackbarOpen)}
            />
            <List>
                {cartItems.map((item) => (
                    <ListItem key={item.product.id}>
                        <ListItemText primary={item.product.title} secondary={`Quantity: ${item.quantity}`}/>
                        {/*<ListItemSecondaryAction>*/}
                        {/*    <IconButton edge="end" aria-label="delete"*/}
                        {/*                onClick={() => dispatch(removeFromCart(item.product.id))}>*/}
                        {/*        <DeleteIcon/>*/}
                        {/*    </IconButton>*/}
                        {/*</ListItemSecondaryAction>*/}
                    </ListItem>
                ))}
                <ListItem>
                    <Typography variant="h6" component="span">
                        Total price: ${totalPrice}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
};

export default OrderPage;