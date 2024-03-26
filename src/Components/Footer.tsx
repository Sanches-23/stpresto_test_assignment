// import React from "react";
// import { Box, Button, Container, Typography } from "@mui/material";
//
// const scrollToTop = (behavior?: ScrollBehavior) => {
//     window.scrollTo({ top: 0, behavior: behavior});
// };
//
// const Footer = () => {
//     return (
//         <Box component="footer" sx={{ py: 3, bgcolor: "primary.main", color: "white" }}>
//             <Container maxWidth="lg">
//                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <Typography variant="body2"> &copy; 2024 With using fakeAPI.</Typography>
//                     <Button variant="outlined" color="inherit" onClick={() => scrollToTop("smooth")}>
//                         To up! *FOOTER*
//                     </Button>
//                 </Box>
//             </Container>
//         </Box>
//     );
// };
//
// export default Footer;


import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {theme} from "src/Utils/theme/theme";

const useFooterStyles = makeStyles({
    footer: {
        py: 3,
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        // color: theme.palette.primary.contrastText,
        color: "white",
        borderColor: "white",
        "&:hover": {
            borderColor: "white",
        },
    },
});

const scrollToTop = (behavior?: ScrollBehavior) => {
    window.scrollTo({ top: 0, behavior: behavior ?? 'auto' });
};

const Footer = () => {
    const classes = useFooterStyles();
    return (
        <Box component="footer" className={classes.footer}>
            <Container maxWidth="lg">
                <Box className={classes.container}>
                    <Typography variant="body2"> &copy; 2024 With using fakeAPI.</Typography>
                    <Button variant="outlined" className={classes.button} onClick={() => scrollToTop("smooth")}>
                        To up! *FOOTER*
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;