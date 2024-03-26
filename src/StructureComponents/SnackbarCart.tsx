import { Snackbar, Alert } from "@mui/material";
import React from "react";

type SnackbarCartProps = {
    isOpen: boolean;
    clickCount?: number;
    message?: string;
    onClose: () => void;
}

const SnackbarCart: React.FC<SnackbarCartProps> = ({ isOpen, clickCount = "", message = "", onClose }) => {
    return (
        <>
            <Snackbar
                open={isOpen}
                autoHideDuration={2000}
                onClose={onClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
                    {clickCount + " "}{message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default SnackbarCart;
//