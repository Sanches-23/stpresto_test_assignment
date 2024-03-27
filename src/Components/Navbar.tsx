import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Button, styled, Box} from "@mui/material";
import {useAppSelector} from "src/API/store/hook";
import {CartSelector} from "src/API/store/slices/cart/cart.slice";
import {calcTotalProducts} from "src/Utils/scripts/calcTotalProducts";

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    "&:hover": {
        textDecoration: "underline",
    },
}));

const Navbar = () => {
    const cart = useAppSelector(CartSelector);

    const links = [
        {to: "/products", label: "Products"},
        {to: "/cart", label: `Cart (${calcTotalProducts(cart.items)})`},
        {to: "/order", label: "Order"},
    ];

    return (
        <StyledAppBar position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{display: "flex"}}>
                    {links.slice(0, 1).map((link, index) => (
                        <StyledButton key={index}>
                            <Link to={link.to} style={{textDecoration: "none", color: "white"}}>
                                {link.label}
                            </Link>
                        </StyledButton>
                    ))}
                </Box>
                <Box sx={{display: "flex"}}>
                    {links.slice(1).map((link, index) => (
                        <StyledButton key={index} sx={{flexGrow: 1}}>
                            <Link to={link.to} style={{textDecoration: "none", color: "white"}}>
                                {link.label}
                            </Link>
                        </StyledButton>
                    ))}
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;