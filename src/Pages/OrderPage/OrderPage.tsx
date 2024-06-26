import React from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "src/API/store/hook";
import {FormData} from "src/API/types/FormData";
import {CartItemsSelector, clearCart, removeAllFromCart} from "src/API/store/slices/cart/cart.slice";
import {placeOrder} from "src/API/store/slices/order/order.slice";
import {calcTotalPrice} from "src/Utils/scripts/calcTotalPrice";
import SnackbarCart from "src/StructureComponents/SnackbarCart";
import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";
import {Box, Card, CardActions, CardContent, Grid, IconButton, Typography} from "@mui/material";
import FormProvider from "src/Components/FormProvider";
import DeleteIcon from "src/Utils/icons/DeleteIcon"
import {useOrderPageStyles} from "src/Pages/OrderPage/OrderPage.styles";


const OrderPage: React.FC = () => {
    const classes = useOrderPageStyles();
    const dispatch = useDispatch();
    const cartItems = useAppSelector(CartItemsSelector);
    const totalPrice = calcTotalPrice(cartItems);

    const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

    const onSubmit = (data: FormData) => {
        dispatch(placeOrder({customerData: data, cartItems, totalPrice}));
        setIsSnackbarOpen(true);
        dispatch(clearCart());
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.orderGridContainer}>

            <Typography variant="h4" component="h1" className={classes.title}>Order Page</Typography>
            <FormProvider onSubmit={onSubmit} cartItemsCount={cartItems.length}/>
            <SnackbarCart isOpen={isSnackbarOpen} message={"The order has been placed successfully"}
                          onClose={handleSnackbarClose(setIsSnackbarOpen)}/>
            <Grid container spacing={3}>
                {cartItems.map((item) => (
                    <Grid item xs={12} sm={12} md={6} key={item.product.id}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">{item.product.title}</Typography>
                                <Typography>Quantity: {item.quantity}</Typography>
                                <Typography>Price: ${item.product.price}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton edge="end" aria-label="delete"
                                            onClick={() => dispatch(removeAllFromCart(item.product))}
                                            sx={{marginLeft: "auto"}}>
                                    <DeleteIcon className={classes.deleteIcon} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" component="span" className={classes.totalPrice}>
                Total price: ${totalPrice}
            </Typography>
            </Box>
        </Box>
    );
};

export default OrderPage;
