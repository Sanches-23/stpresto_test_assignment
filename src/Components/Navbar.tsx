import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Button, styled} from "@mui/material";
import {useAppSelector} from "src/API/store/hook";
import {CartSelector} from "src/API/store/slices/cart/cart.slice";
import {calcTotalProducts} from "src/Utils/scripts/calcTotalProducts";

const StyledAppBar = styled(AppBar)({
    // backgroundColor: "#",
});

const StyledButton = styled(Button)({
    color: "white",
    "&:hover": {
        // textDecoration: "underline",
    },
});

const Navbar = () => {
    const cart = useAppSelector(CartSelector);

    const links = [
        {to: "/products", label: "Products"},
        {to: "/cart", label: `Cart (${calcTotalProducts(cart.items)})`},
        {to: "/order", label: "Order"},
    ];

    return (
        <StyledAppBar position="static">
            <Toolbar>
                {links.map((link, index) => (
                    <StyledButton key={index}>
                        <Link to={link.to} style={{textDecoration: "none", color: "white"}}>
                            {link.label}
                        </Link>
                    </StyledButton>
                ))}
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;