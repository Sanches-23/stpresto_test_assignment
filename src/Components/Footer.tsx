
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const scrollToTop = (behavior?: ScrollBehavior) => {
    window.scrollTo({ top: 0, behavior: behavior});
};

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, bgcolor: "primary.main", color: "white" }}>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body2"> &copy; 2024 With using fakeAPI.</Typography>
                    <Button variant="outlined" color="inherit" onClick={() => scrollToTop("smooth")}>
                        To up! *FOOTER*
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;