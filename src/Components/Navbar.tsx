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

// import React from "react";
// import {Link} from "react-router-dom";
// import {AppBar, Toolbar, Button, styled} from "@mui/material";
// import {useAppSelector} from "src/API/store/hook";
// import {CartSelector} from "src/API/store/slices/cart/cart.slice";
// import {calcTotalProducts} from "src/Utils/scripts/calcTotalProducts";
//
// const StyledAppBar = styled(AppBar)({
//     // backgroundColor: "#",
// });
//
// const StyledButton = styled(Button)({
//     color: "white",
//     "&:hover": {
//         // textDecoration: "underline",
//     },
// });
//
// const Navbar = () => {
//     const cart = useAppSelector(CartSelector);
//
//     const links = [
//         {to: "/products", label: "Products"},
//         {to: "/cart", label: `Cart (${calcTotalProducts(cart.items)})`},
//         {to: "/order", label: "Order"},
//     ];
//
//     return (
//         <StyledAppBar position="static">
//             <Toolbar>
//                 {links.map((link, index) => (
//                     <StyledButton key={index}>
//                         <Link to={link.to} style={{textDecoration: "none", color: "white"}}>
//                             {link.label}
//                         </Link>
//                     </StyledButton>
//                 ))}
//             </Toolbar>
//         </StyledAppBar>
//     );
// };
//
// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import {makeStyles} from "@mui/styles";
// import {useAppSelector} from "src/API/store/hook";
// import {calcTotalProducts} from "src/Utils/scripts/calcTotalProducts";
// import {AppBar, Button, Toolbar} from "@mui/material";
// import {CartSelector} from "src/API/store/slices/cart/cart.slice";
// import {theme} from "src/Utils/theme/theme";
//
// const useNavbarStyles = makeStyles({
//     appBar: {
//         // backgroundColor: theme.palette.primary.main,
//         backgroundColor: "black !important",
//     },
//     button: {
//         color: "white",
//         "&:hover": {
//             textDecoration: "underline !important",
//         },
//     },
//     link: {
//         textDecoration: "none",
//         color: "white",
//     },
// });
//
// const Navbar = () => {
//     const classes = useNavbarStyles();
//     const cart = useAppSelector(CartSelector);
//
//     const links = [
//         { to: "/products", label: "Products" },
//         { to: "/cart", label: `Cart (${calcTotalProducts(cart.items)})` },
//         { to: "/order", label: "Order" },
//     ];
//
//     return (
//         <AppBar position="static" className={classes.appBar}>
//             <Toolbar>
//                 {links.map((link, index) => (
//                     <Button key={index} className={classes.button}>
//                         <Link to={link.to} className={classes.link}>
//                             {link.label}
//                         </Link>
//                     </Button>
//                 ))}
//             </Toolbar>
//         </AppBar>
//     );
// };
//
// export default Navbar;


