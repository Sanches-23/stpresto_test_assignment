import React from "react";
import { Box, Button, Container, Typography, styled } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    background: theme.palette.primary.main,
    color: "white",
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "white",
    "&:hover": {
        borderColor: "white",
    },
}));

const scrollToTop = (behavior?: ScrollBehavior) => {
    window.scrollTo({ top: 0, behavior: behavior ?? "auto" });
};

const Footer = () => {
    return (
        <StyledFooter component="footer">
            <Container maxWidth="lg">
                <StyledBox>
                    <Typography variant="body2"> &copy; 2024 With using fakeAPI.</Typography>
                    <StyledButton variant="outlined" onClick={() => scrollToTop("smooth")}>
                        To up! *FOOTER*
                    </StyledButton>
                </StyledBox>
            </Container>
        </StyledFooter>
    );
};

export default Footer;