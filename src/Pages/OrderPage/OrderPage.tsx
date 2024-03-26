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

// import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {useAppSelector} from "src/API/store/hook";
// import {useForm} from "react-hook-form";
// import {FormData} from "src/API/types/FormData";
// import {CartItemsSelector, clearCart} from "src/API/store/slices/cart/cart.slice";
// import {placeOrder} from "src/API/store/slices/order/order.slice";
// import {useNavigate} from "react-router-dom";
// import {calcTotalPrice} from "src/Utils/scripts/calcTotalPrice";
// import SnackbarCart from "src/StructureComponents/SnackbarCart";
// import {handleSnackbarClose} from "src/Utils/scripts/handleSnackbarClose";
//
//
// export const OrderPage: React.FC = () => {
//     const {register, handleSubmit, reset, formState: {errors}, watch, trigger} = useForm<FormData>();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const cartItems = useAppSelector(CartItemsSelector);
//     const totalPrice = calcTotalPrice(cartItems);
//
//     const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
//
//     const onSubmit = (data: FormData) => {
//         dispatch(placeOrder({customerData: data, cartItems, totalPrice}));
//         setIsSnackbarOpen(true);
//         dispatch(clearCart());
//         reset();
//         // navigate("/");
//     };
//
//
//     return (
//         <>
//             <hr/>
//             <h1>OrderPage</h1>
//             <hr/>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input placeholder="Name"
//                        {...register("name", {
//                                required: 'Name is required*',
//                                minLength: {
//                                    value: 3,
//                                    message: 'Name must be at least 3 characters long*',
//                                },
//                                maxLength: {
//                                    value: 23,
//                                    message: 'Name must not exceed 23 characters*',
//                                },
//                                onChange: () => trigger('name')
//                            },
//                        )}
//                        style={{
//                            borderColor: errors.name
//                                ? 'red'
//                                : watch('name')
//                                    ? 'green'
//                                    : 'grey',
//                        }}
//                 />
//                 {errors.name && (<p>{errors.name.message}</p>)}
//
//                 <input placeholder="Email"
//                        {...register("email", {
//                                required: 'Email Address is required*',
//                                minLength: {
//                                    value: 8,
//                                    message: 'Email Address must be at least 8 characters long*',
//                                },
//                                maxLength: {
//                                    value: 35,
//                                    message: 'Email Address must not exceed 35 characters*',
//                                },
//                                pattern: {
//                                    value: /^[a-zA-Z0-9._]{3,}@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/,
//                                    message: 'Email Address must look like this: ааа@аа.аа *',
//                                },
//                                onChange: () => trigger('email')
//                            },
//                        )}
//                        style={{
//                            borderColor: errors.email
//                                ? 'red'
//                                : watch('email')
//                                    ? 'green'
//                                    : 'grey',
//                        }}
//                 />
//                 {errors.email && (<p>{errors.email.message}</p>)}
//
//                 <input placeholder="Phone"
//                        {...register("phone", {
//                                required: 'Phone number is required*',
//                                pattern: {
//                                    value: /^\+380\d{9}$/,
//                                    message: "Please ensure the phone number is in Ukrainian format  *"
//                                },
//                                onChange: () => trigger('phone')
//                            },
//                        )}
//                        style={{
//                            borderColor: errors.phone
//                                ? 'red'
//                                : watch('phone')
//                                    ? 'green'
//                                    : 'grey',
//                        }}
//                 />
//                 {errors.phone && (<p>{errors.phone.message}</p>)}
//                 {/*<input type="submit"/>*/}
//                 <input type="submit" style={{background: Object.keys(errors).length > 0 ? 'red' : ''}}>
//                 </input>
//                 <SnackbarCart isOpen={isSnackbarOpen} message={"the order has been sent"}
//                               onClose={handleSnackbarClose(setIsSnackbarOpen)}
//                 />
//             </form>
//
//             <ul>
//                 {cartItems.map((item) => (
//                     <li key={item.product.id}>
//                         {item.product.title} - Quantity: {item.quantity}
//                     </li>
//                 ))}
//             </ul>
//             Total price: ${totalPrice}
//         </>
//     );
// };
//
// export default OrderPage;
