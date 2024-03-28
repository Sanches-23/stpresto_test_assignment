import emailjs from "@emailjs/browser";
import {Order} from "src/API/types/Order";

export const sendOrderEmail = (order: Order) => {
    const orderItemsText = order.cartItems.map(item => `${item.product.title} - Price: $${item.product.price} - Quantity: ${item.quantity}`).join(`\n`);
    const templateParams = {
        customerName: order.customerData.name,
        customerEmail: order.customerData.email,
        customerPhone: order.customerData.phone,
        orderItems: orderItemsText,
        totalPrice: order.totalPrice,
    };

    console.log(`Name: ${templateParams.customerName}\nEmail: ${templateParams.customerEmail}\nPhone: ${templateParams.customerPhone}\n\n${templateParams.orderItems}\n\nTotal price: $${templateParams.totalPrice}`)

    emailjs.send(
        "service_5qeokyg",
        "template_go40fho",
        templateParams,
        "tz2S3llsJNLJn59xw"
    ).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
            console.log("FAILED...", error);
        }
    );
};